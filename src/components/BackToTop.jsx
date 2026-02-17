import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';

/**
 * BackToTop — Floating button that appears after scrolling down,
 * and smoothly scrolls back to the top of the page.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          aria-label="Retour en haut"
          className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full glass-card flex items-center justify-center text-gold hover:text-gold-light hover:border-gold/30 transition-colors group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
