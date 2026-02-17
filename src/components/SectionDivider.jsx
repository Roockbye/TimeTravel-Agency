import { motion } from 'framer-motion';

export default function SectionDivider({ icon = '◆', label = '' }) {
  return (
    <div className="section-divider">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="relative z-10 flex flex-col items-center gap-2"
      >
        <div className="w-10 h-10 rounded-full border border-gold/20 bg-dark flex items-center justify-center">
          <span className="text-gold text-sm">{icon}</span>
        </div>
        {label && (
          <span className="text-[10px] text-gray-600 uppercase tracking-[0.3em]">{label}</span>
        )}
      </motion.div>
    </div>
  );
}
