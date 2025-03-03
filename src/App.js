import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import AboutPage from './components/AboutPage';
import LocationPage from './components/LocationPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  const [activeNavItem, setActiveNavItem] = useState('home');

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      <Navbar activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem} />
      
      <main className="flex-grow">
        {activeNavItem === 'home' && <HomePage setActiveNavItem={setActiveNavItem} />}
        {activeNavItem === 'menu' && <MenuPage />}
        {activeNavItem === 'about' && <AboutPage />}
        {activeNavItem === 'location' && <LocationPage />}
        {activeNavItem === 'contact' && <ContactPage />}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
