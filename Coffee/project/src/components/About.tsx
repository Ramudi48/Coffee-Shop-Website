import React from 'react';
import { Coffee, Clock, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-stone-700 mb-6">
              Founded in 2010, Brew Haven began as a small passion project by two coffee enthusiasts determined to bring exceptional coffee experiences to our community.
            </p>
            <p className="text-lg text-stone-700 mb-6">
              We source our beans directly from sustainable farms around the world, ensuring fair trade practices and the highest quality in every cup. Our master roasters carefully craft each batch to bring out the unique flavor profiles that make our coffee special.
            </p>
            <p className="text-lg text-stone-700">
              More than just a coffee shop, we've created a haven where people can connect, work, and relax in a warm, inviting atmosphere. We're proud to be a cornerstone of our community for over a decade.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Coffee beans being roasted" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-500 rounded-lg p-4 shadow-lg">
              <p className="text-white font-bold text-xl">Est. 2010</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="bg-amber-50 p-6 rounded-lg shadow-md text-center">
            <div className="inline-block p-4 bg-amber-500 rounded-full mb-4">
              <Coffee className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Beans</h3>
            <p className="text-stone-600">Ethically sourced from the world's finest coffee regions</p>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-lg shadow-md text-center">
            <div className="inline-block p-4 bg-amber-500 rounded-full mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
            <p className="text-stone-600">Recognized for excellence in quality and service</p>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-lg shadow-md text-center">
            <div className="inline-block p-4 bg-amber-500 rounded-full mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
            <p className="text-stone-600">Creating spaces for connection and collaboration</p>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-lg shadow-md text-center">
            <div className="inline-block p-4 bg-amber-500 rounded-full mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fresh Daily</h3>
            <p className="text-stone-600">Freshly roasted and brewed throughout the day</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;