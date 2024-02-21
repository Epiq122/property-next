import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental Property',
  description: 'Find The Perfect Rental Property',
  keywords: 'rental, property, find, perfect',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};
export default MainLayout;
