import Link from 'next/link';
import { businessInfo, navigationLinks } from '@/data/business';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-darker)] text-[var(--text-inverse)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span
              className="text-2xl font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-[var(--color-cream)]">Alex</span>
              <span className="text-[var(--color-accent-light)]">Cafe</span>
            </span>
            <p className="mt-3 text-sm text-[var(--color-stone-dark)] leading-relaxed">
              {businessInfo.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-stone)] mb-4">
              Navigazione
            </h3>
            <ul className="space-y-1">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-stone-dark)] hover:text-[var(--color-cream)] touch-manipulation py-1.5 inline-block transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-stone)] mb-4">
              Contatti
            </h3>
            <ul className="space-y-2 text-sm text-[var(--color-stone-dark)]">
              <li>{businessInfo.address}</li>
              <li>{businessInfo.phone}</li>
              <li>{businessInfo.email}</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-stone)] mb-4">
              Orari
            </h3>
            <ul className="space-y-2 text-sm text-[var(--color-stone-dark)]">
              <li>Lun — Ven: {businessInfo.hours.weekday.open} — {businessInfo.hours.weekday.close}</li>
              <li>Sabato: {businessInfo.hours.saturday.open} — {businessInfo.hours.saturday.close}</li>
              <li>Domenica: {businessInfo.hours.sunday.open} — {businessInfo.hours.sunday.close}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--color-warm-gray)]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-warm-gray)]">
            © {new Date().getFullYear()} Alex Cafe. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-4">
            {/* WhatsApp placeholder */}
            <a
              href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] touch-manipulation py-1.5 inline-block transition-colors"
            >
              WhatsApp
            </a>
            {/* Telegram placeholder */}
            <a
              href={`https://t.me/${businessInfo.telegramBot.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] touch-manipulation py-1.5 inline-block transition-colors"
            >
              Telegram
            </a>
            <a
              href={businessInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] touch-manipulation py-1.5 inline-block transition-colors"
            >
              Instagram
            </a>
            <a
              href={businessInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] touch-manipulation py-1.5 inline-block transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
