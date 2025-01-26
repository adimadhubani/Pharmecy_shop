import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, LogIn, Menu } from "lucide-react";

export default function Navbar({ setSearchQuery }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the current route is "About"
  const isSearchBarEnabled = location.pathname === "/about";

  return (
    <header className="sticky top-0 z-50">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-md">
        <div className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="Logo"
              className="h-10"
            />
          </Link>

          {/* Middle: Search Bar */}
          <div className="hidden md:flex flex-grow mx-6">
            {isSearchBarEnabled ? (
              <input
                type="text"
                placeholder="Search for medicines, categories..."
                className="w-full px-4 py-2 text-black bg-white rounded-full border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                onChange={(e) => setSearchQuery(e.target.value)} // Set the search query
              />
            ) : (
              <div className="text-gray-200 text-sm italic">
                   



                   
              </div>
            )}
          </div>

          {/* Right: Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Cart */}
            <Link
              to="/cart"
              className="p-2 text-gray-100 hover:text-orange-300 focus:outline-none"
            >
              <ShoppingCart className="w-6 h-6" />
            </Link>

            {/* User Account */}
            <Link
              to="/account"
              className="p-2 text-gray-100 hover:text-orange-300 focus:outline-none"
            >
              <User className="w-6 h-6" />
            </Link>

            {/* Login */}
            <Link
              to="/login"
              className="text-sm font-medium bg-orange-500 text-black hover:bg-orange-600 px-4 py-2 rounded-lg"
            >
              Login
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden p-2 text-gray-100 hover:text-orange-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-500 text-white px-6 py-4">
          <div className="flex flex-col space-y-4">
            {isSearchBarEnabled && (
              <input
                type="text"
                placeholder="Search for medicines, categories..."
                className="w-full px-4 py-2 text-black rounded-full border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                onChange={(e) => setSearchQuery(e.target.value)} // Set the search query
              />
            )}
            <Link
              to="/cart"
              className="flex items-center text-gray-100 hover:text-orange-300"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Cart
            </Link>
            <Link
              to="/account"
              className="flex items-center text-gray-100 hover:text-orange-300"
            >
              <User className="w-5 h-5 mr-2" />
              Account
            </Link>
            <Link
              to="/login"
              className="text-sm font-medium bg-orange-500 text-black hover:bg-orange-600 px-4 py-2 rounded-lg"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}







