import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.menu': 'Menu',
    'nav.story': 'Notre Histoire',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Contact',
    'nav.reserve': 'Réserver',
    
    // Hero Section
    'hero.title': 'IZGARA',
    'hero.tagline': 'GRILLADES TURQUES AUTHENTIQUES',
    'hero.subtitle': 'Rue Mouffetard, Paris · Depuis 1990',
    'hero.cta.reserve': 'Réservez Votre Table',
    'hero.cta.menu': 'Voir Le Menu',
    
    // Welcome Section
    'welcome.overline': 'BIENVENUE',
    'welcome.headline': 'Bienvenue Chez Izgara',
    'welcome.subheadline': 'Tradition Turque, Saveurs Authentiques',
    'welcome.paragraph1': "Depuis les années 90, notre famille perpétue les traditions culinaires turques au cœur de Paris. Izgara, qui signifie 'grillades' en turc, est bien plus qu'un restaurant—c'est une histoire de passion transmise de père en fils.",
    'welcome.paragraph2': "Nos recettes familiales, nos ingrédients faits maison, et notre grill horizontal traditionnel font toute la différence. Chaque plat est préparé avec soin devant vos yeux dans notre cuisine ouverte.",
    'welcome.paragraph3': "Venez découvrir l'authenticité de la cuisine turque sur la célèbre Rue Mouffetard.",
    'welcome.cta': 'Découvrez Notre Histoire →',
    
    // Kebab Showcase Section
    'kebab.headline': 'Le Grill Horizontal Traditionnel',
    'kebab.subheadline': 'Une Cuisson Parfaite, Une Tradition Ancestrale',
    'kebab.benefit1.title': 'Cuisson Uniforme',
    'kebab.benefit1.desc': 'Chaque morceau grillé à la perfection',
    'kebab.benefit2.title': 'Technique Authentique',
    'kebab.benefit2.desc': 'Méthode traditionnelle turque',
    'kebab.benefit3.title': 'Théâtre Culinaire',
    'kebab.benefit3.desc': 'Préparé devant vos yeux',
    
    // Dishes Section
    'dishes.headline': 'Nos Plats Signatures',
    'dishes.subheadline': 'Des saveurs authentiques dans chaque assiette',
    'dishes.signature': '⭐ SIGNATURE',
    
    // Family Story Section
    'story.headline': 'Une Histoire de Famille',
    'story.year1': '1990',
    'story.caption1': 'Nos pères ouvrent leur premier restaurant',
    'story.year2': '2024',
    'story.caption2': 'Nous perpétuons la tradition',
    'story.body': "Trois générations de passion culinaire turque. Les recettes transmises de père en fils, les techniques ancestrales préservées, et l'amour du métier partagé.",
    'story.cta': 'Découvrez Notre Histoire Complète →',
    
    // Ingredients Section
    'ingredients.headline': 'Ingrédients Faits Maison',
    'ingredients.subheadline': 'La Différence Est Dans Les Détails',
    'ingredients.meat.title': 'Viande Marinée',
    'ingredients.meat.desc': 'Marinée 24h dans notre recette familiale secrète',
    'ingredients.sauces.title': 'Sauces Maison',
    'ingredients.sauces.desc': 'Sauces au yaourt, ail et épices, préparées chaque matin',
    'ingredients.veggies.title': 'Légumes Frais',
    'ingredients.veggies.desc': 'Tomates, concombres, oignons livrés quotidiennement',
    'ingredients.bread.title': 'Pain Artisanal',
    'ingredients.bread.desc': 'Pain pita et lavash fait maison, cuit sur place',
    
    // Location Section
    'location.headline': 'Venez Nous Rendre Visite',
    'location.address': '34 Rue Mouffetard, 75005 Paris, France',
    'location.hours': '7 jours / 7',
    'location.time': '11:00 - 01:00',
    'location.cta': 'Obtenir un Itinéraire',
    
    // Instagram Section
    'instagram.headline': 'Suivez-Nous Sur Instagram',
    'instagram.handle': '@izgara_restaurant',
    'instagram.cta': 'Voir Plus Sur Instagram',
    
    // Reservation Section
    'reservation.headline': 'Réservez Votre Table',
    'reservation.subheadline': 'Garantissez votre place dans notre restaurant',
    'reservation.name': 'Nom',
    'reservation.name.placeholder': 'Votre nom complet',
    'reservation.email': 'Email',
    'reservation.email.placeholder': 'votre@email.com',
    'reservation.phone': 'Téléphone',
    'reservation.phone.placeholder': '+33 X XX XX XX XX',
    'reservation.date': 'Date',
    'reservation.time': 'Heure',
    'reservation.party': 'Nombre de Personnes',
    'reservation.requests': 'Demandes Spéciales (optionnel)',
    'reservation.requests.placeholder': 'Allergies, occasion spéciale, etc.',
    'reservation.submit': 'Réserver Maintenant',
    'reservation.success': 'Réservation reçue! Nous vous confirmerons par email dans les 24 heures.',
    
    // Footer
    'footer.tagline': 'Grillades Turques Authentiques',
    'footer.nav': 'NAVIGATION',
    'footer.contact': 'CONTACT',
    'footer.social': 'SUIVEZ-NOUS',
    'footer.newsletter': 'NEWSLETTER',
    'footer.newsletter.placeholder': 'Votre email',
    'footer.copyright': '© 2024 Izgara Paris. Tous droits réservés.',
    'footer.legal': 'Mentions Légales',
    'footer.privacy': 'Politique de Confidentialité',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.story': 'Our Story',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.reserve': 'Reserve',
    
    // Hero Section
    'hero.title': 'IZGARA',
    'hero.tagline': 'AUTHENTIC TURKISH GRILLS',
    'hero.subtitle': 'Rue Mouffetard, Paris · Since 1990',
    'hero.cta.reserve': 'Reserve Your Table',
    'hero.cta.menu': 'View Menu',
    
    // Welcome Section
    'welcome.overline': 'WELCOME',
    'welcome.headline': 'Welcome to Izgara',
    'welcome.subheadline': 'Turkish Tradition, Authentic Flavors',
    'welcome.paragraph1': "Since the 1990s, our family has been carrying on Turkish culinary traditions in the heart of Paris. Izgara, which means 'grills' in Turkish, is more than a restaurant—it's a story of passion passed down from father to son.",
    'welcome.paragraph2': "Our family recipes, homemade ingredients, and traditional horizontal grill make all the difference. Every dish is carefully prepared before your eyes in our open kitchen.",
    'welcome.paragraph3': "Come experience authentic Turkish cuisine on the famous Rue Mouffetard.",
    'welcome.cta': 'Discover Our Story →',
    
    // Kebab Showcase Section
    'kebab.headline': 'Traditional Horizontal Grill',
    'kebab.subheadline': 'Perfect Cooking, An Ancestral Tradition',
    'kebab.benefit1.title': 'Even Cooking',
    'kebab.benefit1.desc': 'Every piece grilled to perfection',
    'kebab.benefit2.title': 'Authentic Technique',
    'kebab.benefit2.desc': 'Traditional Turkish method',
    'kebab.benefit3.title': 'Culinary Theater',
    'kebab.benefit3.desc': 'Prepared before your eyes',
    
    // Dishes Section
    'dishes.headline': 'Our Signature Dishes',
    'dishes.subheadline': 'Authentic flavors in every plate',
    'dishes.signature': '⭐ SIGNATURE',
    
    // Family Story Section
    'story.headline': 'A Family Story',
    'story.year1': '1990',
    'story.caption1': 'Our fathers opened their first restaurant',
    'story.year2': '2024',
    'story.caption2': 'We carry on the tradition',
    'story.body': "Three generations of Turkish culinary passion. Recipes passed from father to son, ancestral techniques preserved, and a shared love of the craft.",
    'story.cta': 'Discover Our Full Story →',
    
    // Ingredients Section
    'ingredients.headline': 'Homemade Ingredients',
    'ingredients.subheadline': 'The Difference Is In The Details',
    'ingredients.meat.title': 'Marinated Meat',
    'ingredients.meat.desc': 'Marinated 24 hours in our secret family recipe',
    'ingredients.sauces.title': 'Homemade Sauces',
    'ingredients.sauces.desc': 'Yogurt, garlic, and spice sauces, prepared fresh every morning',
    'ingredients.veggies.title': 'Fresh Vegetables',
    'ingredients.veggies.desc': 'Tomatoes, cucumbers, onions delivered daily',
    'ingredients.bread.title': 'Artisan Bread',
    'ingredients.bread.desc': 'Homemade pita and lavash bread, baked on-site',
    
    // Location Section
    'location.headline': 'Come Visit Us',
    'location.address': '34 Rue Mouffetard, 75005 Paris, France',
    'location.hours': '7 days a week',
    'location.time': '11:00 - 01:00',
    'location.cta': 'Get Directions',
    
    // Instagram Section
    'instagram.headline': 'Follow Us On Instagram',
    'instagram.handle': '@izgara_restaurant',
    'instagram.cta': 'See More On Instagram',
    
    // Reservation Section
    'reservation.headline': 'Reserve Your Table',
    'reservation.subheadline': 'Guarantee your spot at our restaurant',
    'reservation.name': 'Name',
    'reservation.name.placeholder': 'Your full name',
    'reservation.email': 'Email',
    'reservation.email.placeholder': 'your@email.com',
    'reservation.phone': 'Phone',
    'reservation.phone.placeholder': '+33 X XX XX XX XX',
    'reservation.date': 'Date',
    'reservation.time': 'Time',
    'reservation.party': 'Party Size',
    'reservation.requests': 'Special Requests (optional)',
    'reservation.requests.placeholder': 'Allergies, special occasion, etc.',
    'reservation.submit': 'Reserve Now',
    'reservation.success': 'Reservation received! We\'ll confirm by email within 24 hours.',
    
    // Footer
    'footer.tagline': 'Authentic Turkish Grills',
    'footer.nav': 'NAVIGATION',
    'footer.contact': 'CONTACT',
    'footer.social': 'FOLLOW US',
    'footer.newsletter': 'NEWSLETTER',
    'footer.newsletter.placeholder': 'Your email',
    'footer.copyright': '© 2024 Izgara Paris. All rights reserved.',
    'footer.legal': 'Legal Notice',
    'footer.privacy': 'Privacy Policy',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
