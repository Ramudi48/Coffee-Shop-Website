import React from 'react';

function LocationPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-amber-900">Find Us</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-amber-800">Hours</h3>
          <ul className="space-y-2 text-gray-700">
            <li><span className="font-medium">Monday - Friday:</span> 6:30 AM - 8:00 PM</li>
            <li><span className="font-medium">Saturday:</span> 7:00 AM - 9:00 PM</li>
            <li><span className="font-medium">Sunday:</span> 7:00 AM - 6:00 PM</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-amber-800">Address</h3>
          <p className="text-gray-700">
            123 Coffee Lane<br />
            City Center, State 12345
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
          <p className="text-gray-500">Map Image Placeholder</p>
        </div>
      </div>
    </div>
  );
}

export default LocationPage;