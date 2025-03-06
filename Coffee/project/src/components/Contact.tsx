import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-stone-800">Get In Touch</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-stone-800">Visit Us</h3>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-6">
                <MapPin className="h-6 w-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-stone-800 mb-1">Address</h4>
                  <p className="text-stone-600">123 Coffee Street, Brewville, CA 94123</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Phone className="h-6 w-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-stone-800 mb-1">Phone</h4>
                  <p className="text-stone-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Mail className="h-6 w-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-stone-800 mb-1">Email</h4>
                  <p className="text-stone-600">hello@brewhaven.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-stone-800 mb-1">Hours</h4>
                  <p className="text-stone-600">Monday - Friday: 7am - 8pm</p>
                  <p className="text-stone-600">Saturday - Sunday: 8am - 9pm</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 h-64 rounded-lg overflow-hidden shadow-md">
              {/* This would be a real map in a production environment */}
              <div className="w-full h-full bg-stone-200 flex items-center justify-center">
                <p className="text-stone-600">Interactive Map Would Be Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;