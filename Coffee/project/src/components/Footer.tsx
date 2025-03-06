import React from 'react';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-amber-50 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Coffee className="h-8 w-8 text-amber-400" />
              <span className="ml-2 text-xl font-bold">Brew Haven</span>
            </div>
            <p className="text-amber-200 mb-4">
              Crafting exceptional coffee experiences since 2010. Our mission is to provide a cozy haven for coffee lovers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-400 hover:text-white transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200 hover:text-amber-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-amber-200 hover:text-amber-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#menu" className="text-amber-200 hover:text-amber-400 transition-colors duration-300">Menu</a></li>
              <li><a href="#gallery" className="text-amber-200 hover:text-amber-400 transition-colors duration-300">Gallery</a></li>
              <li><a href="#contact" className="text-amber-200 hover:text-amber-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Hours</h3>
            <ul className="space-y-2">
              <li className="text-amber-200">Monday - Friday: 7am - 8pm</li>
              <li className="text-amber-200">Saturday - Sunday: 8am - 9pm</li>
              <li className="text-amber-200">Holiday Hours May Vary</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-amber-200 mb-4">Subscribe to get special offers, free giveaways, and updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-stone-800"
              />
              <button
                type="submit"
                className="bg-amber-600 text-white px-4 py-2 rounded-r-md hover:bg-amber-700 transition duration-300 ease-in-out"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-stone-700 pt-6 text-center">
          <p className="text-amber-200">&copy; {new Date().getFullYear()} Brew Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;