import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock } from "lucide-react";
import { useNavigate} from "react-router-dom";

// Input Component
const Input = ({ type, name, placeholder, value, onChange, className, required }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 ${className}`}
    required={required}
  />
);

// Button Component
const Button = ({ type, className, children }) => (
  <button
    type={type}
    className={`w-full py-3 rounded-lg font-semibold text-white ${className}`}
  >
    {children}
  </button>
);

// Card Component
const Card = ({ className, children }) => (
  <div className={`bg-white shadow-2xl rounded-3xl ${className}`}>
    {children}
  </div>
);

// CardContent Component
const CardContent = ({ className, children }) => (
  <div className={`p-8 ${className}`}>
    {children}
  </div>
);

export default function LoginPage() {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit= (e) => {
    e.preventDefault();
    // Assuming login is successful, you can save the user data or token
    localStorage.setItem("user", JSON.stringify({ id: 1, name: "John Doe" }));
    // Redirect to cart or home page
    navigate("/cart"); // Redirect to cart after login
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 relative overflow-hidden">
      {/* Background Image with Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1.2 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580281658566-ef59c4d429c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')" }}
      />

      {/* Login Card */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10"
      >
        <Card className="w-full max-w-md shadow-xl rounded-3xl overflow-hidden">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field (Optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name (Optional)</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Email or Phone Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email or Phone</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    name="emailOrPhone"
                    placeholder="Email or Phone Number"
                    value={formData.emailOrPhone}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="bg-teal-500 hover:bg-teal-600 shadow-md">
                Login
              </Button>

              {/* Register Link */}
              <p className="text-center text-sm text-gray-600 mt-4">
                Don’t have an account? <a href="/register" className="text-teal-500 hover:underline">Sign up</a>
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

