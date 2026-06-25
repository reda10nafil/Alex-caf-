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
      { id: 'caffe', name: 'Caffè', price: 1.20, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80' },
      { id: 'ristretto', name: 'Ristretto', price: 1.20, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80' },
      { id: 'lungo', name: 'Lungo', price: 1.20, image: 'https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&w=800&q=80' },
      { id: 'deck', name: 'Deck', price: 1.30, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80' },
      { id: 'macchiato', name: 'Macchiato', price: 1.20, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80' },
      { id: 'corretto', name: 'Corretto', price: 1.60, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80' },
      { id: 'ginseng-piccolo', name: 'Ginseng Piccolo', price: 1.40, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80' },
      { id: 'ginseng-grande', name: 'Ginseng Grande', price: 1.60, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80' },
      { id: 'orzo-piccolo', name: 'Orzo Piccolo', price: 1.40, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80' },
      { id: 'orzo-grande', name: 'Orzo Grande', price: 1.60, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80' },
      { id: 'cappuccino', name: 'Cappuccino', price: 1.50, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80', tags: ['best-seller'], isFeatured: true },
      { id: 'cappuccino-soia', name: 'Cappuccino Soia', price: 1.60, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80' },
      { id: 'marocchino', name: 'Marocchino', price: 1.80, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80' },
      { id: 'marocchino-nutella', name: 'Marocchino con Nutella', price: 2.00, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80' },
      { id: 'cioccolata-calda', name: 'Cioccolata Calda', price: 2.50, image: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=800&q=80' },
      { id: 'te-caldo', name: 'Tè Caldo', price: 2.00, image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80' },
      { id: 'shakerato', name: 'Shakerato', price: 2.50, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80' },
      { id: 'vin-brule', name: 'Vin Brulè', price: 3.50, image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80' },
      { id: 'latte-bianco', name: 'Latte Bianco', price: 1.00, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80' },
      { id: 'latte-macchiato', name: 'Latte Macchiato', price: 1.50, image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80' },
      { id: 'americano', name: 'Americano', price: 1.20, image: 'https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&w=800&q=80' },
      { id: 'caffe-leccese', name: 'Caffè Leccese', price: 1.80, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80' },
      { id: 'spremuta', name: 'Spremuta', price: 3.00, image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80' },
      { id: 'frullato', name: 'Frullato', price: 4.00, image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80' },
    ],
  },
  {
    id: 'dolci',
    name: 'Dolci',
    icon: '🍰',
    items: [
      { id: 'brioches', name: 'Brioches', price: 1.50, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80' },
      { id: 'brioches-mignon', name: 'Brioches Mignon', price: 1.00, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80' },
      { id: 'biscotti', name: 'Biscotti', price: 1.50, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80' },
      { id: 'baci-di-dama', name: 'Baci di Dama', price: 0.80, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80' },
      { id: 'loacker', name: 'Loacker', price: 0.30, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80' },
      { id: 'torta', name: 'Torta', price: 1.50, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80' },
      { id: 'macedonia', name: 'Macedonia', price: 3.50, image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=80' },
    ],
  },
  {
    id: 'salato',
    name: 'Salato',
    icon: '🥪',
    items: [
      { id: 'panino-farcito', name: 'Panino Farcito', price: 3.50, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80' },
      { id: 'panino-mignon', name: 'Panino Mignon', price: 1.50, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80' },
      { id: 'pizzetta', name: 'Pizzetta', price: 2.00, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80' },
      { id: 'tost', name: 'Tost', price: 3.00, image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800&q=80' },
      { id: 'piadina', name: 'Piadina', price: 4.00, image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=800&q=80' },
    ],
  },
  {
    id: 'birre',
    name: 'Birre',
    icon: '🍺',
    items: [
      { id: 'heineken', name: 'Heineken', price: 2.50, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80' },
      { id: 'moretti-piccola', name: 'Moretti Piccola', price: 2.50, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80' },
      { id: 'moretti-grande', name: 'Moretti Grande', price: 3.00, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80' },
      { id: 'becks-piccola', name: 'Becks Piccola', price: 2.50, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80' },
      { id: 'becks-grande', name: 'Becks Grande', price: 3.00, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80' },
      { id: 'peroni', name: 'Peroni', price: 3.00, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80' },
      { id: 'corona', name: 'Corona', price: 3.00, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80' },
      { id: 'ichnusa', name: 'Ichnusa', price: 3.00, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80' },
      { id: 'ceres', name: 'Ceres', price: 3.50, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80' },
      { id: 'tennets', name: "Tennet's", price: 3.50, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80' },
    ],
  },
      {
    id: 'bevande',
    name: 'Bevande',
    icon: '🥤',
    items: [
      {
        id: 'coca-cola',
        name: 'Coca Cola',
        price: 2.50,
        image: 'https://images.unsplash.com/photo-z8PEoNIlGlg?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'fanta',
        name: 'Fanta',
        price: 2.50,
        image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'sprite',
        name: 'Sprite',
        price: 2.50,
        image: 'https://images.unsplash.com/photo-z8PEoNIlGlg?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'te-pesca',
        name: 'Tè Pesca',
        price: 2.50,
        image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'te-limone',
        name: 'Tè Limone',
        price: 2.50,
        image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'lemon-soda',
        name: 'Lemon Soda',
        price: 3.00,
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'schweppes',
        name: 'Schweppes',
        price: 2.50,
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'succo-frutta',
        name: 'Succo di Frutta',
        price: 2.50,
        image: 'https://images.unsplash.com/photo-i8JfQDc4Ha8?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'acqua',
        name: 'Acqua',
        price: 1.00,
        image: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'red-bull',
        name: 'Red Bull',
        price: 3.50,
        image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'crodino',
        name: 'Crodino',
        price: 2.50,
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'calice-vino',
        name: 'Calice di Vino',
        price: 3.00,
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'amaro',
        name: 'Amaro',
        price: 3.00,
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'spritz',
        name: 'Spritz',
        price: 5.00,
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'cocktail',
        name: 'Cocktail',
        price: 6.00,
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'latte-menta',
        name: 'Latte Menta',
        price: 1.50,
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6cf7?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
];

export const featuredItems: MenuItem[] = menuCategories
  .flatMap((cat) => cat.items)
  .filter((item) => item.isFeatured);
