'use client';

import { events, featuredEvent } from '@/data/events';
import Link from 'next/link';
import { images } from '@/data/images';
import ImageWithFallback from '@/components/ui/ImageWithFallback';

export default function EventiPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="relative bg-[var(--bg-darker)] py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback src={images.aperitivo} alt="" className="w-full h-full object-cover" fallbackGradient="linear-gradient(135deg, #3C2A1A, #5A4232)" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-cream)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Eventi
          </h1>
          <p className="text-[var(--color-stone)] text-lg max-w-xl mx-auto">
            Serate speciali, degustazioni e momenti di incontro
          </p>
        </div>
      </section>

      {/* Featured event */}
      {featuredEvent && (
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="relative bg-[var(--bg-darker)] rounded-[var(--radius-2xl)] overflow-hidden">
              {/* Background image */}
              <div className="absolute inset-0 opacity-20">
                <ImageWithFallback src={images.spritz} alt="" className="w-full h-full object-cover" fallbackGradient="linear-gradient(135deg, #C4622D, #A84E1F)" />
              </div>
              <div className="relative z-10 p-8 sm:p-12 text-center">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[var(--color-accent)] text-white rounded-full mb-4">
                  In evidenza
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-cream)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  {featuredEvent.title}
                </h2>
                <p className="text-[var(--color-stone)] text-lg mb-2">{featuredEvent.summary}</p>
                <div className="flex items-center justify-center gap-4 text-sm text-[var(--color-stone-dark)] mb-6">
                  <span>📅 {new Date(featuredEvent.startAt).toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
                  <span>🕐 {featuredEvent.time}</span>
                </div>
                <p className="text-[var(--color-stone-dark)] max-w-xl mx-auto mb-8">{featuredEvent.description}</p>
                {featuredEvent.bookingEnabled && (
                  <Link href="/prenota" className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-white font-semibold text-lg rounded-[var(--radius-lg)] hover:bg-[var(--color-accent-dark)] active:scale-[0.98] touch-manipulation transition-all duration-150 min-h-[52px]">
                    Prenota posto
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All events */}
      <section className="py-12 sm:py-16 section-alt">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-8" style={{ fontFamily: 'var(--font-display)' }}>
            Tutti gli eventi
          </h2>
          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.id} className="bg-[var(--bg-card)] rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row">
                  {/* Event image */}
                  <div className="sm:w-48 h-40 sm:h-auto relative overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={event.coverImage || images.aperitivo}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      fallbackGradient="linear-gradient(135deg, #3C2A1A, #5A4232)"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2.5 py-1 rounded-full">{event.time}</span>
                      {event.tags?.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs text-[var(--text-muted)]">#{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      {event.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm mb-3">{event.description}</p>
                    <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] mb-4">
                      <span>📅 {new Date(event.startAt).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                      <span>📍 {event.location}</span>
                      {event.capacity && <span>👥 Max {event.capacity} persone</span>}
                    </div>
                    {event.bookingEnabled && (
                      <Link href="/prenota" className="inline-flex items-center px-5 py-2.5 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-[var(--radius-lg)] hover:bg-[var(--color-accent-dark)] active:scale-[0.98] touch-manipulation transition-all min-h-[44px]">
                        Prenota posto
                      </Link>
                    )}
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
