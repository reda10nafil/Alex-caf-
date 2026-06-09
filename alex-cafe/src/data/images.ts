// ============================================================
// ALEX CAFE — Image Registry
// Place actual photos in public/images/ following these names
// ============================================================

export const images = {
  // Hero / Brand
  hero: '/images/hero-storefront.jpg',
  heroFallback: '/images/hero-storefront.jpg',

  // Food & Drink — used in menu highlights, homepage sections
  cappuccino: '/images/cappuccino.jpg',
  cornetto: '/images/cornetto.jpg',
  breakfast: '/images/breakfast.jpg',
  panino: '/images/panino.jpg',
  spritz: '/images/spritz.jpg',
  aperitivo: '/images/aperitivo.jpg',
  espresso: '/images/espresso.jpg',
  pasta: '/images/pasta.jpg',
  pastries: '/images/pastries.jpg',
  sandwich: '/images/sandwich.jpg',

  // Atmosphere
  interior: '/images/interior.jpg',
  exterior: '/images/exterior.jpg',
} as const;

// Image metadata for alt text and captions
export const imageAlt: Record<string, string> = {
  'hero-storefront.jpg': 'Alex Cafe — ingresso del locale con balloons neri e dorati',
  'cappuccino.jpg': 'Cappuccino con latte art su tagliere di legno',
  'cornetto.jpg': 'Cornetto sfogliato con cappuccino',
  'breakfast.jpg': 'Colazione completa con cappuccino, toast e insalata',
  'panino.jpg': 'Panino alla griglia con verdure e cappuccino',
  'spritz.jpg': 'Aperol Spritz con tagliere di salumi e formaggi',
  'aperitivo.jpg': 'Aperitivo con stuzzichini e olive',
  'espresso.jpg': 'Espresso servito all\'italiana su vassoio',
  'pasta.jpg': 'Pasta al pomodoro con basilico fresco',
  'pastries.jpg': 'Brioches e pasticcini con cappuccino',
  'sandwich.jpg': 'Tramezzino toast con cappuccino',
  'interior.jpg': 'Interni di Alex Cafe',
  'exterior.jpg': 'Esterno di Alex Cafe',
};
