import { motion } from 'framer-motion';
import { useScrollProgress } from '../utils/hooks';

/**
 * Horizontal scroll progress bar fixed at the top of the page.
 * Shows how far the user has scrolled through the page.
 */
export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{
        scaleX: progress,
        background: 'linear-gradient(90deg, #7c5bf5, #c9a84c, #e2c97e)',
      }}
    />
  );
}
