# TimeTravel Agency — Webapp Interactive

> Webapp pour une agence de voyage temporel fictive de luxe, créée avec IA générative.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)

---

## 🛠️ Stack Technique

| Catégorie       | Technologie                          |
|-----------------|--------------------------------------|
| Framework       | React 19 + Vite 7                    |
| Styles          | Tailwind CSS v4                      |
| Animations      | Framer Motion                        |
| Icônes          | React Icons (Heroicons)              |
| Chatbot         | Logique locale (rule-based AI)       |
| Hébergement     | Vercel / Netlify / GitHub Pages      |

---

## ✨ Features

### Page d'accueil
- **Hero section** avec image de fond, particules animées et scroll indicator
- Présentation de l'agence avec CTAs vers les destinations et le quiz
- Animations d'entrée fluides (fade-in, slide-up)

### Galerie des destinations
- **3 cartes interactives** : Paris 1889, Crétacé -65M, Florence 1504
- Effets hover (scale, translate, border glow)
- **Modal détaillé** avec image, description, points forts et prix
- Lazy loading des images

### Agent conversationnel (Chatbot)
- Widget flottant en bas à droite (bulle de dialogue)
- Fenêtre de chat avec design cohérent (thème sombre, accents dorés)
- **Réponses intelligentes** sur les destinations, prix, sécurité, fonctionnement
- Quick replies pour démarrer la conversation
- Indicateur de saisie (typing animation)
- Personnalité : professionnel, chaleureux, passionné d'histoire

### Quiz personnalisé
- 4 questions pour recommander la destination idéale
- Barre de progression animée
- Algorithme de scoring par destination
- Résultat avec image, description et CTA de réservation

### Formulaire de réservation
- Sélection destination + date + nombre de voyageurs
- Validation automatisée des champs
- Confirmation animée après soumission

### Design & UX
- **Dark mode premium** avec accents dorés
- **Responsive** (mobile-first)
- Animations au scroll (Framer Motion `whileInView`)
- Micro-interactions sur boutons et cartes
- Navigation fixe avec blur au scroll
- Menu hamburger mobile

---

## 🤖 IA Utilisées

| Usage           | Outil / Modèle                       |
|-----------------|--------------------------------------|
| Code            | GitHub Copilot (Claude Opus 4.6)     |
| Chatbot         | Logique rule-based locale            |
| Images          | Unsplash (photos libres de droits)   |

---

## 🚀 Installation & Lancement

```bash
# Cloner le repo
git clone https://github.com/votre-username/TimeTravel-Agency.git
cd TimeTravel-Agency

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview
```

---

## 📁 Structure du projet

```
TimeTravel-Agency/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx              # Point d'entrée
│   ├── index.css             # Styles globaux + Tailwind
│   ├── App.jsx               # Composant racine
│   ├── data/
│   │   └── destinations.js   # Données destinations, quiz, FAQ, prompt chatbot
│   └── components/
│       ├── Header.jsx         # Navigation fixe responsive
│       ├── Hero.jsx           # Section hero avec particules
│       ├── Destinations.jsx   # Galerie de cartes
│       ├── DestinationModal.jsx # Modal détail destination
│       ├── Quiz.jsx           # Quiz de recommandation
│       ├── BookingForm.jsx    # Formulaire de réservation
│       ├── Chatbot.jsx        # Widget chatbot IA
│       └── Footer.jsx         # Pied de page + FAQ
```

---

## 🌐 Déploiement

### Vercel (recommandé)
1. Push sur GitHub
2. Connecter le repo sur [vercel.com](https://vercel.com)
3. Déploiement automatique

### Netlify
1. `npm run build`
2. Drag & drop du dossier `dist/` sur [netlify.com](https://netlify.com)

### GitHub Pages
1. `npm run build`
2. Déployer le contenu de `dist/`

---

## 📄 Licence

Projet pédagogique — M1/M2 Digital & IA

---

## 👤 Crédits

- **Images** : [Unsplash](https://unsplash.com) (libres de droits)
- **Fonts** : [Google Fonts](https://fonts.google.com) — Inter, Playfair Display
- **Icônes** : [React Icons](https://react-icons.github.io/react-icons/) (Heroicons)
- **Framework** : [React](https://react.dev), [Vite](https://vite.dev), [Tailwind CSS](https://tailwindcss.com)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
