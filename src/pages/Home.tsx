import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import KebabShowcase from '../components/KebabShowcase';
import SignatureDishes from '../components/SignatureDishes';
import FamilyStory from '../components/FamilyStory';
import Ingredients from '../components/Ingredients';
import Location from '../components/Location';
import Instagram from '../components/Instagram';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Welcome />
      <KebabShowcase />
      <SignatureDishes />
      <FamilyStory />
      <Ingredients />
      <Location />
      <Instagram />
    </div>
  );
};

export default Home;
