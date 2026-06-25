// ============================================================
// ALEX CAFE — Image Registry
// Place actual photos in public/images/ following these names
// ============================================================

export const images = {
  // Hero / Brand
  hero: '/Alex-caf-/images/hero-storefront.jpg',
  heroFallback: '/Alex-caf-/images/hero-storefront.jpg',

  // Food & Drink — used in menu highlights, homepage sections
  cappuccino: '/Alex-caf-/images/cappuccino.jpg',
  cornetto: '/Alex-caf-/images/cornetto.jpg',
  breakfast: '/Alex-caf-/images/breakfast.jpg',
  panino: '/Alex-caf-/images/panino.jpg',
  spritz: '/Alex-caf-/images/spritz.jpg',
  aperitivo: '/Alex-caf-/images/aperitivo.jpg',
  espresso: '/Alex-caf-/images/espresso.jpg',
  pasta: '/Alex-caf-/images/pasta.jpg',
  pastries: '/Alex-caf-/images/pastries.jpg',
  sandwich: '/Alex-caf-/images/sandwich.jpg',

  // Atmosphere
  interior: '/Alex-caf-/images/interior.jpg',
  exterior: '/Alex-caf-/images/exterior.jpg',
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
