import React, { useState } from 'react';
import { Coffee, Menu as MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-stone-900 text-amber-50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <Coffee className="h-8 w-8 text-amber-400" />
                <span className="ml-2 text-xl font-bold">Brew Haven</span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-amber-400 hover:text-white">Home</a>
                <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-amber-50 hover:text-amber-400">About</a>
                <a href="#menu" className="px-3 py-2 rounded-md text-sm font-medium text-amber-50 hover:text-amber-400">Menu</a>
                <a href="#gallery" className="px-3 py-2 rounded-md text-sm font-medium text-amber-50 hover:text-amber-400">Gallery</a>
                <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium text-amber-50 hover:text-amber-400">Contact</a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-50 hover:text-white hover:bg-stone-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-stone-800">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-amber-400 hover:text-white">Home</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-amber-50 hover:text-amber-400">About</a>
            <a href="#menu" className="block px-3 py-2 rounded-md text-base font-medium text-amber-50 hover:text-amber-400">Menu</a>
            <a href="#gallery" className="block px-3 py-2 rounded-md text-base font-medium text-amber-50 hover:text-amber-400">Gallery</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-amber-50 hover:text-amber-400">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;