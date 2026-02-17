import { useState } from 'react';
import { motion } from 'framer-motion';
import { destinations } from '../data/destinations';
import DestinationModal from './DestinationModal';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function Destinations() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="destinations" className="py-24 px-4 relative">
      {/* Section heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gold uppercase tracking-[0.3em] text-sm mb-4"
        >
          Nos destinations
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Traversez les Époques
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Trois destinations extraordinaires vous attendent. Choisissez votre époque
          et vivez une aventure inoubliable.
        </motion.p>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {destinations.map((dest) => (
          <motion.div
            key={dest.id}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => setSelected(dest)}
            className="group cursor-pointer relative rounded-2xl overflow-hidden bg-dark-card border border-dark-border hover:border-gold/30 transition-all duration-500 shadow-lg shadow-black/20"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={dest.image}
                alt={dest.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${dest.gradient}`} />

              {/* Price badge */}
              <div className="absolute top-4 right-4 bg-dark/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gold/20">
                <span className="text-gold font-bold text-sm">{dest.price}</span>
              </div>

              {/* Epoch badge */}
              <div className="absolute bottom-4 left-4">
                <span className="text-xs uppercase tracking-wider text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  {dest.epoch}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-serif text-2xl font-bold text-white mb-1 group-hover:text-gold transition-colors">
                {dest.title}
              </h3>
              <p className="text-gold/70 text-sm mb-3">{dest.subtitle}</p>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                {dest.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-500">{dest.duration}</span>
                <span className="text-gold text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Découvrir →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Detail Modal */}
      {selected && (
        <DestinationModal
          destination={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
