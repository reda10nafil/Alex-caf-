// ============================================================
// ALEX CAFE — Events Data
// ============================================================

export interface Event {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  coverImage?: string;
  startAt: string;
  endAt?: string;
  time?: string;
  location?: string;
  capacity?: number;
  bookingEnabled: boolean;
  tags?: string[];
}

export const events: Event[] = [
  {
    id: 'evt-1',
    slug: 'aperitivo-live-musica',
    title: 'Aperitivo con Musica Live',
    summary: 'Ogni venerdì sera, musica dal vivo e aperitivo speciale.',
    description:
      'Un venerdì al mese, Alex Cafe si trasforma in un piccolo palcoscenico. Aperitivi speciali, musica live e atmosfera unica. Prenota il tuo tavolo per non perderti l\'esperienza.',
    startAt: '2025-06-13',
    time: '18:30 - 22:00',
    location: 'Alex Cafe — Sala interna',
    capacity: 30,
    bookingEnabled: true,
    tags: ['aperitivo', 'musica', 'venerdì'],
  },
  {
    id: 'evt-2',
    slug: 'coffee-tasting',
    title: 'Coffee Tasting Experience',
    summary: 'Scopri i nostri blend in una degustazione guidata.',
    description:
      'Un\'esperienza per gli amanti del caffè. Il nostro barista ti guiderà alla scoperta dei nostri blend, delle loro origini e dei metodi di preparazione. Include 4 caffè degustati e un snack.',
    startAt: '2025-06-20',
    time: '10:00 - 11:30',
    location: 'Alex Cafe — Tavolo dedicato',
    capacity: 12,
    bookingEnabled: true,
    tags: ['caffè', 'degustazione', 'esperienza'],
  },
  {
    id: 'evt-3',
    slug: 'mercatino-di-quartiere',
    title: 'Weekend al Mercatino',
    summary: 'Sconto speciale per chi passa dal mercatino.',
    description:
      'Ogni weekend, il mercatino di Piazza Foroni è più vivace che mai. Passa da noi per una colazione o un aperitivo e approfitta dell\'offerta dedicata ai frequentatori del mercato.',
    startAt: '2025-06-07',
    time: 'Tutto il giorno',
    location: 'Alex Cafe — Via Jacopo Foroni 3A',
    bookingEnabled: false,
    tags: ['mercato', 'weekend', 'offerta'],
  },
  {
    id: 'evt-4',
    slug: 'aperitivo-studenti',
    title: 'Aperitivo Studenti',
    summary: 'Speciale aperitivo per gli studenti universitari.',
    description:
      'Ogni martedì, aperitivo speciale per studenti: Spritz o analcolico + snack a soli €6. Porta la tessera studenti e goditi la serata con amici.',
    startAt: '2025-06-10',
    time: '18:00 - 21:00',
    location: 'Alex Cafe — Terrazza',
    capacity: 25,
    bookingEnabled: true,
    tags: ['studenti', 'aperitivo', 'martedì'],
  },
];

export const featuredEvent = events[0];
