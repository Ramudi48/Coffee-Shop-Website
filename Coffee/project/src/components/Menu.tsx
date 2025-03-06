import React, { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');
  
  const categories = [
    { id: 'coffee', name: 'Coffee' },
    { id: 'espresso', name: 'Espresso' },
    { id: 'specialty', name: 'Specialty' },
    { id: 'pastries', name: 'Pastries' }
  ];
  
  const menuItems = {
    coffee: [
      { name: 'House Blend', description: 'Our signature medium roast with notes of chocolate and nuts', price: '$3.50' },
      { name: 'Dark Roast', description: 'Bold and robust with a smoky finish', price: '$3.75' },
      { name: 'Single Origin Ethiopian', description: 'Bright and fruity with floral notes', price: '$4.25' },
      { name: 'Decaf Colombian', description: 'Smooth and mild with caramel undertones', price: '$3.75' }
    ],
    espresso: [
      { name: 'Espresso Shot', description: 'Concentrated coffee served in a small cup', price: '$2.75' },
      { name: 'Americano', description: 'Espresso diluted with hot water', price: '$3.25' },
      { name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and foam', price: '$4.50' },
      { name: 'Latte', description: 'Espresso with steamed milk and a light layer of foam', price: '$4.75' },
      { name: 'Mocha', description: 'Espresso with chocolate and steamed milk', price: '$5.25' }
    ],
    specialty: [
      { name: 'Caramel Macchiato', description: 'Vanilla-infused milk marked with espresso and caramel drizzle', price: '$5.50' },
      { name: 'Honey Lavender Latte', description: 'Espresso with steamed milk, honey, and lavender syrup', price: '$5.75' },
      { name: 'Maple Pecan Cold Brew', description: 'Smooth cold brew infused with maple and pecan flavors', price: '$5.25' },
      { name: 'Cinnamon Spice Chai', description: 'Black tea with cinnamon, cardamom, and steamed milk', price: '$4.75' }
    ],
    pastries: [
      { name: 'Almond Croissant', description: 'Buttery croissant filled with almond cream', price: '$4.25' },
      { name: 'Chocolate Chip Cookie', description: 'Freshly baked with dark chocolate chunks', price: '$2.75' },
      { name: 'Blueberry Muffin', description: 'Moist muffin loaded with fresh blueberries', price: '$3.50' },
      { name: 'Cinnamon Roll', description: 'Warm roll with cinnamon swirl and cream cheese frosting', price: '$4.50' }
    ]
  };

  return (
    <section id="menu" className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Discover our carefully crafted selection of coffees and treats, made with love and the finest ingredients
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 mx-2 mb-4 rounded-full font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-stone-700 hover:bg-amber-100'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex justify-between">
              <div>
                <h3 className="text-xl font-semibold text-stone-800">{item.name}</h3>
                <p className="text-stone-600 mt-1">{item.description}</p>
              </div>
              <div className="ml-4">
                <span className="text-amber-600 font-bold text-lg">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;