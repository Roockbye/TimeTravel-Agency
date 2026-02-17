import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

export default function DestinationModal({ destination, onClose }) {
  const dest = destination;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        >
          {/* Decorative top line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          {/* Header Image */}
          <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-2xl">
            <img
              src={dest.image}
              alt={dest.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/30 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full glass-card text-white hover:text-gold transition-colors"
            >
              <HiX size={18} />
            </button>

            {/* Epoch badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs rounded-full bg-accent/80 text-white font-medium backdrop-blur-sm">
                {dest.epoch}
              </span>
            </div>

            <div className="absolute bottom-5 left-6 right-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gradient leading-tight">
                {dest.title}
              </h2>
              <p className="text-white/50 text-sm mt-1.5">{dest.subtitle}</p>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Prix', value: dest.price, color: 'text-gold' },
                { label: 'Durée', value: dest.duration, color: 'text-white' },
                { label: 'Époque', value: dest.epoch, color: 'text-accent' },
              ].map((stat) => (
                <div key={stat.label} className="text-center py-3 rounded-xl bg-dark/50 border border-dark-border">
                  <p className={`${stat.color} text-lg font-bold`}>{stat.value}</p>
                  <p className="text-[10px] text-gray-600 uppercase tracking-[0.15em] mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-8 text-sm">{dest.description}</p>

            {/* Highlights */}
            <div className="mb-8">
              <h4 className="text-[10px] text-gold uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-gold/40" />
                Points forts
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {dest.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300 text-sm py-2 px-3 rounded-lg bg-dark/30">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-gold to-accent rounded-full shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#booking"
              onClick={onClose}
              className="block text-center w-full px-6 py-3.5 bg-gradient-to-r from-gold to-gold-light text-dark font-bold rounded-full hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 uppercase tracking-widest text-sm"
            >
              Réserver ce voyage
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
