import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Roomtype from './components/Roomtype';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [seletctPage, setSelectPage] = useState('home');

  const displaySelectedPage = () => {
    switch (seletctPage) {
      case 'about us':
        return <AboutUs />;
      case 'room':
        return <Roomtype />;
      case 'booking':
        return <Booking />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setPageOnButton={setSelectPage} />;
    }
  };
  return (
    <>
      <Navbar setSelectPageOnNav={setSelectPage} activePage={seletctPage} />
      {displaySelectedPage()}
      <Footer setSelectPageFooter={setSelectPage} />
    </>
  );
}

export default App;
