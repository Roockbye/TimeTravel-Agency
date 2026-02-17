import { motion } from 'framer-motion';

/**
 * Reusable loading spinner with the TimeTravel Agency branding.
 * Used as Suspense fallback during lazy loading.
 */
export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="relative w-16 h-16">
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-gold/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        {/* Inner ring */}
        <motion.div
          className="absolute inset-2 rounded-full border border-accent/30 border-dashed"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        {/* Center dot */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-gold rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}
