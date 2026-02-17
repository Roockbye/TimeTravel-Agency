import { motion } from 'framer-motion';
import { faqData } from '../data/destinations';

const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Quiz', href: '#quiz' },
  { label: 'Réservation', href: '#booking' },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-dark-border pt-20 pb-8 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gold/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand — wider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <a href="#hero" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-dark text-sm font-bold shadow-md shadow-gold/20">
                TT
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-white leading-none group-hover:text-gold transition-colors">
                  TimeTravel
                </span>
                <span className="text-[9px] text-gold/50 uppercase tracking-[0.35em] leading-none">
                  Agency
                </span>
              </div>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-sm">
              L'agence de voyage temporel de luxe. Explorez les époques les plus fascinantes
              de l'histoire avec la garantie d'un retour sûr.
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-600">
              <span className="px-2.5 py-1 rounded border border-dark-border bg-dark-lighter">
                Licence N°TTA-2026-001
              </span>
              <span className="px-2.5 py-1 rounded border border-dark-border bg-dark-lighter">
                IA Mistral
              </span>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <h4 className="text-[10px] text-gold uppercase tracking-[0.3em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-gold/40" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gold transition-all duration-300" />
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
            className="md:col-span-4"
          >
            <h4 className="text-[10px] text-gold uppercase tracking-[0.3em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-gold/40" />
              Questions fréquentes
            </h4>
            <div className="space-y-2">
              {faqData.slice(0, 3).map((faq, i) => (
                <details key={i} className="group glass-card rounded-lg overflow-hidden">
                  <summary className="text-gray-400 text-sm cursor-pointer hover:text-gold transition-colors px-4 py-3 flex items-center gap-2 list-none">
                    <span className="text-[10px] text-accent group-open:rotate-90 transition-transform duration-300">▶</span>
                    <span className="flex-1">{faq.q}</span>
                  </summary>
                  <p className="text-gray-600 text-xs px-4 pb-3 pl-8 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs">
            © 2026 TimeTravel Agency — Projet pédagogique M1/M2 Digital & IA
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-700 text-xs flex items-center gap-1.5">
              Propulsé par
              <span className="text-accent">Mistral AI</span>
              +
              <span className="text-gold">React</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
