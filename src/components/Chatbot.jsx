import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChat, HiX, HiPaperAirplane } from 'react-icons/hi';
import { chatbotSystemPrompt, destinations } from '../data/destinations';

const quickReplies = [
  "Quelles destinations proposez-vous ?",
  "Quel est le prix d'un voyage ?",
  "Comment fonctionne le voyage temporel ?",
  "Quelle destination me recommandez-vous ?",
];

// Simple local AI response logic (no API needed)
function generateBotResponse(userMessage) {
  const msg = userMessage.toLowerCase();

  if (msg.includes('bonjour') || msg.includes('salut') || msg.includes('hello') || msg.includes('hey')) {
    return "Bonjour et bienvenue chez TimeTravel Agency ! ✨ Je suis votre guide temporel. Comment puis-je vous aider à trouver le voyage parfait à travers le temps ?";
  }

  if (msg.includes('destination') || msg.includes('proposez') || msg.includes('où') || msg.includes('voyage')) {
    return "Nous proposons trois destinations exceptionnelles :\n\n🗼 **Paris 1889** — La Belle Époque et l'inauguration de la Tour Eiffel (12 500 € / 7 jours)\n\n🦕 **Crétacé -65M** — L'ère des dinosaures dans toute sa splendeur (18 900 € / 5 jours)\n\n🎨 **Florence 1504** — La Renaissance italienne avec Michel-Ange (14 200 € / 6 jours)\n\nLaquelle vous intrigue le plus ?";
  }

  if (msg.includes('prix') || msg.includes('coût') || msg.includes('combien') || msg.includes('tarif') || msg.includes('cher')) {
    return "Nos tarifs tout inclus :\n\n• Paris 1889 : **12 500 €** (7 jours)\n• Crétacé -65M : **18 900 €** (5 jours)\n• Florence 1504 : **14 200 €** (6 jours)\n\nChaque forfait inclut le transport temporel, l'hébergement d'époque, les repas et un guide chrononaute personnel. Un investissement unique pour une expérience inoubliable !";
  }

  if (msg.includes('paris') || msg.includes('eiffel') || msg.includes('belle époque') || msg.includes('1889')) {
    return "Paris 1889, un choix magnifique ! 🗼 Vous vivrez l'effervescence de l'Exposition Universelle, assisterez à l'inauguration de la Tour Eiffel et vous promènerez sur les Champs-Élysées illuminés au gaz. Les cafés littéraires du Quartier Latin et les spectacles du Moulin Rouge complètent cette expérience inoubliable. 7 jours à 12 500 €.";
  }

  if (msg.includes('dinosaure') || msg.includes('crétacé') || msg.includes('préhistoire') || msg.includes('65m') || msg.includes('nature')) {
    return "Le Crétacé, l'aventure ultime ! 🦕 Imaginez : observer un T-Rex depuis notre bulle d'observation sécurisée, traverser des forêts de fougères géantes et admirer un ciel nocturne sans aucune pollution lumineuse. C'est notre destination la plus spectaculaire. 5 jours à 18 900 €.";
  }

  if (msg.includes('florence') || msg.includes('renaissance') || msg.includes('michel-ange') || msg.includes('1504') || msg.includes('art')) {
    return "Florence 1504, le berceau de la Renaissance ! 🎨 Visitez l'atelier de Michel-Ange pendant la création du David, assistez aux cours de Léonard de Vinci et flânez dans les somptueux palais des Médicis. La gastronomie toscane authentique complétera cette immersion culturelle. 6 jours à 14 200 €.";
  }

  if (msg.includes('recommand') || msg.includes('conseil') || msg.includes('choisir') || msg.includes('idéal') || msg.includes('quel')) {
    return "Pour vous recommander la destination idéale, dites-moi : préférez-vous l'effervescence culturelle (→ Paris 1889), l'aventure nature (→ Crétacé -65M) ou l'art et l'architecture (→ Florence 1504) ? Vous pouvez aussi essayer notre quiz personnalisé dans la section dédiée ! ✨";
  }

  if (msg.includes('sécurité') || msg.includes('sûr') || msg.includes('danger') || msg.includes('risque')) {
    return "Votre sécurité est notre priorité absolue ! Nos capsules temporelles utilisent une technologie de bulle d'observation qui vous rend intouchable. Vous pouvez interagir avec l'époque sans jamais être en danger. De plus, chaque voyage est encadré par des chrononautes certifiés. 🛡️";
  }

  if (msg.includes('comment') || msg.includes('fonctionne') || msg.includes('technologie') || msg.includes('temporal')) {
    return "Notre technologie de déplacement temporel repose sur la distorsion quantique contrôlée. Le transit ne prend que quelques secondes de temps subjectif. Vous êtes placé dans une bulle d'observation qui vous permet d'interagir avec l'époque tout en préservant le cours de l'histoire. Fascinant, n'est-ce pas ? ⚡";
  }

  if (msg.includes('réserv') || msg.includes('book') || msg.includes('inscri')) {
    return "Pour réserver, rendez-vous dans la section 'Réservation' de notre site ! Sélectionnez votre destination, vos dates préférées et le nombre de voyageurs. Notre équipe vous contactera sous 24h pour finaliser votre aventure temporelle. 📋";
  }

  if (msg.includes('merci') || msg.includes('super') || msg.includes('génial') || msg.includes('parfait')) {
    return "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. Chez TimeTravel Agency, chaque voyage est une aventure unique. J'espère vous compter bientôt parmi nos chrono-voyageurs ! ✨";
  }

  return "Question intéressante ! En tant qu'expert en voyages temporels, je vous recommande d'explorer nos trois destinations uniques : Paris 1889, le Crétacé -65M ou Florence 1504. Posez-moi des questions sur l'une d'entre elles, ou essayez notre quiz pour trouver votre voyage idéal ! 🕰️";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content:
        "Bienvenue chez TimeTravel Agency ! ✨ Je suis votre assistant virtuel. Posez-moi vos questions sur nos destinations temporelles ou laissez-moi vous guider vers le voyage parfait !",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const userMsg = text || input.trim();
    if (!userMsg) return;

    setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(userMsg);
      setMessages((prev) => [...prev, { role: 'bot', content: botResponse }]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
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
                  En ligne
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
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Posez-moi vos questions..."
                className="flex-1 bg-dark-lighter border border-dark-border rounded-full px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/40 transition-colors"
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-full bg-gold text-dark flex items-center justify-center hover:bg-gold-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
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
