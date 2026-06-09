// ============================================================
// ALEX CAFE — Business Info & Settings
// ============================================================

export const businessInfo = {
  name: 'Alex Cafe',
  tagline: 'Il cuore del quartiere',
  description:
    'Bar di quartiere nel cuore di Torino, vicino al mercato di Piazza Foroni. Colazioni, caffè, snack e aperitivi con atmosfera accogliente.',
  address: 'Via Jacopo Foroni 3A, 10154 Torino (TO)',
  phone: '+39 324 901 5100',
  email: 'info@alexcafe.it',
  whatsapp: '+39 324 901 5100',
  telegramBot: '@alexcafe_bot',
  hours: {
    weekday: { open: '07:00', close: '21:00' },
    saturday: { open: '08:00', close: '22:00' },
    sunday: { open: '08:30', close: '20:00' },
  },
  social: {
    instagram: 'https://instagram.com/alexcafe.torino',
    facebook: 'https://facebook.com/alexcafe.torino',
  },
  location: {
    lat: 45.0847,
    lng: 7.6937,
  },
  positioning: {
    market: 'Davanti al mercato di Piazza Foroni',
    neighborhood: 'Nel cuore del quartiere',
    student: 'Vicino alle università di Torino',
  },
};

export const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Prenota', href: '/prenota' },
  { label: 'Offerte', href: '/offerte' },
  { label: 'Eventi', href: '/eventi' },
  { label: 'Studenti', href: '/studenti' },
  { label: 'Contatti', href: '/contatti' },
];

export const qrRequestTypes = [
  { id: 'acqua', label: 'Acqua', icon: '💧' },
  { id: 'caffe', label: 'Caffè', icon: '☕' },
  { id: 'cappuccino', label: 'Cappuccino', icon: '☕' },
  { id: 'aperitivo', label: 'Aperitivo', icon: '🍹' },
  { id: 'snack', label: 'Snack', icon: '🥪' },
  { id: 'conto', label: 'Il conto', icon: '💰' },
  { id: 'assistenza', label: 'Assistenza', icon: '🙋' },
  { id: 'chiama-staff', label: 'Chiama lo staff', icon: '📞' },
];
