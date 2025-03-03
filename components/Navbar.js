import React from 'react';

function Navbar({ activeNavItem, setActiveNavItem }) {
  return (
    <nav className="bg-amber-900 text-amber-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Brew Haven</div>
        <ul className="flex space-x-6">
          {['home', 'menu', 'about', 'location', 'contact'].map((item) => (
            <li 
              key={item}
              className={`cursor-pointer hover:text-amber-200 capitalize ${
                activeNavItem === item ? 'border-b-2 border-amber-200' : ''
              }`}
              onClick={() => setActiveNavItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;