import { businessInfo } from '@/data/business';

export default function ContattiPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="bg-[var(--bg-darker)] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-[var(--color-cream)] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Contatti
          </h1>
          <p className="text-[var(--color-stone)] text-lg max-w-xl mx-auto">
           Vieni a trovarci o scrivici per qualsiasi informazione
          </p>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Info */}
            <div className="space-y-6">
              <div>
                <h2
                  className="text-2xl font-bold text-[var(--text-primary)] mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Viene a trovarci
                </h2>
                <p className="text-[var(--text-secondary)] text-lg">{businessInfo.address}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Telefono</h3>
                <a href={`tel:${businessInfo.phone}`} className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-lg touch-manipulation py-1 inline-block">
                  {businessInfo.phone}
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Email</h3>
                <a href={`mailto:${businessInfo.email}`} className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] touch-manipulation py-1 inline-block">
                  {businessInfo.email}
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">Orari di apertura</h3>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex justify-between max-w-xs">
                    <span>Lun — Ven</span>
                    <span className="font-medium">{businessInfo.hours.weekday.open} — {businessInfo.hours.weekday.close}</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span>Sabato</span>
                    <span className="font-medium">{businessInfo.hours.saturday.open} — {businessInfo.hours.saturday.close}</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span>Domenica</span>
                    <span className="font-medium">{businessInfo.hours.sunday.open} — {businessInfo.hours.sunday.close}</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4">
                <a
                  href={businessInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--color-cream-dark)] rounded-[var(--radius-lg)] text-sm font-medium text-[var(--text-secondary)] active:bg-[var(--color-stone)]/40 touch-manipulation transition-colors min-h-[44px]"
                >
                  📸 Instagram
                </a>
                <a
                  href={businessInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--color-cream-dark)] rounded-[var(--radius-lg)] text-sm font-medium text-[var(--text-secondary)] active:bg-[var(--color-stone)]/40 touch-manipulation transition-colors min-h-[44px]"
                >
                  👍 Facebook
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-sm)] h-80 sm:h-full min-h-[320px]">
              <iframe
                src="https://www.google.com/maps?q=Via+Jacopo+Foroni+3A,+10154+Torino&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Alex Cafe"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick actions */}
      <section className="py-12 sm:py-16 section-alt">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2
            className="text-2xl font-bold text-[var(--text-primary)] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Contattaci subito
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-semibold rounded-[var(--radius-lg)] hover:bg-[#128C7E] active:scale-[0.98] touch-manipulation transition-all min-h-[48px]"
            >
              💬 WhatsApp
            </a>
            <a
              href={`tel:${businessInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-[var(--radius-lg)] hover:bg-[var(--color-accent-dark)] active:scale-[0.98] touch-manipulation transition-all min-h-[48px]"
            >
              📞 Chiama
            </a>
            <a
              href={`https://t.me/${businessInfo.telegramBot.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-[var(--color-espresso)] text-[var(--color-espresso)] font-semibold rounded-[var(--radius-lg)] hover:bg-[var(--color-espresso)] hover:text-white active:scale-[0.98] touch-manipulation transition-all min-h-[48px]"
            >
              ✈️ Telegram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
