// ============================================================
// ALEX CAFE — Offers Data
// ============================================================

export interface Offer {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  audience: 'mercato' | 'vicinato' | 'studenti' | 'aperitivo' | 'tutti';
  validFrom: string;
  validTo: string;
  promoCode?: string;
  ctaLabel: string;
  ctaType: 'whatsapp' | 'prenota' | 'menu' | 'link';
  ctaTarget?: string;
  isFeatured?: boolean;
}

export const offers: Offer[] = [
  {
    id: 'colazione-mercatina',
    title: 'Colazione del Mercatino',
    shortDescription: 'Cappuccino + Cornetto a prezzo speciale',
    description:
      'Per chi passa dal mercato di Piazza Foroni: cappuccino e cornetto semplice a soli €2,50. Disponibile dal lunedì al sabato, fino alle 10:30.',
    audience: 'mercato',
    validFrom: '2025-01-01',
    validTo: '2025-12-31',
    ctaLabel: 'Chiedi su WhatsApp',
    ctaType: 'whatsapp',
    isFeatured: true,
  },
  {
    id: 'aperitivo-vicinato',
    title: 'Aperitivo del Vicinato',
    shortDescription: 'Spritz + Tagliere a prezzo fisso',
    description:
      'Ogni giorno dalle 18:00 alle 20:00: Spritz (Aperol, Hugo o Negroni) + Tagliere di salumi e formaggi a soli €10. Per tutti i residenti del quartiere.',
    audience: 'vicinato',
    validFrom: '2025-01-01',
    validTo: '2025-12-31',
    ctaLabel: 'Prenota un tavolo',
    ctaType: 'prenota',
    isFeatured: true,
  },
  {
    id: 'studenti-lavoro',
    title: 'Studio & Caffè',
    shortDescription: 'Tessera studenti: 10% di sconto su tutto',
    description:
      'Porta la tua tessera studenti e ottieni il 10% di sconto su caffè, colazioni e snack tutto il giorno. Perfetto per chi studia o lavora nella zona.',
    audience: 'studenti',
    validFrom: '2025-01-01',
    validTo: '2025-06-30',
    ctaLabel: 'Scopri di più',
    ctaType: 'link',
    ctaTarget: '/studenti',
  },
  {
    id: 'weekend-brunch',
    title: 'Weekend Brunch',
    shortDescription: 'Colazione completa nel weekend',
    description:
      'Ogni sabato e domenica dalle 9:00 alle 12:00: cornetto, frutta fresca, yogurt e caffè a soli €6. Un motivo in più per starti la giornata da noi.',
    audience: 'tutti',
    validFrom: '2025-03-01',
    validTo: '2025-09-30',
    promoCode: 'BRUNCH25',
    ctaLabel: 'Prenota il weekend',
    ctaType: 'prenota',
  },
];
