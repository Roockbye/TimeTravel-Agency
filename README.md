<p align="center">
  <img src="https://img.shields.io/badge/⏳-TimeTravel_Agency-c9a84c?style=for-the-badge&labelColor=06060b" alt="TimeTravel Agency" />
</p>

<h1 align="center">TimeTravel Agency</h1>

<p align="center">
  <strong>Agence de voyage temporel de luxe — Application web immersive</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Mistral_AI-API-7c5bf5?style=flat-square" />
  <img src="https://img.shields.io/badge/Deploiement-Vercel-000?style=flat-square&logo=vercel&logoColor=white" />
</p>

<p align="center">
  <a href="#-aperçu">Aperçu</a> •
  <a href="#-fonctionnalités">Fonctionnalités</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-stack-technique">Stack</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-documentation-api">API</a> •
  <a href="#-composants">Composants</a> •
  <a href="#-hooks-personnalisés">Hooks</a> •
  <a href="#-sécurité">Sécurité</a> •
  <a href="#-performance">Performance</a> •
  <a href="#-déploiement">Déploiement</a>
</p>

---

## 📋 Aperçu

**TimeTravel Agency** est une application web single-page (SPA) fictive pour une agence de voyage temporel de luxe. Elle propose trois destinations (Paris 1889, Crétacé -65M années, Florence 1504), un quiz de recommandation, un chatbot IA propulsé par **Mistral AI**, et un formulaire de réservation — le tout dans un design glassmorphism sombre avec des accents dorés et violets.

Le projet met l'accent sur :
- **Design immersif** : animations de vortex, particules flottantes, glassmorphism, bruit de texture
- **Architecture moderne** : React 19, Vite 7, Tailwind CSS v4, code splitting
- **Sécurité** : sanitization des entrées, rate limiting, CORS restrictif, Error Boundary
- **Performance** : lazy loading, memoization, animations GPU-accélérées
- **Accessibilité** : labels ARIA, navigation clavier, contraste suffisant

---

## 🤖 IA Utilisées

| Usage           | Outil / Modèle                       |
|-----------------|--------------------------------------|
| Code            | GitHub Copilot (Claude Opus 4.6)     |
| Chatbot         | Mistral AI (`mistral-small-latest`)  |
| Fallback chatbot| Logique rule-based locale            |
| Images          | Unsplash (photos libres de droits)   |

---

## ✨ Fonctionnalités

### Principales
| Fonctionnalité | Description |
|---|---|
| 🌀 **Hero immersif** | Vortex animé, particules flottantes, compteurs animés |
| 🗺️ **Catalogue de destinations** | 3 destinations avec layout alterné gauche/droite, timeline verticale |
| 🔮 **Modal de destination** | Vue détaillée avec statistiques, highlights, gradient contextuel |
| 🧭 **Quiz de recommandation** | 4 questions à choix multiples, système de scoring, animation de compas |
| 📝 **Formulaire de réservation** | Validation côté client, sanitization, feedback temps réel |
| 🤖 **Chatbot IA** | Propulsé par Mistral AI (`mistral-small-latest`), fallback rule-based |
| 💬 **FAQ interactive** | Accordéons animés dans le footer |

### UI/UX
| Élément | Détail |
|---|---|
| 📊 Barre de progression | Progression du scroll en haut de page |
| ⬆️ Back to Top | Bouton de remontée avec animation |
| 🔀 Séparateurs de sections | Lignes dorées animées avec icônes |
| 🪟 Glassmorphism | Cartes semi-transparentes avec flou de fond |
| 🖼️ Bruit de texture | Overlay SVG pour un rendu cinématique |
| ⌨️ Raccourcis clavier | `Ctrl+K` pour ouvrir/fermer le chatbot |
| 📱 Responsive | Adaptatif mobile, tablette, desktop |

---

## 🏗️ Architecture

### Arborescence du projet

