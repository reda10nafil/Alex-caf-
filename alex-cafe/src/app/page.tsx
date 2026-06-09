'use client';

import Link from 'next/link';
import { offers } from '@/data/offers';
import { events } from '@/data/events';
import { businessInfo } from '@/data/business';
import ImageWithFallback from '@/components/ui/ImageWithFallback';

/* ──────────────── HERO ──────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[80vh] flex items-end sm:items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/images/hero-storefront.jpg"
          alt="Alex Cafe — esterno del locale"
          className="w-full h-full object-cover"
          fallbackGradient="linear-gradient(135deg, #2D2926 0%, #3C2A1A 50%, #5A4232 100%)"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-[var(--color-accent-light)] text-sm sm:text-base font-medium tracking-wider uppercase mb-4">
            {businessInfo.positioning.neighborhood}
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Alex<span className="text-[var(--color-accent-light)]">Cafe</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            {businessInfo.tagline}
          </p>
          <p className="text-base text-white/60 mb-8 max-w-lg">
            {businessInfo.address}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/prenota"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] text-white font-semibold text-lg rounded-[var(--radius-lg)] hover:bg-[var(--color-accent-dark)] active:scale-[0.98] touch-manipulation transition-all duration-150 shadow-lg min-h-[52px]"
            >
              Prenota un tavolo
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold text-lg rounded-[var(--radius-lg)] hover:bg-white/10 active:scale-[0.98] touch-manipulation transition-all duration-150 min-h-[52px]"
            >
              Guarda il menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── HIGHLIGHTS ──────────────── */
