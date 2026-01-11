import { useLanguage } from '../contexts/LanguageContext';

const Story = () => {
  const { language } = useLanguage();

  return (
    <div className="story-page bg-cream min-h-screen pt-32 pb-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-charcoal mb-6">
            {language === 'fr' ? 'Notre Histoire' : 'Our Story'}
          </h1>
          <p className="text-xl font-body text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            {language === 'fr'
              ? "Trois générations de passion culinaire turque au cœur de Paris"
              : 'Three generations of Turkish culinary passion in the heart of Paris'}
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-16">
          {/* 1990 */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <img
                src="https://source.unsplash.com/800x600/?vintage,restaurant,1990s,retro"
                alt="1990"
                className="w-full rounded-2xl shadow-medium"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2 space-y-4">
              <div className="text-5xl font-display font-bold text-primary">1990</div>
              <h3 className="text-3xl font-display font-bold text-charcoal">
                {language === 'fr' ? 'Les Débuts' : 'The Beginning'}
              </h3>
              <p className="text-lg font-body text-charcoal/80 leading-relaxed">
                {language === 'fr'
                  ? "Nos pères ont ouvert les portes de leur premier restaurant sur la Rue Mouffetard. Avec des recettes familiales transmises de génération en génération, ils ont apporté l'authenticité de la cuisine turque à Paris."
                  : 'Our fathers opened the doors of their first restaurant on Rue Mouffetard. With family recipes passed down through generations, they brought the authenticity of Turkish cuisine to Paris.'}
              </p>
            </div>
          </div>

          {/* 2000 */}
          <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
            <div className="lg:w-1/2">
              <img
                src="https://source.unsplash.com/800x600/?restaurant,kitchen,chef,cooking"
                alt="2000"
                className="w-full rounded-2xl shadow-medium"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2 space-y-4">
              <div className="text-5xl font-display font-bold text-primary">2000</div>
              <h3 className="text-3xl font-display font-bold text-charcoal">
                {language === 'fr' ? "L'Expansion" : 'The Expansion'}
              </h3>
              <p className="text-lg font-body text-charcoal/80 leading-relaxed">
                {language === 'fr'
                  ? "Le succès grandit. Nous agrandissons notre restaurant et installons notre signature : le grill horizontal traditionnel. Cette technique ancestrale devient notre marque de fabrique."
                  : 'Success grows. We expanded our restaurant and installed our signature feature: the traditional horizontal grill. This ancestral technique became our trademark.'}
              </p>
            </div>
          </div>

          {/* 2024 */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <img
                src="https://source.unsplash.com/800x600/?modern,restaurant,interior,contemporary"
                alt="2024"
                className="w-full rounded-2xl shadow-medium"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2 space-y-4">
              <div className="text-5xl font-display font-bold text-primary">2024</div>
              <h3 className="text-3xl font-display font-bold text-charcoal">
                {language === 'fr' ? "Aujourd'hui" : 'Today'}
              </h3>
              <p className="text-lg font-body text-charcoal/80 leading-relaxed">
                {language === 'fr'
                  ? "Aujourd'hui, nous sommes fiers de perpétuer les traditions culinaires de nos pères. Chaque plat est préparé avec les mêmes recettes familiales, le même amour du métier, et le même respect des ingrédients."
                  : "Today, we are proud to carry on our fathers' culinary traditions. Every dish is prepared with the same family recipes, the same love of the craft, and the same respect for ingredients."}
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-display font-bold text-charcoal text-center mb-12">
            {language === 'fr' ? 'Nos Valeurs' : 'Our Values'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: language === 'fr' ? 'Authenticité' : 'Authenticity', icon: '🔥' },
              { title: language === 'fr' ? 'Qualité' : 'Quality', icon: '⭐' },
              { title: language === 'fr' ? 'Passion' : 'Passion', icon: '❤️' },
              { title: language === 'fr' ? 'Convivialité' : 'Conviviality', icon: '🤝' },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-light text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-display font-bold text-charcoal">
                  {value.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
