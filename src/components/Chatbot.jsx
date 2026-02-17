import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChat, HiX, HiPaperAirplane } from 'react-icons/hi';
import { chatbotSystemPrompt } from '../data/destinations';
import { sanitizeInput, useKeyboardShortcut } from '../utils/hooks';

const MISTRAL_API_KEY = import.meta.env.VITE_MISTRAL_API_KEY;
const HAS_API = MISTRAL_API_KEY && MISTRAL_API_KEY !== 'your_mistral_api_key_here';

const MAX_MESSAGE_LENGTH = 500;
const MAX_MESSAGES_PER_SESSION = 50;

const quickReplies = [
  "Quelles destinations proposez-vous ?",
  "Quel est le prix d'un voyage ?",
  "Comment fonctionne le voyage temporel ?",
  "Quelle destination me recommandez-vous ?",
  "Est-ce que c'est dangereux ?",
];

// ─── Mistral AI API call ───
async function callMistralAPI(conversationHistory) {
  // Try Vercel serverless proxy first, then direct API call
  const endpoints = [
    { url: '/api/chat', useAuth: false },
    { url: 'https://api.mistral.ai/v1/chat/completions', useAuth: true },
  ];

  for (const endpoint of endpoints) {
    try {
      const headers = { 'Content-Type': 'application/json' };
      if (endpoint.useAuth) {
        if (!HAS_API) continue;
        headers['Authorization'] = `Bearer ${MISTRAL_API_KEY}`;
      }

      const body = endpoint.useAuth
        ? JSON.stringify({
            model: 'mistral-small-latest',
            messages: conversationHistory,
            max_tokens: 300,
            temperature: 0.7,
          })
        : JSON.stringify({ messages: conversationHistory });

      const response = await fetch(endpoint.url, {
        method: 'POST',
        headers,
        body,
      });

      if (!response.ok) continue;

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;
      if (content) return content;
    } catch {
      continue;
    }
  }

  return null; // All endpoints failed → will use fallback
}

