import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png"
            alt="Airbnb Logo"
            className="h-6"
          />
          {/* <span className="text-rose-500 text-xl font-bold ml-2">airbnb</span> */}
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
          <input
            type="text"
            placeholder="Where"
            className="flex-1 text-sm text-gray-600 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Check-in / Check-out"
            className="flex-1 text-sm text-gray-600 focus:outline-none border-l border-gray-300 pl-4"
          />
          <input
            type="text"
            placeholder="Guests"
            className="flex-1 text-sm text-gray-600 focus:outline-none border-l border-gray-300 pl-4"
          />
          <button className="bg-rose-500 text-white p-2 rounded-full">🔍</button>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600">Airbnb your home</a>
          <button className="text-gray-600">🌍</button>
          <div className="bg-gray-200 rounded-full p-2">👤</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
