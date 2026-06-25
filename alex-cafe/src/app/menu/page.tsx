'use client';

import { useState } from 'react';
import { menuCategories } from '@/data/menu';
import type { MenuItem } from '@/data/menu';
import { images } from '@/data/images';
import ImageWithFallback from '@/components/ui/ImageWithFallback';

// Map category IDs to representative images
const categoryImages: Record<string, string> = {
  caffetteria: images.cappuccino,
  dolci: images.pastries,
  salato: images.panino,
  birre: images.spritz,
  bevande: images.aperitivo,
};

function MenuCard({ item, categoryImage }: { item: MenuItem; categoryImage: string }) {
  return (
    <div className="bg-[var(--bg-card)] rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300">
      {/* Item image */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <ImageWithFallback
          src={item.image || categoryImage}
          alt={item.name}
          className="w-full h-full object-cover"
          fallbackGradient="linear-gradient(135deg, #3C2A1A 0%, #5A4232 100%)"
        />
        <div className="absolute top-3 left-3 flex gap-1.5">
          {item.tags?.includes('best-seller') && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[var(--color-accent)] px-2 py-1 rounded-full">
              Best seller
            </span>
          )}
          {item.tags?.includes('signature') && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[var(--color-secondary)] px-2 py-1 rounded-full">
              Signature
            </span>
          )}
          {item.tags?.includes('new') && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[var(--color-accent-light)] px-2 py-1 rounded-full">
              Nuovo
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">{item.name}</h3>
            {item.description && (
              <p className="text-sm text-[var(--text-secondary)] line-clamp-2">{item.description}</p>
            )}
          </div>
          <span className="text-lg font-bold text-[var(--color-accent)] whitespace-nowrap">
            €{item.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]?.id || '');
  const currentCategory = menuCategories.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero with food images */}
      <section className="relative bg-[var(--bg-darker)] py-16 sm:py-20 overflow-hidden">
        {/* Background collage */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-1/3 h-full">
            <ImageWithFallback src={images.cappuccino} alt="" className="w-full h-full object-cover" fallbackGradient="linear-gradient(135deg, #3C2A1A, #5A4232)" />
          </div>
          <div className="absolute top-0 left-1/3 w-1/3 h-full">
            <ImageWithFallback src={images.spritz} alt="" className="w-full h-full object-cover" fallbackGradient="linear-gradient(135deg, #C4622D, #A84E1F)" />
          </div>
          <div className="absolute top-0 left-2/3 w-1/3 h-full">
            <ImageWithFallback src={images.panino} alt="" className="w-full h-full object-cover" fallbackGradient="linear-gradient(135deg, #7B8C5E, #5A8F5C)" />
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-cream)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Il Nostro Menu
          </h1>
          <p className="text-[var(--color-stone)] text-lg max-w-xl mx-auto">
            Scopri i nostri prodotti, preparati con cura ogni giorno
          </p>
        </div>
      </section>

      {/* Category tabs */}
      <div className="sticky top-16 sm:top-20 z-40 bg-[var(--bg-primary)] border-b border-[var(--color-stone)]/20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide category-tabs" role="tablist">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                role="tab"
                aria-selected={activeCategory === cat.id}
                aria-controls={`panel-${cat.id}`}
                id={`tab-${cat.id}`}
                className="category-tab"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 20px',
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  minHeight: 44,
                  border: 'none',
                  cursor: 'pointer',
                  WebkitTapHighlightColor: 'transparent',
                  background: activeCategory === cat.id ? 'var(--color-espresso)' : 'var(--color-cream-dark)',
                  color: activeCategory === cat.id ? '#fff' : 'var(--text-secondary)',
                }}
              >
                <span style={{ fontSize: 16 }}>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu items */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {currentCategory && (
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {currentCategory.icon} {currentCategory.name}
              </h2>
              {currentCategory.description && (
                <p className="text-[var(--text-secondary)] mb-8">{currentCategory.description}</p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {currentCategory.items.map((item) => (
                  <MenuCard key={item.id} item={item} categoryImage={categoryImages[currentCategory.id] || images.cappuccino} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-[var(--text-secondary)] mb-4">Non trovi quello che cerchi? Chiedi in prenotazione o scrivici su WhatsApp</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/393249015100?text=Ciao! Vorrei sapere se avete..." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white font-semibold rounded-[var(--radius-lg)] hover:bg-[#128C7E] transition-colors">
              💬 Chiedi su WhatsApp
            </a>
            <a href="/prenota" className="inline-flex items-center justify-center px-6 py-3 border-2 border-[var(--color-espresso)] text-[var(--color-espresso)] font-semibold rounded-[var(--radius-lg)] hover:bg-[var(--color-espresso)] hover:text-white transition-colors">
              Prenota un tavolo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
