'use client';

import { useState } from 'react';
import { loyaltyPerks, loyaltyFAQ } from '@/data/loyalty';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function StudentiPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', isStudent: true });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
    console.log('Loyalty signup:', formData);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="bg-[var(--bg-darker)] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-5xl block mb-4">🎓</span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-[var(--color-cream)] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Tessera Studenti
          </h1>
          <p className="text-[var(--color-stone)] text-lg max-w-xl mx-auto">
            Iscriviti gratis e ottieni sconti esclusivi, aperitivi speciali e molto altro
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-8 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Cosa include la tessera
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {loyaltyPerks.map((perk) => (
              <div
                key={perk.id}
                className="bg-[var(--bg-card)] p-6 rounded-[var(--radius-xl)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow"
              >
                <span className="text-3xl block mb-3">{perk.icon}</span>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{perk.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup */}
      <section className="py-12 sm:py-16 section-alt">
        <div className="max-w-lg mx-auto px-5 sm:px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-8 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Iscriviti ora
          </h2>

          {submitted ? (
            <div className="text-center py-8">
              <span className="text-5xl block mb-4">🎉</span>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Iscrizione completata!</h3>
              <p className="text-[var(--text-secondary)]">
                La tua tessera è pronta. Vieni a ritirarla in bar e presentala la prossima volta!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Nome e Cognome"
                placeholder="Mario Rossi"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                label="Telefono"
                placeholder="+39 324 901 5100"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <div>
                <label className="flex items-center gap-3 cursor-pointer py-2 touch-manipulation">
                  <input
                    type="checkbox"
                    checked={formData.isStudent}
                    onChange={(e) => setFormData({ ...formData, isStudent: e.target.checked })}
                    className="w-5 h-5 rounded border-[var(--color-stone)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]"
                  />
                  <span className="text-sm font-medium text-[var(--text-primary)]">Sono studente universitario</span>
                </label>
              </div>
              <Button type="submit" fullWidth size="lg" loading={loading}>
                Iscriviti alla tessera
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-8 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Domande frequenti
          </h2>
          <div className="space-y-3">
            {loyaltyFAQ.map((faq, i) => (
              <div key={i} className="bg-[var(--bg-card)] rounded-[var(--radius-xl)] shadow-[var(--shadow-sm)] overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left min-h-[56px] touch-manipulation active:bg-[var(--color-cream-dark)] transition-colors"
                >
                  <span className="text-sm font-semibold text-[var(--text-primary)] pr-4">{faq.question}</span>
                  <span className={`text-[var(--text-muted)] transition-transform duration-200 shrink-0 ${openFAQ === i ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFAQ === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