// ─── Local fallback (rule-based) ───
function generateFallbackResponse(userMessage) {
  const msg = userMessage.toLowerCase();

  if (msg.includes('bonjour') || msg.includes('salut') || msg.includes('hello') || msg.includes('hey')) {
    return "Bonjour et bienvenue chez TimeTravel Agency ! ✨ Je suis votre guide temporel. Comment puis-je vous aider à trouver le voyage parfait à travers le temps ?";
  }
  if (msg.includes('destination') || msg.includes('proposez') || msg.includes('où') || msg.includes('voyage')) {
    return "Nous proposons trois destinations exceptionnelles :\n\n🗼 **Paris 1889** — La Belle Époque et l'inauguration de la Tour Eiffel (12 500 € / 7 jours)\n\n🦕 **Crétacé -65M** — L'ère des dinosaures dans toute sa splendeur (18 900 € / 5 jours)\n\n🎨 **Florence 1504** — La Renaissance italienne avec Michel-Ange (14 200 € / 6 jours)\n\nLaquelle vous intrigue le plus ?";
  }
  if (msg.includes('prix') || msg.includes('coût') || msg.includes('combien') || msg.includes('tarif') || msg.includes('cher')) {
    return "Nos tarifs tout inclus :\n\n• Paris 1889 : **12 500 €** (7 jours)\n• Crétacé -65M : **18 900 €** (5 jours)\n• Florence 1504 : **14 200 €** (6 jours)\n\nChaque forfait inclut le transport temporel, l'hébergement d'époque, les repas et un guide chrononaute personnel.";
  }
  if (msg.includes('paris') || msg.includes('eiffel') || msg.includes('belle époque') || msg.includes('1889')) {
    return "Paris 1889, un choix magnifique ! 🗼 Vivez l'effervescence de l'Exposition Universelle, assistez à l'inauguration de la Tour Eiffel et promenez-vous sur les Champs-Élysées illuminés au gaz. 7 jours à 12 500 €.";
  }
  if (msg.includes('dinosaure') || msg.includes('crétacé') || msg.includes('préhistoire') || msg.includes('65m') || msg.includes('nature')) {
    return "Le Crétacé, l'aventure ultime ! 🦕 Observez un T-Rex depuis notre bulle d'observation sécurisée, traversez des forêts de fougères géantes et admirez un ciel nocturne sans pollution lumineuse. 5 jours à 18 900 €.";
  }
  if (msg.includes('florence') || msg.includes('renaissance') || msg.includes('michel-ange') || msg.includes('1504') || msg.includes('art')) {
    return "Florence 1504, le berceau de la Renaissance ! 🎨 Visitez l'atelier de Michel-Ange pendant la création du David et flânez dans les palais des Médicis. 6 jours à 14 200 €.";
  }
  if (msg.includes('recommand') || msg.includes('conseil') || msg.includes('choisir') || msg.includes('idéal') || msg.includes('quel')) {
    return "Préférez-vous l'effervescence culturelle (→ Paris 1889), l'aventure nature (→ Crétacé -65M) ou l'art et l'architecture (→ Florence 1504) ? Vous pouvez aussi essayer notre quiz personnalisé ! ✨";
  }
  if (msg.includes('sécurité') || msg.includes('sûr') || msg.includes('danger') || msg.includes('risque')) {
    return "Votre sécurité est notre priorité ! Nos capsules temporelles utilisent une bulle d'observation qui vous rend intouchable. Chaque voyage est encadré par des chrononautes certifiés. 🛡️";
  }
  if (msg.includes('comment') || msg.includes('fonctionne') || msg.includes('technologie') || msg.includes('temporal')) {
    return "Notre technologie repose sur la distorsion quantique contrôlée. Le transit ne prend que quelques secondes. Vous êtes dans une bulle d'observation qui préserve le cours de l'histoire. ⚡";
  }
  if (msg.includes('réserv') || msg.includes('book') || msg.includes('inscri')) {
    return "Pour réserver, rendez-vous dans la section 'Réservation' de notre site ! Sélectionnez votre destination, vos dates et le nombre de voyageurs. 📋";
  }
  if (msg.includes('merci') || msg.includes('super') || msg.includes('génial') || msg.includes('parfait')) {
    return "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. J'espère vous compter bientôt parmi nos chrono-voyageurs ! ✨";
  }

  return "Question intéressante ! Je vous recommande d'explorer nos trois destinations : Paris 1889, le Crétacé -65M ou Florence 1504. Posez-moi des questions sur l'une d'entre elles ! 🕰️";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content:
        "Bienvenue chez TimeTravel Agency ! ✨ Je suis votre assistant virtuel propulsé par IA. Posez-moi vos questions sur nos destinations temporelles ou laissez-moi vous guider vers le voyage parfait !",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);
  const messageCountRef = useRef(0);
  // Keep conversation history for Mistral API context
  const conversationRef = useRef([
    { role: 'system', content: chatbotSystemPrompt },
  ]);

  // Keyboard shortcut to toggle chatbot
  useKeyboardShortcut('k', () => setIsOpen((o) => !o), { ctrl: true });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = async (text) => {
    const rawMsg = text || input.trim();
    if (!rawMsg || isTyping) return;

    // Security: sanitize input & enforce limits
    const userMsg = sanitizeInput(rawMsg, MAX_MESSAGE_LENGTH);
    if (!userMsg) return;

    // Rate limit: prevent spam
    messageCountRef.current++;
    if (messageCountRef.current > MAX_MESSAGES_PER_SESSION) {
      setMessages((prev) => [
        ...prev,
        { role: 'bot', content: "Vous avez atteint la limite de messages pour cette session. Veuillez rafraîchir la page pour continuer." },
      ]);
      return;
    }

    setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Add user message to conversation history
    conversationRef.current.push({ role: 'user', content: userMsg });

    try {
      // Try Mistral AI API first
      const aiResponse = await callMistralAPI(conversationRef.current);

      if (aiResponse) {
        // AI responded — add to history & display
        conversationRef.current.push({ role: 'assistant', content: aiResponse });
        setMessages((prev) => [...prev, { role: 'bot', content: aiResponse }]);
      } else {
        // Fallback to local rule-based
        const fallback = generateFallbackResponse(userMsg);
        conversationRef.current.push({ role: 'assistant', content: fallback });
        setMessages((prev) => [...prev, { role: 'bot', content: fallback }]);
      }
    } catch {
      // Error → fallback
      const fallback = generateFallbackResponse(userMsg);
      conversationRef.current.push({ role: 'assistant', content: fallback });
      setMessages((prev) => [...prev, { role: 'bot', content: fallback }]);
    }

    setIsTyping(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Simple markdown-like bold rendering
  const renderContent = (text) => {
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line.split(/(\*\*[^*]+\*\*)/).map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="text-gold font-semibold">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-gold/20 transition-all duration-300 ${
          isOpen
            ? 'bg-dark-lighter border border-dark-border text-gray-400 hover:text-white'
            : 'bg-gold text-dark hover:bg-gold-light'
        }`}
        aria-label="Chat"
      >
        {isOpen ? <HiX size={24} /> : <HiChat size={24} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-8rem)] bg-dark-card border border-dark-border rounded-2xl shadow-2xl shadow-black/40 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-dark-lighter px-4 py-3 border-b border-dark-border flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm">
                ⏳
              </div>
              <div>
                <p className="text-white font-semibold text-sm">TimeTravel Assistant</p>
                <p className="text-green-400 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                  {HAS_API ? 'IA Mistral connectée' : 'En ligne'}
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-gold text-dark rounded-br-md'
                        : 'bg-dark-lighter text-gray-200 border border-dark-border rounded-bl-md'
                    }`}
                  >
                    {renderContent(msg.content)}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-dark-lighter border border-dark-border rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1">
                    <span className="w-2 h-2 bg-gold/60 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 bg-gold/60 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 bg-gold/60 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {quickReplies.map((qr, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(qr)}
                    className="text-xs px-3 py-1.5 rounded-full border border-gold/20 text-gold/80 hover:bg-gold/10 hover:text-gold transition-colors"
                  >
                    {qr}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-dark-border flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, MAX_MESSAGE_LENGTH))}
                onKeyDown={handleKeyDown}
                maxLength={MAX_MESSAGE_LENGTH}
                placeholder="Posez-moi vos questions… (Ctrl+K)"
                className="flex-1 bg-dark-lighter border border-dark-border rounded-full px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/40 transition-colors"
                aria-label="Message au chatbot"
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 rounded-full bg-gold text-dark flex items-center justify-center hover:bg-gold-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                aria-label="Envoyer"
              >
                <HiPaperAirplane size={16} className="rotate-90" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
