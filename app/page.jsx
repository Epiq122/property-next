import InfoBoxes from '../components/InfoBoxes';
import Hero from '../components/Hero';
import HomeProperties from '@/components/HomeProperties';
import connectDB from '../config/database';

const HomePage = async () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};
export default HomePage;
