import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Animated counter hook
function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
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
  }, [target, duration]);
  return count;
}

export default function Hero() {
  const travelers = useCounter(2847);
  const epochs = useCounter(12);
  const satisfaction = useCounter(99);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay"
    >
      {/* Deep space background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt="Space time"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-gold/5" />
      </div>

      {/* Vortex portal rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
          {/* Ring 1 */}
          <div className="absolute inset-0 animate-vortex">
            <div className="w-full h-full rounded-full border border-gold/10" />
          </div>
          {/* Ring 2 */}
          <div className="absolute inset-8 animate-vortex-reverse">
            <div className="w-full h-full rounded-full border border-accent/10" />
          </div>
          {/* Ring 3 */}
          <div className="absolute inset-16 animate-vortex" style={{ animationDuration: '15s' }}>
            <div className="w-full h-full rounded-full border border-gold/15" />
          </div>
          {/* Ring 4 - dashed */}
          <div className="absolute inset-24 animate-vortex-reverse" style={{ animationDuration: '30s' }}>
            <div className="w-full h-full rounded-full border border-dashed border-gold/8" />
          </div>
          {/* Center glow */}
          <div className="absolute inset-32 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-gradient-radial from-gold/10 via-accent/5 to-transparent blur-2xl" />
          </div>
        </div>
      </div>

      {/* Floating time particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-gold/30' : i % 3 === 1 ? 'bg-accent/20' : 'bg-white/10'}`}
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.7, 0.1],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Agency badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-dark/40 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs text-gray-400 uppercase tracking-widest">
            Portail temporel actif — Saison 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-4 leading-[0.9]"
        >
          <span className="text-white">Time</span>
          <span className="text-gradient">Travel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gold/60 uppercase tracking-[0.6em] text-xs md:text-sm mb-8 font-light"
        >
          Agence de voyage temporel de luxe
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed font-light"
        >
          Des lumières de la Belle Époque aux rugissements du Crétacé,
          traversez les siècles en toute sécurité.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#destinations"
            className="group relative px-8 py-4 bg-gold text-dark font-bold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 text-sm uppercase tracking-widest overflow-hidden"
          >
            <span className="relative z-10">Explorer les époques</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#quiz"
            className="px-8 py-4 border border-gold/20 text-gold/80 rounded-full hover:bg-gold/5 hover:border-gold/40 hover:text-gold transition-all duration-300 text-sm uppercase tracking-widest"
          >
            Trouver mon voyage
          </a>
        </motion.div>

        {/* Stats counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { value: travelers.toLocaleString(), label: 'Chrono-voyageurs', suffix: '+' },
            { value: epochs, label: 'Époques accessibles', suffix: '' },
            { value: satisfaction, label: 'Satisfaction', suffix: '%' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-gold font-serif text-2xl md:text-3xl font-bold">
                {stat.value}{stat.suffix}
              </p>
              <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-gray-600 uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 border border-gold/20 rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1 bg-gold rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
