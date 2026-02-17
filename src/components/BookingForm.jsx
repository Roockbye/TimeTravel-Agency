import { useState } from 'react';
import { motion } from 'framer-motion';
import { destinations } from '../data/destinations';

const inputClasses =
  'w-full bg-dark/60 border border-dark-border rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/10 transition-all duration-300';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
    travelers: '1',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-28 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 mb-6">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="text-gold text-xs uppercase tracking-[0.25em]">Réservation</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Préparez Votre</span>{' '}
            <span className="text-gradient">Traversée</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Complétez ce formulaire et nos chrononautes vous contacteront sous 24h pour finaliser votre départ.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-10 relative"
        >
          {/* Decorative line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-gray-500 mb-2 uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full" />
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jean Dupont"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-2 uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jean@email.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs text-gray-500 mb-2 uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    Destination
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className={`${inputClasses} appearance-none cursor-pointer`}
                  >
                    <option value="">Choisir...</option>
                    {destinations.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.title} — {d.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-2 uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    Date de départ
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-2 uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    Voyageurs
                  </label>
                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none cursor-pointer`}
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} {n > 1 ? 'voyageurs' : 'voyageur'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-2 uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent/50 rounded-full" />
                  Message (optionnel)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Précisions, demandes spéciales, époque préférée..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full group relative px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-dark font-bold rounded-full hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 uppercase tracking-widest text-sm overflow-hidden"
              >
                <span className="relative z-10">Envoyer ma demande</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <p className="text-center text-gray-600 text-xs">
                Confirmation sous 24h · Annulation gratuite jusqu'à 72h avant le départ
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-14"
            >
              {/* Success animation */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/20 to-accent/10 flex items-center justify-center"
                >
                  <span className="text-3xl">✦</span>
                </motion.div>
                <div className="absolute inset-0 rounded-full border border-gold/20 animate-ping" />
              </div>
              <h3 className="font-serif text-2xl text-white mb-3">
                Demande enregistrée
              </h3>
              <p className="text-gray-500 mb-8 max-w-sm mx-auto text-sm leading-relaxed">
                Nos chrononautes préparent votre traversée. Vous recevrez une confirmation sous 24h.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    destination: '',
                    date: '',
                    travelers: '1',
                    message: '',
                  });
                }}
                className="text-accent hover:text-accent-light transition-colors text-sm uppercase tracking-wider"
              >
                Nouvelle réservation →
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