```
TimeTravel-Agency/
├── api/
│   └── chat.js                  # Serverless proxy Vercel → Mistral AI
├── dist/                        # Build de production (généré)
├── public/                      # Assets statiques
├── src/
│   ├── assets/                  # Images, SVGs
│   ├── components/
│   │   ├── BackToTop.jsx        # Bouton de remontée
│   │   ├── BookingForm.jsx      # Formulaire de réservation
│   │   ├── Chatbot.jsx          # Chatbot IA Mistral
│   │   ├── DestinationModal.jsx # Modal détail destination
│   │   ├── Destinations.jsx     # Catalogue de destinations
│   │   ├── ErrorBoundary.jsx    # Error Boundary React
│   │   ├── Footer.jsx           # Pied de page + FAQ
│   │   ├── Header.jsx           # Navigation fixe
│   │   ├── Hero.jsx             # Section héro avec vortex
│   │   ├── LoadingSpinner.jsx   # Spinner de chargement (Suspense)
│   │   ├── Quiz.jsx             # Quiz de recommandation
│   │   ├── ScrollProgress.jsx   # Barre de progression scroll
│   │   └── SectionDivider.jsx   # Séparateur entre sections
│   ├── data/
│   │   └── destinations.js      # Données, prompts, questions quiz, FAQ
│   ├── utils/
│   │   └── hooks.js             # Hooks personnalisés + utilitaires
│   ├── App.jsx                  # Composant racine
│   ├── index.css                # Styles globaux + thème Tailwind
│   └── main.jsx                 # Point d'entrée React
├── .env                         # Variables d'environnement (local, non versionné)
├── .env.example                 # Template des variables d'environnement
├── .gitignore                   # Fichiers ignorés par Git
├── eslint.config.js             # Configuration ESLint
├── index.html                   # Template HTML (SEO, meta, sécurité)
├── package.json                 # Dépendances et scripts
├── vite.config.js               # Configuration Vite + plugins
└── README.md                    # Ce fichier
```

### Diagramme de composants

```
App.jsx (ErrorBoundary)
├── ScrollProgress              ← Hook useScrollProgress
├── Header                      ← Navigation fixe
├── Hero                        ← useCounter, useMemo (particules)
├── SectionDivider
├── Destinations (lazy)         ← DestinationModal (portail)
├── SectionDivider
├── Quiz (lazy)                 ← Scoring, recommandation
├── SectionDivider
├── BookingForm (lazy)          ← Validation, sanitization
├── Chatbot (lazy)              ← Mistral AI, fallback rule-based
├── Footer (lazy)               ← FAQ accordéons
└── BackToTop                   ← Scroll detection
```

### Flux de données

```
┌─────────────────────────────────────────────────────────┐
│                      Client (React)                     │
│                                                         │
│  Chatbot.jsx ──── POST /api/chat ──→ api/chat.js       │
│       │           (messages JSON)     │                  │
│       │                               │ Rate limit check │
│       │                               │ CORS validation  │
│       │                               │ Input sanitize   │
│       │                               ↓                  │
│       │                          Mistral AI API          │
│       │                        (mistral-small-latest)    │
│       │                               │                  │
│       ←─── Response (assistant msg) ──┘                  │
│                                                         │
│  BookingForm.jsx ── Validation locale (pas d'envoi API) │
│  Quiz.jsx ────────── Scoring local (pas d'appel réseau) │
└─────────────────────────────────────────────────────────┘
```

---

## 🛠️ Stack technique

### Frontend

| Technologie | Version | Rôle |
|---|---|---|
| **React** | 19.2 | Framework UI (hooks, lazy, Suspense) |
| **Vite** | 7.3 | Build tool, HMR, dev server |
| **Tailwind CSS** | 4.1 | Framework CSS utilitaire |
| **@tailwindcss/vite** | 4.1 | Plugin Tailwind pour Vite (v4) |
| **Framer Motion** | 12.34 | Animations (scroll, hover, transitions) |
| **React Icons** | 5.5 | Icônes (HiMenu, HiX, HiChat, etc.) |

### Backend (Serverless)

