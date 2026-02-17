import { useState } from 'react';
import { motion } from 'framer-motion';
import { destinations } from '../data/destinations';

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
    // In production, this would send to a backend
  };

  return (
    <section id="booking" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Réservation</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Réservez Votre Voyage
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Remplissez le formulaire ci-dessous et notre équipe de chrononautes vous contactera sous 24h.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-card border border-dark-border rounded-2xl p-8 md:p-10 shadow-lg shadow-black/20"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jean Dupont"
                    className="w-full bg-dark-lighter border border-dark-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold/40 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jean@email.com"
                    className="w-full bg-dark-lighter border border-dark-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold/40 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Destination */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
                    Destination
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-lighter border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/40 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Choisir...</option>
                    {destinations.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.title} — {d.price}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
                    Date souhaitée
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-lighter border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/40 transition-colors"
                  />
                </div>

                {/* Travelers */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
                    Voyageurs
                  </label>
                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="w-full bg-dark-lighter border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/40 transition-colors appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} {n > 1 ? 'voyageurs' : 'voyageur'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">
                  Message (optionnel)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Précisions, demandes spéciales..."
                  className="w-full bg-dark-lighter border border-dark-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gold text-dark font-bold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 uppercase tracking-widest text-sm"
              >
                Envoyer ma demande de réservation
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <p className="text-5xl mb-4">✨</p>
              <h3 className="font-serif text-2xl text-white mb-3">
                Demande envoyée avec succès !
              </h3>
              <p className="text-gray-400 mb-6">
                Notre équipe de chrononautes vous contactera sous 24h pour finaliser votre voyage temporel.
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
                className="text-gold hover:text-gold-light transition-colors text-sm uppercase tracking-wider"
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
