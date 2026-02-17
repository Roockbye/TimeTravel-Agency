import { useState } from 'react';
import { motion } from 'framer-motion';
import { destinations } from '../data/destinations';
import DestinationModal from './DestinationModal';

export default function Destinations() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="destinations" className="py-28 px-4 relative">
      {/* Decorative timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent hidden lg:block" />

      {/* Section heading */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/15 bg-gold/5 mb-6"
        >
          <span className="text-gold text-xs">◆</span>
          <span className="text-gold/70 text-xs uppercase tracking-[0.3em]">3 portails disponibles</span>
          <span className="text-gold text-xs">◆</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Choisissez votre <span className="text-gradient">Époque</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-500 max-w-lg mx-auto text-sm md:text-base font-light"
        >
          Chaque destination est un portail vers une époque fascinante.
          Cliquez pour explorer les détails.
        </motion.p>
      </div>

      {/* Cards — alternating layout */}
      <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
        {destinations.map((dest, index) => (
          <motion.div
            key={dest.id}
            initial={{ opacity: 0, y: 60, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
          >
            {/* Image side */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(dest)}
              className="w-full md:w-1/2 cursor-pointer group relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/30">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${dest.gradient} mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />

                {/* Floating price */}
                <div className="absolute top-4 right-4 glass-card px-4 py-2 rounded-xl">
                  <span className="text-gold font-bold text-sm">{dest.price}</span>
                  <span className="text-gray-500 text-xs block">{dest.duration}</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-gold/90 text-dark px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest">
                    Explorer →
                  </div>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold/20 rounded-tl-lg pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold/20 rounded-br-lg pointer-events-none" />
            </motion.div>

            {/* Content side */}
            <div className="w-full md:w-1/2 space-y-4">
              {/* Epoch chip */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold/60 border border-gold/10 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dest.accentColor }} />
                  {dest.epoch}
                </span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="font-serif text-3xl md:text-4xl font-bold text-white"
              >
                {dest.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gold/50 text-sm font-light italic"
              >
                {dest.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-gray-400 text-sm leading-relaxed"
              >
                {dest.description}
              </motion.p>

              {/* Highlights mini list */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-2 pt-2"
              >
                {dest.highlights.slice(0, 3).map((h, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-dark-lighter border border-dark-border text-gray-400"
                  >
                    {h}
                  </span>
                ))}
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.55 }}
                onClick={() => setSelected(dest)}
                className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:text-gold-light transition-colors pt-2 group"
              >
                Voir les détails
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

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
