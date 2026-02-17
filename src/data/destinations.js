export const destinations = [
  {
    id: 'paris-1889',
    title: 'Paris 1889',
    subtitle: 'La Belle Époque',
    epoch: 'XIXe siècle',
    price: '12 500 €',
    duration: '7 jours',
    description:
      "Revivez l'effervescence de l'Exposition Universelle de 1889. Assistez à l'inauguration de la Tour Eiffel, promenez-vous sur les Champs-Élysées illuminés au gaz, et savourez la gastronomie parisienne dans les grands cafés littéraires.",
    highlights: [
      "Inauguration de la Tour Eiffel",
      "Exposition Universelle",
      "Cafés littéraires du Quartier Latin",
      "Spectacles au Moulin Rouge",
    ],
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    gradient: 'from-amber-900/80 to-yellow-800/60',
    accentColor: '#e2c97e',
  },
  {
    id: 'cretace-65m',
    title: 'Crétacé -65M',
    subtitle: 'L\'Ère des Dinosaures',
    epoch: 'Mésozoïque',
    price: '18 900 €',
    duration: '5 jours',
    description:
      "Explorez la Terre telle qu'elle existait il y a 65 millions d'années. Observez les titanesques dinosaures dans leur habitat naturel, traversez des forêts luxuriantes de fougères géantes, et admirez des ciels sans pollution lumineuse.",
    highlights: [
      "Observation de T-Rex en sécurité",
      "Forêts de fougères géantes",
      "Volcans en activité",
      "Ciel étoilé préhistorique",
    ],
    image:
      'https://images.unsplash.com/photo-1606856110002-d0991ce78250?w=800&q=80',
    gradient: 'from-emerald-900/80 to-green-800/60',
    accentColor: '#6ee7b7',
  },
  {
    id: 'florence-1504',
    title: 'Florence 1504',
    subtitle: 'La Renaissance Italienne',
    epoch: 'XVIe siècle',
    price: '14 200 €',
    duration: '6 jours',
    description:
      "Plongez au cœur de la Renaissance florentine. Visitez l'atelier de Michel-Ange pendant la création du David, assistez aux cours de Léonard de Vinci, et flânez dans les palais des Médicis.",
    highlights: [
      "Atelier de Michel-Ange",
      "Cours de Léonard de Vinci",
      "Palais des Médicis",
      "Gastronomie toscane authentique",
    ],
    image:
      'https://images.unsplash.com/photo-1543429258-c5ca3e1b6a2e?w=800&q=80',
    gradient: 'from-rose-900/80 to-red-800/60',
    accentColor: '#fda4af',
  },
];

export const chatbotSystemPrompt = `Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.
Ton rôle : conseiller les clients sur les meilleures destinations temporelles.

Ton ton :
- Professionnel mais chaleureux
- Passionné d'histoire
- Toujours enthousiaste sans être trop familier
- Expertise en voyage temporel (fictif mais crédible)

Tu connais parfaitement :
- Paris 1889 (Belle Époque, Tour Eiffel, Exposition Universelle) — 12 500 € pour 7 jours
- Crétacé -65M (dinosaures, nature préhistorique) — 18 900 € pour 5 jours
- Florence 1504 (Renaissance, art, Michel-Ange) — 14 200 € pour 6 jours

Tu peux suggérer des destinations selon les intérêts du client.
Réponds toujours en français. Sois concis (2-4 phrases max par réponse).
Si on te pose des questions hors sujet, redirige poliment vers les voyages temporels.`;

export const quizQuestions = [
  {
    id: 1,
    question: "Quel type d'expérience recherchez-vous ?",
    options: [
      { label: 'Culturelle et artistique', scores: { 'paris-1889': 2, 'florence-1504': 3, 'cretace-65m': 0 } },
      { label: 'Aventure et nature', scores: { 'paris-1889': 0, 'florence-1504': 0, 'cretace-65m': 3 } },
      { label: 'Élégance et raffinement', scores: { 'paris-1889': 3, 'florence-1504': 2, 'cretace-65m': 0 } },
    ],
  },
  {
    id: 2,
    question: 'Votre période préférée ?',
    options: [
      { label: 'Histoire moderne (XIXe-XXe siècle)', scores: { 'paris-1889': 3, 'florence-1504': 0, 'cretace-65m': 0 } },
      { label: 'Temps anciens et origines', scores: { 'paris-1889': 0, 'florence-1504': 0, 'cretace-65m': 3 } },
      { label: 'Renaissance et classicisme', scores: { 'paris-1889': 1, 'florence-1504': 3, 'cretace-65m': 0 } },
    ],
  },
  {
    id: 3,
    question: 'Vous préférez :',
    options: [
      { label: "L'effervescence urbaine", scores: { 'paris-1889': 3, 'florence-1504': 2, 'cretace-65m': 0 } },
      { label: 'La nature sauvage', scores: { 'paris-1889': 0, 'florence-1504': 0, 'cretace-65m': 3 } },
      { label: "L'art et l'architecture", scores: { 'paris-1889': 1, 'florence-1504': 3, 'cretace-65m': 0 } },
    ],
  },
  {
    id: 4,
    question: 'Votre activité idéale :',
    options: [
      { label: 'Visiter des monuments', scores: { 'paris-1889': 3, 'florence-1504': 2, 'cretace-65m': 0 } },
      { label: 'Observer la faune', scores: { 'paris-1889': 0, 'florence-1504': 0, 'cretace-65m': 3 } },
      { label: 'Explorer des musées', scores: { 'paris-1889': 1, 'florence-1504': 3, 'cretace-65m': 1 } },
    ],
  },
];

export const faqData = [
  {
    q: "Est-ce que le voyage temporel est sûr ?",
    a: "Absolument ! Tous nos voyages sont encadrés par des chrononautes certifiés. Nos capsules temporelles sont équipées des dernières technologies de stabilisation quantique."
  },
  {
    q: "Que dois-je emporter ?",
    a: "Nous fournissons des tenues d'époque adaptées. Apportez uniquement vos effets personnels essentiels. Les appareils électroniques modernes sont interdits pour préserver la timeline."
  },
  {
    q: "Y a-t-il un risque de paradoxe temporel ?",
    a: "Non. Notre technologie de bulle d'observation vous permet d'interagir avec l'époque sans altérer le cours de l'histoire. Vous êtes un observateur privilégié."
  },
  {
    q: "Combien de temps dure le voyage ?",
    a: "La durée varie selon la destination : 5 à 7 jours sur place. Le transit temporel lui-même ne prend que quelques secondes de temps subjectif."
  },
];
