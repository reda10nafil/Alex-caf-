// ============================================================
// ALEX CAFE — Menu Data (menu_alex_cafe.md)
// ============================================================

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  tags?: ('best-seller' | 'nuovo' | 'new' | 'signature' | 'vegan' | 'gluten-free')[];
  isFeatured?: boolean;
  isAvailable?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'caffetteria',
    name: 'Caffetteria',
    icon: '☕',
    items: [
      { id: 'caffe', name: 'Caffè', price: 1.20 },
      { id: 'ristretto', name: 'Ristretto', price: 1.20 },
      { id: 'lungo', name: 'Lungo', price: 1.20 },
      { id: 'deck', name: 'Deck', price: 1.30 },
      { id: 'macchiato', name: 'Macchiato', price: 1.20 },
      { id: 'corretto', name: 'Corretto', price: 1.60 },
      { id: 'ginseng-piccolo', name: 'Ginseng Piccolo', price: 1.40 },
      { id: 'ginseng-grande', name: 'Ginseng Grande', price: 1.60 },
      { id: 'orzo-piccolo', name: 'Orzo Piccolo', price: 1.40 },
      { id: 'orzo-grande', name: 'Orzo Grande', price: 1.60 },
      { id: 'cappuccino', name: 'Cappuccino', price: 1.50, tags: ['best-seller'], isFeatured: true },
      { id: 'cappuccino-soia', name: 'Cappuccino Soia', price: 1.60 },
      { id: 'marocchino', name: 'Marocchino', price: 1.80 },
      { id: 'marocchino-nutella', name: 'Marocchino con Nutella', price: 2.00 },
      { id: 'cioccolata-calda', name: 'Cioccolata Calda', price: 2.50 },
      { id: 'te-caldo', name: 'Tè Caldo', price: 2.00 },
      { id: 'shakerato', name: 'Shakerato', price: 2.50 },
      { id: 'vin-brule', name: 'Vin Brulè', price: 3.50 },
      { id: 'latte-bianco', name: 'Latte Bianco', price: 1.00 },
      { id: 'latte-macchiato', name: 'Latte Macchiato', price: 1.50 },
      { id: 'americano', name: 'Americano', price: 1.20 },
      { id: 'caffe-leccese', name: 'Caffè Leccese', price: 1.80 },
      { id: 'spremuta', name: 'Spremuta', price: 3.00 },
      { id: 'frullato', name: 'Frullato', price: 4.00 },
    ],
  },
  {
    id: 'dolci',
    name: 'Dolci',
    icon: '🍰',
    items: [
      { id: 'brioches', name: 'Brioches', price: 1.50 },
      { id: 'brioches-mignon', name: 'Brioches Mignon', price: 1.00 },
      { id: 'biscotti', name: 'Biscotti', price: 1.50 },
      { id: 'baci-di-dama', name: 'Baci di Dama', price: 0.80 },
      { id: 'loacker', name: 'Loacker', price: 0.30 },
      { id: 'torta', name: 'Torta', price: 1.50 },
      { id: 'macedonia', name: 'Macedonia', price: 3.50 },
    ],
  },
  {
    id: 'salato',
    name: 'Salato',
    icon: '🥪',
    items: [
      { id: 'panino-farcito', name: 'Panino Farcito', price: 3.50 },
      { id: 'panino-mignon', name: 'Panino Mignon', price: 1.50 },
      { id: 'pizzetta', name: 'Pizzetta', price: 2.00 },
      { id: 'tost', name: 'Tost', price: 3.00 },
      { id: 'piadina', name: 'Piadina', price: 4.00 },
    ],
  },
  {
    id: 'birre',
    name: 'Birre',
    icon: '🍺',
    items: [
      { id: 'heineken', name: 'Heineken', price: 2.50 },
      { id: 'moretti-piccola', name: 'Moretti Piccola', price: 2.50 },
      { id: 'moretti-grande', name: 'Moretti Grande', price: 3.00 },
      { id: 'becks-piccola', name: 'Becks Piccola', price: 2.50 },
      { id: 'becks-grande', name: 'Becks Grande', price: 3.00 },
      { id: 'peroni', name: 'Peroni', price: 3.00 },
      { id: 'corona', name: 'Corona', price: 3.00 },
      { id: 'ichnusa', name: 'Ichnusa', price: 3.00 },
      { id: 'ceres', name: 'Ceres', price: 3.50 },
      { id: 'tennets', name: "Tennet's", price: 3.50 },
    ],
  },
  {
    id: 'bevande',
    name: 'Bevande',
    icon: '🥤',
    items: [
      { id: 'coca-cola', name: 'Coca Cola', price: 2.50 },
      { id: 'fanta', name: 'Fanta', price: 2.50 },
      { id: 'sprite', name: 'Sprite', price: 2.50 },
      { id: 'te-pesca', name: 'Tè Pesca', price: 2.50 },
      { id: 'te-limone', name: 'Tè Limone', price: 2.50 },
      { id: 'lemon-soda', name: 'Lemon Soda', price: 3.00 },
      { id: 'schweppes', name: 'Schweppes', price: 2.50 },
      { id: 'succo-frutta', name: 'Succo di Frutta', price: 2.50 },
      { id: 'acqua', name: 'Acqua', price: 1.00 },
      { id: 'red-bull', name: 'Red Bull', price: 3.50 },
      { id: 'crodino', name: 'Crodino', price: 2.50 },
      { id: 'calice-vino', name: 'Calice di Vino', price: 3.00 },
      { id: 'amaro', name: 'Amaro', price: 3.00 },
      { id: 'spritz', name: 'Spritz', price: 5.00 },
      { id: 'cocktail', name: 'Cocktail', price: 6.00 },
      { id: 'latte-menta', name: 'Latte Menta', price: 1.50 },
    ],
  },
];

export const featuredItems: MenuItem[] = menuCategories
  .flatMap((cat) => cat.items)
  .filter((item) => item.isFeatured);