function HighlightsSection() {
  const highlights = [
    { icon: '☕', title: 'Cappuccini Perfetti', desc: 'Caffè di qualità, preparato con cura ogni giorno' },
    { icon: '🤝', title: 'Personale Gentile', desc: 'Un accoglienza calorosa, come in casa tua' },
    { icon: '🏠', title: 'Nuova Gestione', desc: 'Stesso locale, nuova energia, stessa passione' },
    { icon: '🌅', title: 'Colazioni & Aperitivi', desc: 'Dalla mattina alla sera, sempre aperti per te' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Perché Alex Cafe
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Non solo un bar, ma un punto di ritrovo nel cuore del quartiere
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="bg-[var(--bg-card)] p-6 rounded-[var(--radius-xl)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow duration-300 text-center">
              <span className="text-4xl mb-4 block">{h.icon}</span>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{h.title}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── BREAKFAST GALLERY ──────────────── */
function BreakfastGallery() {
  const items = [
    { src: '/images/cappuccino.jpg', alt: 'Cappuccino con latte art', label: 'Caffetteria' },
    { src: '/images/cornetto.jpg', alt: 'Cornetto sfogliato', label: 'Colazioni' },
    { src: '/images/breakfast.jpg', alt: 'Colazione completa', label: 'Breakfast' },
    { src: '/images/pastries.jpg', alt: 'Pasticceria fresca', label: 'Brioches' },
  ];

  return (
    <section className="py-16 sm:py-24 section-alt">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              Colazioni & Caffè
            </h2>
            <p className="text-[var(--text-secondary)]">Il modo migliore per iniziare la giornata</p>
          </div>
          <Link href="/menu" className="hidden sm:inline-flex text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">
            Vedi il menu →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <Link key={item.label} href="/menu" className="group relative aspect-square rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-300">
              <ImageWithFallback
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                fallbackGradient="linear-gradient(135deg, #3C2A1A 0%, #5A4232 100%)"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-semibold text-sm sm:text-base">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── APERITIVO SECTION ──────────────── */
function AperitivoSection() {
  return (
    <section className="py-16 sm:py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] rounded-[var(--radius-2xl)] overflow-hidden shadow-[var(--shadow-lg)]">
            <ImageWithFallback
              src="/images/spritz.jpg"
              alt="Aperol Spritz con tagliere di aperitivo"
              className="w-full h-full object-cover"
              fallbackGradient="linear-gradient(135deg, #C4622D 0%, #A84E1F 100%)"
            />
          </div>
          <div>
            <p className="text-[var(--color-accent)] text-sm font-semibold tracking-wider uppercase mb-3">Aperitivo</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              L&apos;ora dell&apos;aperitivo
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-6">
              Ogni giorno dalle 18:00, Spritz, Negroni, Hugo e molto altro con stuzzichini della casa. Atmosfera di quartiere, prezzi accessibili.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/prenota"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-[var(--radius-lg)] hover:bg-[var(--color-accent-dark)] active:scale-[0.98] touch-manipulation transition-all min-h-[48px]"
              >
                Prenota un tavolo
              </Link>
              <Link
                href="/menu#aperitivi"
                className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-[var(--color-espresso)] text-[var(--color-espresso)] font-semibold rounded-[var(--radius-lg)] hover:bg-[var(--color-espresso)] hover:text-white active:scale-[0.98] touch-manipulation transition-all min-h-[48px]"
              >
                Vedi i drink
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── OFFERS ──────────────── */
function OffersSection() {
  const featured = offers.filter((o) => o.isFeatured).slice(0, 2);

  return (
    <section className="py-16 sm:py-24 section-alt">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              Offerte del momento
            </h2>
            <p className="text-[var(--text-secondary)]">Promozioni attive per te</p>
          </div>
          <Link href="/offerte" className="hidden sm:inline-flex text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">
            Vedi tutte →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((offer) => (
            <div key={offer.id} className="bg-[var(--bg-card)] rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-300">
              <div className="p-6 sm:p-8">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded-full mb-3">
                  {offer.audience}
                </span>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {offer.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-4">{offer.description}</p>
                {offer.ctaType === 'whatsapp' ? (
                  <a
                    href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Ciao! Voglio sapere di più su: ${offer.title}`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-[var(--radius-lg)] hover:bg-[#128C7E] active:scale-[0.98] touch-manipulation transition-all min-h-[44px]"
                  >
                    {offer.ctaLabel}
                  </a>
                ) : (
                  <Link href={offer.ctaTarget || '/prenota'} className="inline-flex items-center px-5 py-2.5 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-[var(--radius-lg)] hover:bg-[var(--color-accent-dark)] active:scale-[0.98] touch-manipulation transition-all min-h-[44px]">
                    {offer.ctaLabel}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        <Link href="/offerte" className="sm:hidden mt-6 inline-flex text-sm font-medium text-[var(--color-accent)]">Vedi tutte le offerte →</Link>
      </div>
    </section>
  );
}

/* ──────────────── EVENTS ──────────────── */
function EventsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              Prossimi eventi
            </h2>
            <p className="text-[var(--text-secondary)]">Non perderti le nostre serate speciali</p>
          </div>
          <Link href="/eventi" className="hidden sm:inline-flex text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">
            Vedi tutti →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.slice(0, 2).map((event) => (
            <div key={event.id} className="bg-[var(--bg-card)] rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2.5 py-1 rounded-full">{event.time}</span>
                  {event.tags?.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs text-[var(--text-muted)]">#{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>{event.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-4">{event.summary}</p>
                <p className="text-xs text-[var(--text-muted)] mb-4">📍 {event.location}</p>
                {event.bookingEnabled && (
                  <Link href="/prenota" className="inline-flex items-center px-5 py-2.5 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-[var(--radius-lg)] hover:bg-[var(--color-accent-dark)] active:scale-[0.98] touch-manipulation transition-all min-h-[44px]">
                    Prenota posto
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── STUDENTS ──────────────── */
function StudentsSection() {
  return (
    <section className="py-16 sm:py-24 section-alt">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="bg-[var(--bg-darker)] rounded-[var(--radius-2xl)] p-8 sm:p-12 text-center">
          <span className="text-4xl mb-4 block">🎓</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-cream)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Tessera Studenti
          </h2>
          <p className="text-[var(--color-stone)] text-lg max-w-xl mx-auto mb-6">
            10% di sconto su caffè e colazioni, aperitivi speciali e eventi esclusivi. Iscriviti gratis.
          </p>
          <Link href="/studenti" className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-white font-semibold text-lg rounded-[var(--radius-lg)] hover:bg-[var(--color-accent-dark)] active:scale-[0.98] transition-all duration-150">
            Scopri di più
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── TESTIMONIALS ──────────────── */
function TestimonialsSection() {
  const testimonials = [
    { name: 'Marco R.', text: 'Il miglior cappuccino del quartiere! Personale fantastico.', rating: 5 },
    { name: 'Giulia T.', text: 'Aperitivo perfetto dopo il mercato. Atmosfera accogliente.', rating: 5 },
    { name: 'Alessandro L.', text: 'Ci vado ogni mattina per colazione. Consigliatissimo!', rating: 5 },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-10 text-center" style={{ fontFamily: 'var(--font-display)' }}>
          Cosa dicono di noi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[var(--bg-card)] p-6 rounded-[var(--radius-xl)] shadow-[var(--shadow-sm)]">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[var(--color-accent)]">★</span>
                ))}
              </div>
              <p className="text-[var(--text-secondary)] text-sm mb-4 italic">&ldquo;{t.text}&rdquo;</p>
              <p className="text-sm font-semibold text-[var(--text-primary)]">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── MAP ──────────────── */
function MapSection() {
  return (
    <section className="py-16 sm:py-24 section-alt">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Dove siamo
            </h2>
            <div className="space-y-4 text-[var(--text-secondary)]">
              <p className="flex items-start gap-3"><span className="text-lg">📍</span>{businessInfo.address}</p>
              <p className="flex items-start gap-3"><span className="text-lg">📞</span>{businessInfo.phone}</p>
              <p className="flex items-start gap-3"><span className="text-lg">✉️</span>{businessInfo.email}</p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">Orari di apertura</h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex justify-between max-w-xs"><span>Lun — Ven</span><span className="font-medium">{businessInfo.hours.weekday.open} — {businessInfo.hours.weekday.close}</span></li>
                <li className="flex justify-between max-w-xs"><span>Sabato</span><span className="font-medium">{businessInfo.hours.saturday.open} — {businessInfo.hours.saturday.close}</span></li>
                <li className="flex justify-between max-w-xs"><span>Domenica</span><span className="font-medium">{businessInfo.hours.sunday.open} — {businessInfo.hours.sunday.close}</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-[var(--color-cream-dark)] rounded-[var(--radius-xl)] h-80 sm:h-96 flex items-center justify-center overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Via+Jacopo+Foroni+3A,+10154+Torino&z=16&output=embed"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              title="Mappa Alex Cafe"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── EXPORT ──────────────── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <BreakfastGallery />
      <AperitivoSection />
      <OffersSection />
      <EventsSection />
      <StudentsSection />
      <TestimonialsSection />
      <MapSection />
    </>
  );
}
