import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, CheckCircle, Clock, ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Trusted Online Medicine Store</h1>
        <p className="text-lg mb-6">
          Get your medicines delivered to your doorstep with ease and convenience.
        </p>
        <Link
          to="/about"
          className="bg-white text-green-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100"
        >
          Shop Now
        </Link>
      </header>

      {/* Featured Categories */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
          {[
            { name: "Prescriptions", img: "https://png.pngtree.com/thumb_back/fh260/background/20210303/pngtree-prescription-drug-background-map-image_574815.jpg", link: "/category/prescriptions" },
            { name: "Health Supplements", img: "https://plus.unsplash.com/premium_photo-1661757091716-a180d11b90ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "/healthsupplement" },
            { name: "Personal Care", img: "https://plus.unsplash.com/premium_photo-1664475564082-a56ec9047981?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "/personalcare" },
          ].map((category) => (
            <Link
              to={category.link}
              key={category.name}
              className="block bg-white shadow rounded-lg overflow-hidden hover:shadow-lg"
            >
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-green-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
          {[
            { title: "Wide Selection", icon: ShoppingCart, description: "Find all your medicines in one place." },
            { title: "Genuine Products", icon: CheckCircle, description: "We provide only verified and authentic medicines." },
            { title: "Fast Delivery", icon: Clock, description: "Get your medicines delivered quickly to your doorstep." },
            { title: "Secure Payments", icon: ShieldCheck, description: "Your transactions are safe with us." },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white shadow rounded-lg p-6 text-center hover:shadow-lg"
            >
              <benefit.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 text-center bg-gradient-to-r from-teal-500 to-green-500 text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6">
          Create an account and enjoy hassle-free medicine shopping today!
        </p>
        <Link
          to="/signup"
          className="bg-white text-green-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100"
        >
          Sign Up Now
        </Link>
      </section>
    </div>
  );
}