| Technologie | Rôle |
|---|---|
| **Vercel Functions** | Hébergement serverless pour le proxy API |
| **Mistral AI API** | Modèle `mistral-small-latest` pour le chatbot |

### Tooling

| Outil | Rôle |
|---|---|
| **ESLint** | Linting JavaScript/React |
| **eslint-plugin-react-hooks** | Règles pour les hooks React |
| **eslint-plugin-react-refresh** | Support du Fast Refresh Vite |

---

## 🚀 Installation

### Prérequis

- **Node.js** ≥ 18.0
- **npm** ≥ 9.0 (ou yarn/pnpm)
- **Clé API Mistral** (optionnelle — le chatbot fonctionne en mode fallback sans)

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/Roockbye/TimeTravel-Agency.git
cd TimeTravel-Agency

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env
# Éditer .env avec votre clé Mistral AI

# 4. Lancer le serveur de développement
npm run dev
# → Ouvre sur http://localhost:5173

# 5. Build de production
npm run build

# 6. Prévisualiser le build
npm run preview
# → Ouvre sur http://localhost:4173
```

### Variables d'environnement

| Variable | Description | Obligatoire |
|---|---|---|
| `VITE_MISTRAL_API_KEY` | Clé API Mistral AI | Non (fallback rule-based) |

> **Note** : Le fichier `.env` ne doit **jamais** être versionné. Seul `.env.example` est dans le dépôt.

### Obtenir une clé Mistral AI

1. Créer un compte sur [console.mistral.ai](https://console.mistral.ai/)
2. Aller dans **API Keys** → **Create new key**
3. Copier la clé et la coller dans `.env` :
   ```
   VITE_MISTRAL_API_KEY=votre_clé_ici
   ```

---

## 📡 Documentation API

### Endpoint : `POST /api/chat`

Proxy serverless déployé sur Vercel qui relaie les messages au modèle Mistral AI.

#### Request

```http
POST /api/chat
Content-Type: application/json
Origin: https://votre-domaine.vercel.app
```

```json
{
  "messages": [
    {
      "role": "system",
      "content": "Tu es l'assistant virtuel de TimeTravel Agency..."
    },
    {
      "role": "user",
      "content": "Quelle destination me recommandez-vous ?"
    }
  ]
}
```

#### Contraintes d'entrée

| Paramètre | Contrainte |
|---|---|
| `messages` | Array d'objets `{ role, content }` |
| `messages.length` | Maximum 30 messages par requête |
| `message.content` | Maximum 1 000 caractères par message |
| `message.role` | Doit être `system`, `user` ou `assistant` |

#### Réponses

| Code | Description |
|---|---|
| `200` | Réponse Mistral AI (format OpenAI-compatible) |
| `400` | Format de messages invalide |
| `405` | Méthode non autorisée (seul POST est accepté) |
| `429` | Rate limit atteint (15 req/min/IP) |
| `500` | Erreur serveur ou clé API non configurée |

#### Exemple de réponse `200`

```json
{
  "id": "cmpl-xxx",
  "object": "chat.completion",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Je vous recommande Paris 1889 ! L'Exposition Universelle..."
      }
    }
  ]
}
```

#### Paramètres Mistral AI

| Paramètre | Valeur |
|---|---|
| `model` | `mistral-small-latest` |
| `max_tokens` | 300 |
| `temperature` | 0.7 |

### Fallback rule-based

Si la clé API n'est pas configurée ou si l'appel échoue, le chatbot bascule automatiquement sur un système de réponses rule-based côté client. Les mots-clés détectés incluent :

| Mot-clé | Destination suggérée |
|---|---|
| `paris`, `tour eiffel`, `1889` | Paris 1889 |
| `dinosaure`, `crétacé`, `préhistoire` | Crétacé -65M |
| `florence`, `renaissance`, `michel-ange` | Florence 1504 |
| `prix`, `tarif`, `coût` | Liste complète des tarifs |
| `bonjour`, `salut`, `hello` | Message de bienvenue |

---

## 🧩 Composants

### Composants principaux

#### `App.jsx`
Composant racine. Orchestre tous les composants avec :
- **ErrorBoundary** — Enveloppe l'application pour capturer les erreurs React
- **React.lazy / Suspense** — Code splitting pour 5 composants non-critiques
- **ScrollProgress** — Barre de progression fixe en haut
- **BackToTop** — Bouton de remontée en bas à gauche
- **SectionDivider** — Séparateurs visuels animés entre les sections
- **Overlay de bruit** — Texture visuelle sur toute la page

#### `Header.jsx`
Navigation fixe avec :
- Logo gradient « TT » (badge rond)
- Liens de navigation avec indicateurs dorés au hover
- Menu hamburger responsive (mobile)
- Fond glassmorphism au scroll

#### `Hero.jsx`
Section d'accueil immersive :
- **Vortex animé** — 2 cercles concentriques rotatifs (CSS keyframes)
- **Grille de fond** — Pattern de lignes subtiles
- **Particules flottantes** — 20 particules memoizées avec `useMemo` (position, couleur, animation aléatoires)
- **Compteurs animés** — `useCounter` hook pour les statistiques (destinations, voyageurs, satisfaction)
- **CTA gradient** — Bouton avec animation de brillance (shimmer)

#### `Destinations.jsx`
Catalogue des 3 destinations :
- **Layout alterné** — Image à gauche/droite en alternance
- **Timeline verticale** — Ligne tiretée dorée entre les destinations
- **Cartes glassmorphism** — Fond semi-transparent avec bordure dorée
- **Badges de prix** — Pill gradient avec prix
- **Accents décoratifs** — Coins en L dorés sur les images
- **Modal** — Ouverture du `DestinationModal` au clic

#### `DestinationModal.jsx`
Vue détaillée d'une destination (portail React) :
- **AnimatePresence** — Transition d'entrée/sortie fluide
- **Grille de statistiques** — 3 colonnes (prix, durée, époque)
- **Badge d'époque** — Pill contextuel (XIXe siècle, Mésozoïque, etc.)
- **Highlights** — Grille 2 colonnes des points forts
- **Ligne décorative** — Gradient en haut de la modal
- **Fermeture** — Clic extérieur, bouton ×, touche Echap

#### `Quiz.jsx`
Quiz de recommandation en 4 étapes :
- **Badge « Diagnostic temporel »** — Label de section
- **Compas animé** — SVG avec aiguille rotative et anneaux
- **Options avec lettres grecques** — α, β, γ, δ pour chaque choix
- **Barre de progression segmentée** — Indicateur d'avancement
- **Système de scoring** — Chaque option ajoute des points par destination
- **Résultat** — Affichage de la meilleure destination avec confetti doré

#### `BookingForm.jsx`
Formulaire de réservation avec 6 champs :
- **Validation temps réel** — `validateForm()` vérifie nom (min 2 car.), email (regex), destination (requis), date (future)
- **Feedback visuel** — Bordures rouges, messages d'erreur inline avec `FieldError`
- **Sanitization** — `sanitizeInput()` sur les champs texte (nom, message)
- **Accessibilité** — `htmlFor`/`id`, `aria-invalid`, `noValidate`, `maxLength`
- **Date minimum** — Empêche les dates passées (`min={today}`)
- **État soumis** — Animation de confirmation avec icône ✦ pulsante

#### `Chatbot.jsx`
Assistant IA flottant :
- **Bulle d'ouverture** — Bouton flottant avec badge « IA »
- **Mistral AI** — Intégration via proxy serverless
- **Fallback** — Réponses rule-based si l'API échoue
- **Sanitization** — `sanitizeInput()` sur les messages utilisateur
- **Rate limiting** — Max 50 messages par session côté client
- **Raccourci clavier** — `Ctrl+K` pour ouvrir/fermer
- **Historique** — Messages affichés avec avatar et horodatage
- **Indicateur de frappe** — Animation de 3 points pendant la réponse
- **`maxLength`** — 500 caractères maximum par message

#### `Footer.jsx`
Pied de page complet :
- **Grille 12 colonnes** — Logo (5 cols), liens (3 cols), FAQ (4 cols)
- **FAQ accordéons** — `AnimatePresence` pour l'ouverture/fermeture
- **Liens animés** — Indicateurs dorés au hover
- **Badges** — « Licence temporelle active » et « IA Mistral intégrée »
- **Copyright dynamique** — Année actuelle automatique

### Composants utilitaires

#### `ErrorBoundary.jsx`
Class component React pour capturer les erreurs de rendu :
- Message thématique : « Anomalie temporelle détectée »
- Affiche les détails de l'erreur en mode développement uniquement
- Bouton « Réinitialiser le continuum » pour recharger

#### `ScrollProgress.jsx`
Barre fixe en haut de la fenêtre indiquant la progression du scroll :
- Utilise le hook `useScrollProgress()`
- Gradient `accent → gold`
- Hauteur : 2px, `z-index: 50`

#### `LoadingSpinner.jsx`
Spinner de chargement utilisé comme fallback Suspense :
- 2 anneaux rotatifs concentriques (doré + accent)
- Point central pulsant
- Texte « Chargement temporel... »

#### `BackToTop.jsx`
Bouton de remontée en page :
- Apparaît après 600px de scroll
- Position : bas gauche
- Glassmorphism + bordure dorée
- Animation de rebond au hover

#### `SectionDivider.jsx`
Séparateur décoratif entre les sections :
- Ligne verticale dorée animée (trait tiret)
- Icône centrale dans un cercle
- Label textuel sous l'icône

---

## 🪝 Hooks personnalisés

Tous définis dans `src/utils/hooks.js`.

### `useCounter(target, duration?, triggerOnView?)`

Compteur animé qui incrémente de 0 jusqu'à `target`.

| Paramètre | Type | Défaut | Description |
|---|---|---|---|
| `target` | `number` | — | Valeur finale |
| `duration` | `number` | `2000` | Durée de l'animation (ms) |
| `triggerOnView` | `boolean` | `false` | Déclencher au scroll (IntersectionObserver) |

**Retourne** : `{ count: number, ref: React.RefObject }`

```jsx
const { count, ref } = useCounter(1500, 2500, true);
return <span ref={ref}>{count}</span>;
```

### `useScrollProgress()`

Progression du scroll du document (0 à 1).

**Retourne** : `number` (0.0 → 1.0)

```jsx
const progress = useScrollProgress();
return <div style={{ width: `${progress * 100}%` }} />;
```

### `useDebounce(value, delay?)`

Retarde la mise à jour d'une valeur.

| Paramètre | Type | Défaut |
|---|---|---|
| `value` | `any` | — |
| `delay` | `number` | `300` |

```jsx
const [search, setSearch] = useState('');
const debouncedSearch = useDebounce(search, 500);
```

### `useLocalStorage(key, initialValue)`

État persisté dans le `localStorage`.

```jsx
const [theme, setTheme] = useLocalStorage('theme', 'dark');
```

### `useMediaQuery(query)`

Écoute un media query CSS et retourne `true/false`.

```jsx
const isMobile = useMediaQuery('(max-width: 768px)');
```

### `useKeyboardShortcut(key, callback, modifiers?)`

Écoute un raccourci clavier global.

| Paramètre | Type | Description |
|---|---|---|
| `key` | `string` | Touche (`k`, `Escape`, etc.) |
| `callback` | `Function` | Fonction à exécuter |
| `modifiers` | `{ ctrl?, alt?, shift? }` | Modificateurs optionnels |

```jsx
useKeyboardShortcut('k', () => setOpen(prev => !prev), { ctrl: true });
```

### `useClickOutside(ref, callback)`

Détecte un clic en dehors d'un élément (mousedown + touchstart).

```jsx
const ref = useRef(null);
useClickOutside(ref, () => setOpen(false));
```

---

## 🔧 Utilitaires

Également dans `src/utils/hooks.js`.

### `sanitizeInput(input, maxLength?)`

Nettoie une entrée utilisateur : supprime les balises HTML et les caractères dangereux (`<`, `>`, `{`, `}`), tronque à `maxLength`.

```js
sanitizeInput('<script>alert("xss")</script>Hello', 100);
// → "scriptalert(xss)/scriptHello" (tronqué et nettoyé)
```

### `isValidEmail(email)`

Vérifie le format d'un email avec une regex.

```js
isValidEmail('user@domain.com'); // true
isValidEmail('invalid');          // false
```

### `formatPrice(price)`

Formate un nombre en devise EUR (locale `fr-FR`).

```js
formatPrice(12500); // "12 500 €"
```

### `scrollToSection(id)`

Scroll fluide vers un élément par son `id`.

```js
scrollToSection('booking'); // Scroll vers #booking
```

---

## 🔒 Sécurité

### Côté serveur (`api/chat.js`)

| Mesure | Détail |
|---|---|
| **Rate limiting** | 15 requêtes/minute/IP (in-memory, reset au cold start) |
| **CORS restrictif** | Whitelist d'origines : `localhost:5173`, `localhost:4173`, `*.vercel.app` |
| **Sanitization des messages** | Validation du format, limite de 30 messages, 1000 car/message, rôles autorisés uniquement |
| **Pas de fuite d'erreur** | Les erreurs internes ne sont jamais exposées au client |
| **Headers de sécurité** | `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY` |
| **Clé API protégée** | Variable d'environnement côté serveur, jamais exposée au client |

### Côté client

| Mesure | Détail |
|---|---|
| **Sanitization des inputs** | `sanitizeInput()` sur le chatbot et le formulaire |
| **Validation de formulaire** | Vérification locale avant soumission (nom, email, date, destination) |
| **`maxLength` sur les inputs** | Nom: 100, Message: 500, Chat: 500 caractères |
| **Error Boundary** | Capture les erreurs React sans crash de la page |
| **`noValidate` + validation JS** | Contrôle total de la validation (pas de popups navigateur) |
| **Rate limiting client** | 50 messages maximum par session de chatbot |
| **`aria-invalid`** | Indication d'erreur pour les lecteurs d'écran |

### Meta tags de sécurité (`index.html`)

```html
<meta http-equiv="X-Content-Type-Options" content="nosniff" />
<meta http-equiv="X-Frame-Options" content="DENY" />
<meta name="referrer" content="strict-origin-when-cross-origin" />
```

### Bonnes pratiques appliquées

- ✅ Les clés API ne sont jamais dans le code source client
- ✅ Le proxy serverless isole le client de l'API Mistral
- ✅ Les rôles de message sont validés (`system`, `user`, `assistant`)
- ✅ Les erreurs sont loguées côté serveur mais génériques côté client
- ✅ Les dates sont validées côté client (pas de dates passées)
- ✅ Le HTML est strippé des entrées utilisateur

---

## ⚡ Performance

### Code Splitting

L'application utilise `React.lazy` et `Suspense` pour charger les composants lourds de manière asynchrone :

```
Chunks générés (production) :
├── index.js            335 KB (React, Framer Motion, core)
├── Chatbot.js            9.5 KB
├── Destinations.js       8.2 KB
├── BookingForm.js        8.0 KB
├── Quiz.js               7.2 KB
├── destinations.js       5.0 KB (données partagées)
├── Footer.js             4.1 KB
└── index.css            59.4 KB
```

Les 5 composants lazy-loadés (`Destinations`, `Quiz`, `BookingForm`, `Chatbot`, `Footer`) ne sont chargés que lorsqu'ils entrent dans le viewport ou que le navigateur est idle.

### Optimisations React

| Technique | Composant | Détail |
|---|---|---|
| `useMemo` | Hero | Particules pré-calculées (positions, couleurs, animations) |
| `useCallback` | BookingForm | `handleChange` et `handleBlur` stabilisés |
| `useRef` | Chatbot | `messageCountRef` pour le rate limiting sans re-renders |
| Lazy + Suspense | App | 5 composants chargés à la demande |

### Optimisations CSS

- **Animations GPU** — `transform` et `opacity` uniquement (pas de layout shifts)
- **`will-change`** — Appliqué aux animations de vortex
- **Scroll passif** — `{ passive: true }` sur les listeners de scroll
- **Tailwind v4** — Tree-shaking automatique des classes non utilisées

### Chargement des polices

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

Les polices Inter et Playfair Display sont pré-connectées pour réduire la latence.

---

## 🎨 Design System

### Palette de couleurs

| Token | Hex | Usage |
|---|---|---|
| `--color-gold` | `#c9a84c` | Couleur primaire, accents, titres |
| `--color-gold-light` | `#e2c97e` | Hover states, gradients |
| `--color-accent` | `#7c5bf5` | Couleur secondaire, CTA, liens |
| `--color-accent-light` | `#9b7ff7` | Hover de l'accent |
| `--color-dark` | `#06060b` | Fond principal |
| `--color-dark-lighter` | `#0d0d15` | Fonds de cartes |
| `--color-dark-card` | `#0a0a14` | Cards glassmorphism |
| `--color-dark-border` | `#1a1a2e` | Bordures subtiles |

