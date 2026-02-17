import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions, destinations } from '../data/destinations';

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
      // Find winner
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
    <section id="quiz" className="py-24 px-4 relative">
      <div className="max-w-3xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Trouvez votre époque</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Quiz Personnalisé
          </h2>
          <p className="text-gray-400 text-lg">
            Répondez à 4 questions et découvrez la destination temporelle faite pour vous.
          </p>
        </motion.div>

        {/* Quiz card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-card border border-dark-border rounded-2xl p-8 md:p-10 shadow-lg shadow-black/20"
        >
          {!started && !result && (
            <div className="text-center">
              <p className="text-6xl mb-6">🕰️</p>
              <h3 className="font-serif text-2xl text-white mb-4">
                Prêt à découvrir votre destination idéale ?
              </h3>
              <p className="text-gray-400 mb-8">
                Un quiz rapide de 4 questions pour trouver l'époque qui vous correspond le mieux.
              </p>
              <button
                onClick={() => setStarted(true)}
                className="px-8 py-3 bg-gold text-dark font-bold rounded-full hover:bg-gold-light transition-all duration-300 uppercase tracking-widest text-sm"
              >
                Commencer le quiz
              </button>
            </div>
          )}

          {started && !result && (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQ}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                {/* Progress */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-gold text-sm">
                    Question {currentQ + 1}/{quizQuestions.length}
                  </span>
                  <div className="flex-1 mx-4 h-1 bg-dark-lighter rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gold rounded-full"
                      initial={{ width: `${(currentQ / quizQuestions.length) * 100}%` }}
                      animate={{
                        width: `${((currentQ + 1) / quizQuestions.length) * 100}%`,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>

                <h3 className="font-serif text-xl md:text-2xl text-white mb-8">
                  {quizQuestions[currentQ].question}
                </h3>

                <div className="space-y-3">
                  {quizQuestions[currentQ].options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(option)}
                      className="w-full text-left px-6 py-4 rounded-xl border border-dark-border bg-dark-lighter text-gray-300 hover:border-gold/40 hover:text-gold hover:bg-gold/5 transition-all duration-300 group"
                    >
                      <span className="text-gold/40 group-hover:text-gold mr-3 font-mono text-sm">
                        {String.fromCharCode(65 + i)}.
                      </span>
                      {option.label}
                    </button>
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
              className="text-center"
            >
              <p className="text-gold uppercase tracking-wider text-sm mb-4">
                Votre destination idéale
              </p>

              <div className="relative rounded-xl overflow-hidden mb-6 h-48">
                <img
                  src={result.image}
                  alt={result.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${result.gradient}`} />
                <div className="absolute bottom-4 left-4 text-left">
                  <h3 className="font-serif text-3xl font-bold text-white">{result.title}</h3>
                  <p className="text-white/80 text-sm">{result.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">{result.description}</p>

              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-gold font-bold text-lg">{result.price}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">{result.duration}</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="#booking"
                  className="px-8 py-3 bg-gold text-dark font-bold rounded-full hover:bg-gold-light transition-all duration-300 uppercase tracking-widest text-sm"
                >
                  Réserver ce voyage
                </a>
                <button
                  onClick={reset}
                  className="px-8 py-3 border border-dark-border text-gray-400 rounded-full hover:border-gold/40 hover:text-gold transition-all duration-300 text-sm"
                >
                  Refaire le quiz
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
