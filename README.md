# TimeTravel Agency — Webapp Interactive

> Webapp pour une agence de voyage temporel fictive de luxe, créée avec IA générative et propulsée par Mistral AI.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![Mistral AI](https://img.shields.io/badge/Mistral_AI-small--latest-FF7000)

---

## 🛠️ Stack Technique

| Catégorie       | Technologie                          |
|-----------------|--------------------------------------|
| Framework       | React 19 + Vite 7                    |
| Styles          | Tailwind CSS v4                      |
| Animations      | Framer Motion                        |
| Icônes          | React Icons (Heroicons)              |
| Chatbot IA      | Mistral AI (mistral-small-latest) + fallback local |
| API Proxy       | Vercel Serverless Functions          |
| Hébergement     | Vercel                               |

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

### Agent conversationnel (Chatbot IA — Mistral AI)
- Widget flottant en bas à droite (bulle de dialogue)
- **Mistral AI** (`mistral-small-latest`) pour des réponses naturelles et contextuelles
- Proxy serverless Vercel (`/api/chat`) pour sécuriser la clé API
- Fallback vers logique rule-based si l'API est indisponible
- Historique de conversation maintenu côté client
- Quick replies pour démarrer la conversation
- Indicateur de saisie (typing animation)
- Personnalité : professionnel, chaleureux, passionné d'histoire
- Badge dynamique « IA Mistral connectée » ou « En ligne »

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
- **Dark mode premium** avec accents dorés + violet accent
- **Glassmorphism** (`.glass-card`) sur les cartes et modales
- **Vortex portal** animé dans le Hero (4 anneaux concentriques rotatifs)
- **Layout destinations alterné** gauche/droite avec timeline
- **Section dividers** décoratifs entre chaque section
- Gradient text shimmering (`.text-gradient`)
- **Responsive** (mobile-first)
- Animations au scroll (Framer Motion `whileInView`)
- Micro-interactions sur boutons et cartes
- Navigation fixe avec blur au scroll
- Menu hamburger mobile
- Noise texture overlay subtile

---

## 🤖 IA Utilisées

| Usage           | Outil / Modèle                       |
|-----------------|--------------------------------------|
| Code            | GitHub Copilot (Claude Opus 4.6)     |
| Chatbot         | Mistral AI (`mistral-small-latest`)  |
| Fallback chatbot| Logique rule-based locale            |
| Images          | Unsplash (photos libres de droits)   |

---

## 🚀 Installation & Lancement

```bash
# Cloner le repo
git clone https://github.com/Roockbye/TimeTravel-Agency.git
cd TimeTravel-Agency

# Installer les dépendances
npm install

# Configurer Mistral AI (optionnel — le chatbot fonctionne sans)
cp .env.example .env
# Éditer .env et ajouter votre clé : VITE_MISTRAL_API_KEY=votre_cle_ici

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview
```

> **Note** : Sans clé Mistral AI, le chatbot utilise un fallback rule-based local. Pour activer l'IA, obtenez une clé sur [console.mistral.ai](https://console.mistral.ai).

---

## 📁 Structure du projet

```
TimeTravel-Agency/
├── index.html
├── package.json
├── vite.config.js
├── .env.example              # Template variables d'environnement
├── api/
│   └── chat.js               # Serverless proxy Mistral AI (Vercel)
├── src/
│   ├── main.jsx              # Point d'entrée
│   ├── index.css             # Styles globaux + Tailwind + animations custom
│   ├── App.jsx               # Composant racine + section dividers
│   ├── data/
│   │   └── destinations.js   # Données destinations, quiz, FAQ, system prompt
│   └── components/
│       ├── Header.jsx         # Navigation fixe responsive
│       ├── Hero.jsx           # Vortex portal + stats + particules
│       ├── Destinations.jsx   # Layout alterné avec glassmorphism
│       ├── DestinationModal.jsx # Modal détail avec stats grid
│       ├── Quiz.jsx           # Diagnostic temporel interactif
│       ├── BookingForm.jsx    # Formulaire glassmorphism
│       ├── Chatbot.jsx        # Widget chatbot Mistral AI + fallback
│       ├── SectionDivider.jsx # Séparateur décoratif animé
│       └── Footer.jsx         # Pied de page + FAQ accordéons
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
- **IA Chatbot** : [Mistral AI](https://mistral.ai)
