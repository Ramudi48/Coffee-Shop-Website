import React from "react";
import img1 from "../assets/img/menu1.jpg";
import img2 from "../assets/img/menu2.jpg";
import img3 from "../assets/img/menu3.jpg";
import img4 from "../assets/img/menu4.jpg";
import img5 from "../assets/img/menu5.jpg";
import img6 from "../assets/img/menu6.jpg";
import MenuCard from "../layouts/MenuCard";


function MenuPage() {
  const menuItems = [
    { name: 'Espresso', price: '$3.50', description: 'Rich and bold classic espresso' },
    { name: 'Cappuccino', price: '$4.25', description: 'Espresso with steamed milk and foam' },
    { name: 'Latte', price: '$4.50', description: 'Espresso with a lot of steamed milk and light foam' },
    { name: 'Mocha', price: '$5.00', description: 'Espresso with chocolate and steamed milk' },
    { name: 'Cold Brew', price: '$4.75', description: '24-hour steeped coffee served over ice' },
    { name: 'Pastries', price: '$3.25+', description: 'Freshly baked pastries and desserts' }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <div key={item.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
            <p className="text-amber-700 font-bold mt-1">{item.price}</p>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;