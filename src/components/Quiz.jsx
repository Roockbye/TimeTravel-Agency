import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions, destinations } from '../data/destinations';

const optionLetters = ['α', 'β', 'γ', 'δ'];

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({ 'paris-1889': 0, 'cretace-65m': 0, 'florence-1504': 0 });
  const [result, setResult] = useState(null);
  const [started, setStarted] = useState(false);

  const handleAnswer = (option) => {
    const newScores = { ...scores };
    Object.entries(option.scores).forEach(([key, val]) => {
      newScores[key] += val;
    });
    setScores(newScores);

    if (currentQ + 1 < quizQuestions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      const winnerId = Object.entries(newScores).sort((a, b) => b[1] - a[1])[0][0];
      const winner = destinations.find((d) => d.id === winnerId);
      setResult(winner);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setScores({ 'paris-1889': 0, 'cretace-65m': 0, 'florence-1504': 0 });
    setResult(null);
    setStarted(false);
  };

  return (
    <section id="quiz" className="py-28 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            <span className="text-accent text-xs uppercase tracking-[0.25em]">Diagnostic temporel</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Trouvez</span>{' '}
            <span className="text-white">Votre Époque</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            4 questions pour calibrer votre profil chrono et révéler la destination qui vous attend.
          </p>
        </motion.div>

        {/* Quiz card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-10 relative"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-gold/10 rounded-tl-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-gold/10 rounded-br-2xl pointer-events-none" />

          {!started && !result && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-6"
            >
              {/* Animated compass */}
              <div className="relative w-20 h-20 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30 animate-vortex" />
                <div className="absolute inset-2 rounded-full border border-gold/20 animate-vortex-reverse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl">🧭</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl text-white mb-3">
                Quel voyageur temporel êtes-vous ?
              </h3>
              <p className="text-gray-500 mb-8 max-w-sm mx-auto text-sm leading-relaxed">
                Chaque réponse affine notre algorithme de recommandation chrono-dimensionnelle.
              </p>
              <button
                onClick={() => setStarted(true)}
                className="group relative px-8 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 uppercase tracking-widest text-sm"
              >
                <span className="relative z-10">Lancer le diagnostic</span>
              </button>
            </motion.div>
          )}

          {started && !result && (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQ}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                {/* Progress steps */}
                <div className="flex items-center gap-2 mb-10">
                  {quizQuestions.map((_, i) => (
                    <div key={i} className="flex-1 flex items-center gap-2">
                      <div
                        className={`w-full h-1 rounded-full transition-all duration-500 ${
                          i < currentQ
                            ? 'bg-gold'
                            : i === currentQ
                            ? 'bg-gradient-to-r from-gold to-accent'
                            : 'bg-dark-lighter'
                        }`}
                      />
                    </div>
                  ))}
                  <span className="text-xs text-gray-600 ml-2 whitespace-nowrap">
                    {currentQ + 1}/{quizQuestions.length}
                  </span>
                </div>

                <h3 className="font-serif text-xl md:text-2xl text-white mb-8 leading-snug">
                  {quizQuestions[currentQ].question}
                </h3>

                <div className="space-y-3">
                  {quizQuestions[currentQ].options.map((option, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      onClick={() => handleAnswer(option)}
                      className="w-full text-left px-5 py-4 rounded-xl border border-dark-border bg-dark/50 text-gray-300 hover:border-accent/40 hover:text-white hover:bg-accent/5 transition-all duration-300 group flex items-center gap-4"
                    >
                      <span className="w-8 h-8 shrink-0 rounded-lg bg-dark-lighter border border-dark-border flex items-center justify-center text-accent/50 group-hover:text-accent group-hover:border-accent/30 transition-colors font-serif text-sm">
                        {optionLetters[i]}
                      </span>
                      <span className="text-sm leading-relaxed">{option.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-4">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span className="text-gold text-xs uppercase tracking-widest">Résultat</span>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden mb-6 group">
                <img
                  src={result.image}
                  alt={result.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-gold/70 text-xs uppercase tracking-[0.2em] mb-1">{result.epoch}</p>
                  <h3 className="font-serif text-3xl font-bold text-white">{result.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{result.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6 text-sm">{result.description}</p>

              <div className="flex items-center justify-center gap-6 mb-8 py-4 border-y border-dark-border">
                <div className="text-center">
                  <p className="text-gold font-bold text-lg">{result.price}</p>
                  <p className="text-[10px] text-gray-600 uppercase tracking-wider">Prix</p>
                </div>
                <div className="w-px h-8 bg-dark-border" />
                <div className="text-center">
                  <p className="text-white font-bold text-lg">{result.duration}</p>
                  <p className="text-[10px] text-gray-600 uppercase tracking-wider">Durée</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="#booking"
                  className="px-8 py-3 bg-gradient-to-r from-gold to-gold-light text-dark font-bold rounded-full hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 uppercase tracking-widest text-sm"
                >
                  Réserver ce voyage
                </a>
                <button
                  onClick={reset}
                  className="px-8 py-3 border border-dark-border text-gray-500 rounded-full hover:border-accent/30 hover:text-accent transition-all duration-300 text-sm"
                >
                  Refaire le diagnostic
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
