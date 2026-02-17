import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook — Animated counter that counts up to a target value.
 * @param {number} target — Final value
 * @param {number} duration — Animation duration in ms
 * @param {boolean} triggerOnView — Start counting when element enters viewport
 * @returns {{ count: number, ref: React.RefObject }}
 */
export function useCounter(target, duration = 2000, triggerOnView = false) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(!triggerOnView);
  const ref = useRef(null);

  useEffect(() => {
    if (!triggerOnView || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [triggerOnView]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);

  return { count, ref };
}

/**
 * Custom hook — Scroll progress (0 to 1) for the document.
 * @returns {number} scrollProgress
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      setProgress(total > 0 ? scrollTop / total : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return progress;
}

/**
 * Custom hook — Debounced value.
 * @param {*} value — Value to debounce
 * @param {number} delay — Delay in ms
 * @returns {*} Debounced value
 */
export function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}

/**
 * Custom hook — localStorage persistent state.
 * @param {string} key — localStorage key
 * @param {*} initialValue — Default value
 * @returns {[*, function]}
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage full or private browsing
    }
  }, [key, value]);

  return [value, setValue];
}

/**
 * Custom hook — Media query matcher.
 * @param {string} query — CSS media query string
 * @returns {boolean}
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

/**
 * Custom hook — Handles keyboard shortcut.
 * @param {string} key — Key to listen for
 * @param {Function} callback — Callback
 * @param {{ ctrl?: boolean, alt?: boolean, shift?: boolean }} modifiers
 */
export function useKeyboardShortcut(key, callback, modifiers = {}) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    const handler = (e) => {
      if (e.key.toLowerCase() !== key.toLowerCase()) return;
      if (modifiers.ctrl && !e.ctrlKey && !e.metaKey) return;
      if (modifiers.alt && !e.altKey) return;
      if (modifiers.shift && !e.shiftKey) return;
      e.preventDefault();
      callbackRef.current(e);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [key, modifiers.ctrl, modifiers.alt, modifiers.shift]);
}

/**
 * Utility — Sanitize user text input (strip HTML tags, limit length).
 * @param {string} input — Raw user input
 * @param {number} maxLength — Maximum allowed length
 * @returns {string}
 */
export function sanitizeInput(input, maxLength = 500) {
  if (typeof input !== 'string') return '';
  return input
    .replace(/<[^>]*>/g, '')      // strip HTML tags
    .replace(/[<>{}]/g, '')       // remove dangerous chars
    .trim()
    .slice(0, maxLength);
}

/**
 * Utility — Validate email format.
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

/**
 * Utility — Format price with locale.
 * @param {number} price
 * @returns {string}
 */
export function formatPrice(price) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  }).format(price);
}

/**
 * Utility — Smooth scroll to element by ID.
 * @param {string} id
 */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Custom hook — Click outside detection.
 * @param {React.RefObject} ref — Ref to observed element
 * @param {Function} callback — Called when click outside occurs
 */
export function useClickOutside(ref, callback) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callbackRef.current(e);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [ref]);
}
