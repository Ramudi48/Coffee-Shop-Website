import React from 'react';

function HomePage({ setActiveNavItem }) {
  return (
    <div className="relative h-96 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Brew Haven</h1>
        <p className="text-xl mb-8">Artisanal coffee in a cozy atmosphere</p>
        <button 
          className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 w-40"
          onClick={() => setActiveNavItem('menu')}
        >
          View Menu
        </button>
      </div>
    </div>
  );
}

export default HomePage;