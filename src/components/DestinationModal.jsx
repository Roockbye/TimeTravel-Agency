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
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="bg-dark-card border border-dark-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          {/* Header Image */}
          <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-2xl">
            <img
              src={dest.image}
              alt={dest.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${dest.gradient}`} />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-dark/60 backdrop-blur-sm text-white p-2 rounded-full hover:bg-dark/80 transition-colors"
            >
              <HiX size={20} />
            </button>
            <div className="absolute bottom-4 left-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                {dest.title}
              </h2>
              <p className="text-white/80 text-sm mt-1">{dest.subtitle}</p>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8">
            {/* Price & Duration */}
            <div className="flex items-center gap-6 mb-6 pb-6 border-b border-dark-border">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Prix</p>
                <p className="text-gold text-xl font-bold">{dest.price}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Durée</p>
                <p className="text-white text-xl font-bold">{dest.duration}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Époque</p>
                <p className="text-white text-xl font-bold">{dest.epoch}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-6">{dest.description}</p>

            {/* Highlights */}
            <h4 className="text-gold uppercase tracking-wider text-sm mb-3">Points forts</h4>
            <ul className="space-y-2 mb-8">
              {dest.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-gold rounded-full shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#booking"
              onClick={onClose}
              className="block text-center w-full px-6 py-3 bg-gold text-dark font-bold rounded-full hover:bg-gold-light transition-all duration-300 uppercase tracking-widest text-sm"
            >
              Réserver ce voyage
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
