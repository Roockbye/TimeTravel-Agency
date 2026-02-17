import { motion } from 'framer-motion';
import { faqData } from '../data/destinations';

export default function Footer() {
  return (
    <footer id="footer" className="bg-dark-card border-t border-dark-border pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⏳</span>
              <span className="font-serif text-xl font-bold text-gold">TimeTravel Agency</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              L'agence de voyage temporel de luxe. Explorez les époques les plus fascinantes
              de l'histoire en toute sécurité.
            </p>
            <p className="text-gray-600 text-xs">
              Licence Chrononautique N°TTA-2026-001
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-gold uppercase tracking-wider text-sm mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: 'Accueil', href: '#hero' },
                { label: 'Destinations', href: '#destinations' },
                { label: 'Quiz Personnalisé', href: '#quiz' },
                { label: 'Réservation', href: '#booking' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-gold uppercase tracking-wider text-sm mb-4">FAQ</h4>
            <div className="space-y-3">
              {faqData.slice(0, 3).map((faq, i) => (
                <details key={i} className="group">
                  <summary className="text-gray-400 text-sm cursor-pointer hover:text-gold transition-colors list-none flex items-center gap-2">
                    <span className="text-gold text-xs group-open:rotate-90 transition-transform">▶</span>
                    {faq.q}
                  </summary>
                  <p className="text-gray-500 text-xs mt-1 ml-5 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2026 TimeTravel Agency — Projet pédagogique M1/M2 Digital & IA
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 text-xs">Fait avec ❤️ et de l'IA générative</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