### Typographie

| Police | Usage | Poids |
|---|---|---|
| **Playfair Display** | Titres (serif) | 400, 700 |
| **Inter** | Corps de texte (sans-serif) | 300–700 |

### Animations clés

| Nom | Durée | Usage |
|---|---|---|
| `vortex-spin` | 20s | Rotation du vortex (sens horaire) |
| `vortex-spin-reverse` | 15s | Rotation inverse du vortex |
| `pulse-glow` | 3s | Pulsation lumineuse du cœur du vortex |
| `float-up` | Variable | Particules qui montent |
| `shimmer` | 2s | Effet de brillance sur les CTA |
| `timeline-dash` | 15s | Animation de la ligne timeline |

### Classes utilitaires personnalisées

| Classe | Description |
|---|---|
| `.glass-card` | Carte glassmorphism (bg semi-transparent + backdrop-blur) |
| `.text-gradient` | Texte en dégradé gold → accent |
| `.section-divider` | Ligne de séparation animée |
| `.noise-overlay` | Overlay de texture bruit en pseudo-élément |

---

## 🌐 SEO

### Meta tags

```html
<meta name="description" content="TimeTravel Agency — Agence de voyage temporel de luxe..." />
<meta name="theme-color" content="#06060b" />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="TimeTravel Agency — Voyagez à travers le temps" />
<meta property="og:description" content="Agence de voyage temporel de luxe..." />
<meta property="og:type" content="website" />
<meta property="og:locale" content="fr_FR" />
<meta name="twitter:card" content="summary_large_image" />
```

