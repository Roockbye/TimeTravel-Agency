import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { destinations } from '../data/destinations';
import { sanitizeInput, isValidEmail } from '../utils/hooks';

const inputClasses =
  'w-full bg-dark/60 border border-dark-border rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/10 transition-all duration-300';

const errorClass = 'border-red-500/50 focus:border-red-500/70 focus:ring-red-500/10';

function validateForm(data) {
  const errors = {};
  if (!data.name || data.name.trim().length < 2) errors.name = 'Nom requis (min. 2 caractères)';
  if (!data.email || !isValidEmail(data.email)) errors.email = 'Email invalide';
  if (!data.destination) errors.destination = 'Choisissez une destination';
  if (!data.date) {
    errors.date = 'Date requise';
  } else {
    const chosen = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (chosen < today) errors.date = 'La date doit être dans le futur';
  }
  return errors;
}

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
    travelers: '1',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    // Sanitize text fields
    const sanitized = ['name', 'message'].includes(name) ? sanitizeInput(value, 200) : value;
    setFormData((prev) => ({ ...prev, [name]: sanitized }));
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }, [errors]);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    // Validate single field
    const fieldErrors = validateForm(formData);
    if (fieldErrors[name]) setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    setErrors(formErrors);
    setTouched({ name: true, email: true, destination: true, date: true });
    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const FieldError = ({ field }) =>
    touched[field] && errors[field] ? (
      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
        <span className="w-1 h-1 bg-red-400 rounded-full" />
        {errors[field]}
      </p>
    ) : null;

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
            <form onSubmit={handleSubmit} className="space-y-7" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="bf-name" className="block text-xs text-gray-500 mb-2 uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full" />
                    Nom complet
                  </label>
                  <input
                    id="bf-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    maxLength={100}
                    placeholder="Jean Dupont"
                    className={`${inputClasses} ${errors.name && touched.name ? errorClass : ''}`}
                    aria-invalid={!!errors.name}
                  />
                  <FieldError field="name" />
                </div>

                <div>
                  <label htmlFor="bf-email" className="block text-xs text-gray-500 mb-2 uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full" />
                    Email
                  </label>
                  <input
                    id="bf-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="jean@email.com"
                    className={`${inputClasses} ${errors.email && touched.email ? errorClass : ''}`}
                    aria-invalid={!!errors.email}
                  />
                  <FieldError field="email" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="bf-dest" className="block text-xs text-gray-500 mb-2 uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    Destination
                  </label>
                  <select
                    id="bf-dest"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`${inputClasses} appearance-none cursor-pointer ${errors.destination && touched.destination ? errorClass : ''}`}
                    aria-invalid={!!errors.destination}
                  >
                    <option value="">Choisir...</option>
                    {destinations.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.title} — {d.price}
                      </option>
                    ))}
                  </select>
                  <FieldError field="destination" />
                </div>

                <div>
                  <label htmlFor="bf-date" className="block text-xs text-gray-500 mb-2 uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    Date de départ
                  </label>
                  <input
                    id="bf-date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className={`${inputClasses} ${errors.date && touched.date ? errorClass : ''}`}
                    aria-invalid={!!errors.date}
                  />
                  <FieldError field="date" />
                </div>

                <div>
                  <label htmlFor="bf-travelers" className="block text-xs text-gray-500 mb-2 uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    Voyageurs
                  </label>
                  <select
                    id="bf-travelers"
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
                <label htmlFor="bf-message" className="block text-xs text-gray-500 mb-2 uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent/50 rounded-full" />
                  Message (optionnel)
                </label>
                <textarea
                  id="bf-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  maxLength={500}
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
