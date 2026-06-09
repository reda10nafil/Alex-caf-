'use client';

import { useState } from 'react';
import { qrRequestTypes } from '@/data/business';

export default function OrdinaDalTavoloPage() {
  const [table, setTable] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!table || !selectedType) return;
    // Phase 2: send to backend
    console.log('QR Request:', { table, type: selectedType, note });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-5">
        <div className="max-w-md w-full text-center">
          <div className="text-6xl mb-6">✅</div>
          <h1
            className="text-3xl font-bold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Richiesta inviata!
          </h1>
          <p className="text-[var(--text-secondary)] mb-2">
            Tavolo <strong>{table}</strong> — {qrRequestTypes.find((t) => t.id === selectedType)?.label}
          </p>
          <p className="text-sm text-[var(--text-muted)] mb-8">
            Lo staff riceverà la tua richiesta al più presto.
          </p>
          <button
            onClick={() => { setSubmitted(false); setSelectedType(''); setNote(''); }}
            className="px-6 py-4 bg-[var(--color-accent)] text-white font-semibold rounded-[var(--radius-lg)] hover:bg-[var(--color-accent-dark)] active:scale-[0.98] touch-manipulation transition-all min-h-[48px]"
          >
            Nuova richiesta
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="bg-[var(--bg-darker)] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-4xl block mb-3">📱</span>
          <h1
            className="text-3xl sm:text-4xl font-bold text-[var(--color-cream)] mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ordina dal tavolo
          </h1>
          <p className="text-[var(--color-stone)] max-w-md mx-auto">
            Scansiona il codice QR sul tuo tavolo e richiedi quello che vuoi
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="max-w-md mx-auto px-5">
          {/* Table selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-[var(--text-primary)] mb-3">
              Il tuo tavolo
            </label>
            <div className="grid grid-cols-4 gap-2">
              {['1', '2', '3', '4', '5', '6', '7', '8'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTable(t)}
                  className={`h-14 rounded-[var(--radius-lg)] font-bold text-lg touch-manipulation active:scale-95 transition-all duration-150 ${
                    table === t
                      ? 'bg-[var(--color-espresso)] text-white shadow-md'
                      : 'bg-[var(--color-cream-dark)] text-[var(--text-secondary)] active:bg-[var(--color-stone)]/40'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Request types */}
          {table && (
            <div className="mb-8">
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-3">
                Cosa desideri?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {qrRequestTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`flex items-center gap-3 p-4 rounded-[var(--radius-xl)] text-left touch-manipulation active:scale-[0.97] transition-all duration-150 min-h-[56px] ${
                      selectedType === type.id
                        ? 'bg-[var(--color-espresso)] text-white shadow-md'
                        : 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-[var(--shadow-sm)] active:shadow-[var(--shadow-md)]'
                    }`}
                  >
                    <span className="text-2xl">{type.icon}</span>
                    <span className="text-sm font-semibold">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Note */}
          {selectedType && (
            <div className="mb-8">
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                Nota (opzionale)
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Es: senza ghiaccio, extra caldo, allergie..."
                rows={2}
                className="w-full px-4 py-3 rounded-[var(--radius-lg)] border border-[var(--color-stone)] bg-white text-base resize-none focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-colors"
              />
            </div>
          )}

          {/* Submit */}
          {selectedType && (
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-[var(--color-accent)] text-white font-semibold text-lg rounded-[var(--radius-lg)] hover:bg-[var(--color-accent-dark)] active:scale-[0.98] touch-manipulation transition-all duration-150 shadow-lg min-h-[52px]"
            >
              Invia richiesta
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
