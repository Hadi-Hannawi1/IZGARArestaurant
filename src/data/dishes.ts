export interface Dish {
  id: number;
  nameFr: string;
  nameEn: string;
  descriptionFr: string;
  descriptionEn: string;
  price: string;
  category: string;
  isSignature?: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  imageQuery: string;
}

export const dishes: Dish[] = [
  {
    id: 1,
    nameFr: 'Kebab Chef',
    nameEn: "Chef's Kebab",
    descriptionFr: 'Notre kebab signature avec feta, carottes râpées et grenades',
    descriptionEn: 'Our signature kebab with feta, grated carrots, and pomegranates',
    price: '€9.50',
    category: 'Kebabs',
    isSignature: true,
    imageQuery: 'turkish kebab feta pomegranate plate overhead',
  },
  {
    id: 2,
    nameFr: 'Kebab Classique',
    nameEn: 'Classic Kebab',
    descriptionFr: 'Kebab traditionnel avec sauce maison, salade, tomate, oignon',
    descriptionEn: 'Traditional kebab with homemade sauce, salad, tomato, onion',
    price: '€8.50',
    category: 'Kebabs',
    imageQuery: 'classic turkish doner kebab pita wrap',
  },
  {
    id: 3,
    nameFr: 'Adana Kebab',
    nameEn: 'Adana Kebab',
    descriptionFr: 'Viande hachée épicée grillée, pain lavash, légumes grillés',
    descriptionEn: 'Spiced minced meat grilled, lavash bread, grilled vegetables',
    price: '€11.00',
    category: 'Grillades',
    isSpicy: true,
    imageQuery: 'adana kebab skewer grilled vegetables turkish',
  },
  {
    id: 4,
    nameFr: 'Lahmacun',
    nameEn: 'Lahmacun',
    descriptionFr: 'Pizza turque fine avec viande hachée, tomates, persil',
    descriptionEn: 'Thin Turkish pizza with minced meat, tomatoes, parsley',
    price: '€7.50',
    category: 'Spécialités',
    imageQuery: 'lahmacun turkish pizza',
  },
  {
    id: 5,
    nameFr: 'Dürüm Poulet',
    nameEn: 'Chicken Dürüm',
    descriptionFr: 'Wrap de poulet mariné avec légumes frais et sauce au yaourt',
    descriptionEn: 'Marinated chicken wrap with fresh vegetables and yogurt sauce',
    price: '€8.00',
    category: 'Kebabs',
    imageQuery: 'turkish durum wrap chicken',
  },
  {
    id: 6,
    nameFr: 'Baklava Maison',
    nameEn: 'Homemade Baklava',
    descriptionFr: 'Pâtisserie turque aux noix et miel, faite maison',
    descriptionEn: 'Homemade Turkish pastry with walnuts and honey',
    price: '€5.00',
    category: 'Desserts',
    isVegetarian: true,
    imageQuery: 'turkish baklava honey pistachio close up',
  },
];

export const getUnsplashImage = (query: string, width: number = 800, height: number = 600): string => {
  return `https://source.unsplash.com/${width}x${height}/?${encodeURIComponent(query)}`;
};
