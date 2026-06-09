'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

type FormData = {
  name: string;
  phone: string;
  date: string;
  time: string;
  people: string;
  note: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
  '20:00', '20:30',
];

export default function PrenotaPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    date: '',
    time: '',
    people: '2',
    note: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = 'Inserisci il tuo nome';
    if (!formData.phone.trim()) errs.phone = 'Inserisci il telefono';
    else if (!/^[\d\s\+\-]{8,}$/.test(formData.phone)) errs.phone = 'Numero non valido';
    if (!formData.date) errs.date = 'Seleziona una data';
    if (!formData.time) errs.time = 'Seleziona un orario';
    if (!formData.people || parseInt(formData.people) < 1) errs.people = 'Almeno 1 persona';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    // Simulate API call — Phase 2: connect to Supabase
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);

    // Log for dev — will be replaced with server action
    console.log('Reservation submitted:', formData);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-5">
        <div className="max-w-md w-full text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1
            className="text-3xl font-bold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Prenotazione confermata!
          </h1>
          <p className="text-[var(--text-secondary)] mb-2">
            Grazie <strong>{formData.name}</strong>, la tua prenotazione è stata ricevuta.
          </p>
          <p className="text-[var(--text-secondary)] mb-6">
            {formData.date} alle {formData.time} — {formData.people} {parseInt(formData.people) === 1 ? 'persona' : 'persone'}
          </p>
          <p className="text-sm text-[var(--text-muted)] mb-8">
            Ti confermeremo la prenotazione via WhatsApp o telefono.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-[var(--radius-lg)] hover:bg-[var(--color-accent-dark)] active:scale-[0.98] touch-manipulation transition-all min-h-[48px]"
            >
              Torna alla home
            </a>
            <a
              href="https://wa.me/393249015100"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#25D366] text-white font-semibold rounded-[var(--radius-lg)] hover:bg-[#128C7E] active:scale-[0.98] touch-manipulation transition-all min-h-[48px]"
            >
              💬 Conferma su WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="bg-[var(--bg-darker)] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-[var(--color-cream)] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Prenota un tavolo
          </h1>
          <p className="text-[var(--color-stone)] text-lg max-w-xl mx-auto">
            Seleziona data, orario e numero di persone. Ti confermeremo la prenotazione al più presto.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 sm:py-16">
        <div className="max-w-lg mx-auto px-5">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Nome e Cognome"
              placeholder="Mario Rossi"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              error={errors.name}
              required
            />

            <Input
              label="Telefono"
              placeholder="+39 324 901 5100"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              error={errors.phone}
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Data"
                type="date"
                min={today}
                value={formData.date}
                onChange={(e) => handleChange('date', e.target.value)}
                error={errors.date}
                required
              />

              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                  Orario
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => handleChange('time', e.target.value)}
                  className={`w-full h-12 px-4 rounded-[var(--radius-lg)] border text-base touch-manipulation transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] ${
                    errors.time
                      ? 'border-[var(--color-error)] bg-red-50'
                      : 'border-[var(--color-stone)] bg-white'
                  }`}
                >
                  <option value="">Seleziona</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.time && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.time}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                Numero persone
              </label>
              <div className="flex gap-2">
                {['1', '2', '3', '4', '5', '6+'].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => handleChange('people', n)}
                    className={`flex-1 h-12 rounded-[var(--radius-lg)] font-medium text-sm touch-manipulation active:scale-95 transition-all duration-150 ${
                      formData.people === n
                        ? 'bg-[var(--color-espresso)] text-white shadow-md'
                        : 'bg-[var(--color-cream-dark)] text-[var(--text-secondary)] active:bg-[var(--color-stone)]/40'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                Nota (opzionale)
              </label>
              <textarea
                value={formData.note}
                onChange={(e) => handleChange('note', e.target.value)}
                placeholder="Allergie, esigenze particolari, occasione speciale..."
                rows={3}
                className="w-full px-4 py-3 rounded-[var(--radius-lg)] border border-[var(--color-stone)] bg-white text-base resize-none touch-manipulation focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-colors"
              />
            </div>

            <Button type="submit" fullWidth size="lg" loading={loading}>
              Conferma prenotazione
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-[var(--text-muted)] mb-3">
              Preferisci prenotare via chat?
            </p>
            <a
              href="https://wa.me/393249015100?text=Ciao! Vorrei prenotare un tavolo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#25D366] hover:text-[#128C7E] touch-manipulation py-2 transition-colors"
            >
              💬 Prenota su WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
