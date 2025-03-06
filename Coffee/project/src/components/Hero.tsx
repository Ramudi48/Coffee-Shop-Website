import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}
      ></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Brew Haven</h1>
        <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-2xl">Experience the perfect blend of artisanal coffee in a cozy atmosphere</p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#menu" 
            className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition duration-300 ease-in-out"
          >
            View Menu
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-amber-800 transition duration-300 ease-in-out"
          >
            Visit Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;