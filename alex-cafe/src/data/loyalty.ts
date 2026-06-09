// ============================================================
// ALEX CAFE — Loyalty / Student Program Data
// ============================================================

export interface LoyaltyPerk {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface LoyaltyFAQ {
  question: string;
  answer: string;
}

export const loyaltyPerks: LoyaltyPerk[] = [
  {
    id: 'perk-1',
    title: '10% di sconto su caffè e colazioni',
    description: 'Presenta la tessera e ottieni il 10% di sconto ogni giorno su caffè, cappuccino, cornetti e colazioni.',
    icon: '☕',
  },
  {
    id: 'perk-2',
    title: 'Aperitivi speciali',
    description: 'Accesso a offerte esclusive sugli aperitivi del martedì e del venerdì.',
    icon: '🍹',
  },
  {
    id: 'perk-3',
    title: 'Evento gratuito al mese',
    description: 'Partecipa a un evento speciale al mese (coffee tasting, musica live, ecc.) senza costi aggiuntivi.',
    icon: '🎶',
  },
  {
    id: 'perk-4',
    title: 'Punti fedeltà',
    description: 'Ogni 10 caffè acquistati, il prossimo è gratis. Ogni 5 aperitivi, il sesto è in omaggio.',
    icon: '⭐',
  },
  {
    id: 'perk-5',
    title: 'Promozioni studenti',
    description: 'Per studenti universitari: sconto aggiuntivo del 5% su tutti gli snack e le bevande analcoliche.',
    icon: '🎓',
  },
];

export const loyaltyFAQ: LoyaltyFAQ[] = [
  {
    question: 'Come posso iscrivermi?',
    answer: 'Basta compilare il modulo nella pagina dedicata o chiedere in cassa. La tessera è gratuita.',
  },
  {
    question: 'Chi può iscriversi?',
    answer: 'Tutti! Studenti, lavoratori, residenti, chiunque frequenti regolarmente il bar.',
  },
  {
    question: 'La tessera ha una scadenza?',
    answer: 'No, la tessera è valida a tempo indeterminato. I punti si accumulano senza scadenza.',
  },
  {
    question: 'Come funzionano i punti?',
    answer: 'Ogni caffè = 1 punto. Ogni aperitivo = 2 punti. A 10 punti caffè, il prossimo è gratis. A 10 punti aperitivi, il prossimo è in omaggio.',
  },
  {
    question: 'Posso usare la tessera per altri?',
    answer: 'No, la tessera è personale e non trasferibile.',
  },
];