### Accessibilité (a11y)

- Labels `htmlFor` / `id` sur tous les champs de formulaire
- Attributs `aria-invalid` sur les champs en erreur
- Attributs `aria-label` sur le chatbot (input + bouton)
- Navigation clavier complète (Tab, Enter, Escape)
- Contraste de texte suffisant (gold sur dark)
- `lang="fr"` sur le `<html>`

---

## 🚢 Déploiement

### Vercel (recommandé)

Le projet est pré-configuré pour Vercel :

1. **Connecter le dépôt GitHub** à [vercel.com](https://vercel.com)
2. **Configurer la variable d'environnement** :
   - Nom : `VITE_MISTRAL_API_KEY`
   - Valeur : votre clé Mistral AI
3. **Déployer** — Vercel détecte automatiquement Vite et configure le build

Le dossier `api/` est automatiquement déployé comme Vercel Serverless Function.

#### Configuration implicite

| Paramètre | Valeur |
|---|---|
| Framework | Vite |
| Build Command | `vite build` |
| Output Directory | `dist` |
| Node.js Runtime | 18.x |
| Serverless Functions | `api/chat.js` |

### Autres hébergeurs

Pour un hébergement statique (Netlify, GitHub Pages, etc.) :

```bash
npm run build
# Publier le contenu du dossier dist/
```

> ⚠️ **Attention** : Sans Vercel, le proxy `api/chat.js` ne sera pas disponible. Le chatbot fonctionnera uniquement en mode fallback rule-based.

---

## 📂 Données

### Destinations (`src/data/destinations.js`)

Chaque destination est un objet avec la structure suivante :

```typescript
interface Destination {
  id: string;            // Identifiant unique (ex: 'paris-1889')
  title: string;         // Nom (ex: 'Paris 1889')
  subtitle: string;      // Sous-titre (ex: 'La Belle Époque')
  epoch: string;         // Période historique
  price: string;         // Prix formaté
  duration: string;      // Durée du séjour
  description: string;   // Description longue
  highlights: string[];  // Liste des points forts
  image: string;         // URL Unsplash
  gradient: string;      // Classes Tailwind de gradient
  accentColor: string;   // Couleur HEX d'accent
}
```

### 3 destinations disponibles

| ID | Titre | Prix | Durée | Époque |
|---|---|---|---|---|
| `paris-1889` | Paris 1889 | 12 500 € | 7 jours | XIXe siècle |
| `cretace-65m` | Crétacé -65M | 18 900 € | 5 jours | Mésozoïque |
| `florence-1504` | Florence 1504 | 14 200 € | 6 jours | XVIe siècle |

### Quiz (`quizQuestions`)

4 questions, 3 options chacune. Chaque option a un objet `scores` qui attribue des points par destination. La destination avec le score total le plus élevé est recommandée.

### FAQ (`faqData`)

4 questions/réponses sur le voyage temporel (sécurité, bagages, paradoxes, durée).

### Prompt système (`chatbotSystemPrompt`)

Prompt Mistral AI en français définissant le personnage de l'assistant : ton professionnel, expert en histoire, connaissance des 3 destinations, réponses concises (2-4 phrases).

---

## 🧪 Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement Vite (HMR, port 5173) |
| `npm run build` | Build de production optimisé (dans `dist/`) |
| `npm run preview` | Prévisualiser le build de production (port 4173) |
| `npm run lint` | Linter ESLint sur tout le projet |

---

## 📊 Métriques du build

```
Build de production (vite build) :
────────────────────────────────────────
index.html                    1.81 KB
index.css                    59.41 KB  (gzip: 9.48 KB)
index.js                    335.60 KB  (gzip: 107.23 KB)
Chatbot.js                    9.55 KB  (gzip: 3.93 KB)
Destinations.js               8.21 KB  (gzip: 2.40 KB)
BookingForm.js                7.96 KB  (gzip: 2.59 KB)
Quiz.js                       7.24 KB  (gzip: 2.21 KB)
destinations.js               5.03 KB  (gzip: 2.20 KB)
Footer.js                     4.11 KB  (gzip: 1.41 KB)
────────────────────────────────────────
Total JS :                  377.70 KB  (gzip: ~122 KB)
Total CSS :                  59.41 KB  (gzip: 9.48 KB)
────────────────────────────────────────
Temps de build :              ~3s
```

---

## 🤝 Contribution

1. **Fork** le dépôt
2. **Créer** une branche (`git checkout -b feature/ma-feature`)
3. **Commiter** les changements (`git commit -m 'feat: ajout de ma feature'`)
4. **Pousser** la branche (`git push origin feature/ma-feature`)
5. **Ouvrir** une Pull Request

### Conventions de commit

Ce projet suit les [Conventional Commits](https://www.conventionalcommits.org/) :

| Préfixe | Usage |
|---|---|
| `feat:` | Nouvelle fonctionnalité |
| `fix:` | Correction de bug |
| `style:` | Changements visuels (CSS, UI) |
| `refactor:` | Refactoring de code |
| `docs:` | Documentation |
| `chore:` | Maintenance (dépendances, config) |
| `perf:` | Optimisation de performance |
| `security:` | Correction de sécurité |

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

---

<p align="center">
  <sub>Construit avec ❤️ et du code temporel — TimeTravel Agency © 2025</sub>
</p>
