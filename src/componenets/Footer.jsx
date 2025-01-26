import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
            We are your trusted online store offering a wide range of products
            and services tailored to your needs. Your satisfaction is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-sm text-gray-400 hover:text-white">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/account" className="text-sm text-gray-400 hover:text-white">
                My Account
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-sm text-gray-400 hover:text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm text-gray-400 hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400">Phone: +1 234 567 890</p>
          <p className="text-sm text-gray-400">Email: support@example.com</p>
          <p className="text-sm text-gray-400">
            Address: 123 Main St, City, Country
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Brand. All rights reserved.
      </div>
    </footer>
  );
}
