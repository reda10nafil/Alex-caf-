'use client';

import { offers } from '@/data/offers';
import { businessInfo } from '@/data/business';
import { images } from '@/data/images';
import ImageWithFallback from '@/components/ui/ImageWithFallback';

const audienceLabels: Record<string, string> = {
  mercato: 'Mercato',
  vicinato: 'Vicinato',
  studenti: 'Studenti',
  aperitivo: 'Aperitivo',
  tutti: 'Tutti',
};

const audienceColors: Record<string, string> = {
  mercato: 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]',
  vicinato: 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]',
  studenti: 'bg-blue-100 text-blue-700',
  aperitivo: 'bg-purple-100 text-purple-700',
  tutti: 'bg-[var(--color-stone)]/30 text-[var(--text-secondary)]',
};

const offerImages: Record<string, string> = {
  'colazione-mercatina': images.breakfast,
  'aperitivo-vicinato': images.spritz,
  'studenti-lavoro': images.cappuccino,
  'weekend-brunch': images.cornetto,
};

export default function OffertePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="relative bg-[var(--bg-darker)] py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback src={images.spritz} alt="" className="w-full h-full object-cover" fallbackGradient="linear-gradient(135deg, #C4622D, #A84E1F)" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-cream)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Offerte
          </h1>
          <p className="text-[var(--color-stone)] text-lg max-w-xl mx-auto">
            Promozioni pensate per te, dal mercato alla sera
          </p>
        </div>
      </section>

      {/* Offers list */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="space-y-6">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className={`bg-[var(--bg-card)] rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300 ${
                  offer.isFeatured ? 'ring-2 ring-[var(--color-accent)]/20' : ''
                }`}
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Offer image */}
                  <div className="sm:w-56 h-48 sm:h-auto relative overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={offerImages[offer.id] || images.aperitivo}
                      alt={offer.title}
                      className="w-full h-full object-cover"
                      fallbackGradient="linear-gradient(135deg, #3C2A1A, #5A4232)"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${audienceColors[offer.audience]}`}>
                        {audienceLabels[offer.audience]}
                      </span>
                      {offer.isFeatured && (
                        <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded-full">
                          In evidenza
                        </span>
                      )}
                      {offer.promoCode && (
                        <span className="text-xs font-mono bg-[var(--color-cream-dark)] text-[var(--text-secondary)] px-2 py-1 rounded">
                          Codice: {offer.promoCode}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      {offer.title}
                    </h2>
                    <p className="text-[var(--text-secondary)] mb-4">{offer.description}</p>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <p className="text-xs text-[var(--text-muted)]">
                        Valida fino al {new Date(offer.validTo).toLocaleDateString('it-IT')}
                      </p>

                      <div className="flex gap-3">
                        {offer.ctaType === 'whatsapp' ? (
                          <a
                            href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Ciao! Voglio sapere di più su: ${offer.title}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-5 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-[var(--radius-lg)] hover:bg-[#128C7E] active:scale-[0.98] touch-manipulation transition-all min-h-[44px]"
                          >
                            {offer.ctaLabel}
                          </a>
                        ) : (
                          <a
                            href={offer.ctaTarget || '/prenota'}
                            className="inline-flex items-center px-5 py-2.5 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-[var(--radius-lg)] hover:bg-[var(--color-accent-dark)] active:scale-[0.98] touch-manipulation transition-all min-h-[44px]"
                          >
                            {offer.ctaLabel}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
