

import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


const medicines = [
  {
    name: "Paracetamol",
    description: "Relieves pain and reduces fever.",
    price: 50,
    usage: "Take one tablet every 6 hours after food.",
    rating: 4.5,
    discount: 10,
    image: "https://media.istockphoto.com/id/157402355/photo/generic-paracetamol-isolated-on-white.jpg?s=612x612&w=0&k=20&c=2E3oCvsuOhbB8jmDmDgIFrPDg_FLyEvp-K0IdvGagaw=",
  },
  {
    name: "Ibuprofen",
    description: "Effective for inflammation and pain relief.",
    price: 70,
    usage: "Take one tablet every 8 hours with water.",
    rating: 4.3,
    discount: 15,
    image: "https://media.istockphoto.com/id/1217133515/photo/woman-hold-a-box-of-400mg-ibuprofen-tablets-in-her-hand-and-a-glass-of-water.jpg?s=612x612&w=0&k=20&c=sKjfAzsOF2XuZotM_QVGv4Z_SizsR5htZy5MNOrzSEA=",
  },
  {
    name: "Aspirin",
    description: "Used to reduce fever, pain, and inflammation.",
    price: 60,
    usage: "Take one tablet daily after food.",
    rating: 4.4,
    discount: 5,
    image: "https://media.istockphoto.com/id/458105277/photo/aspirin-500mg-pills.jpg?s=612x612&w=0&k=20&c=1Umu19lj73xTfmxHl7eMMPRYVrUmrVqHYtLN6tXt7Rc=",
  },
  {
    name: "Cetirizine",
    description: "Antihistamine for allergies and hay fever.",
    price: 40,
    usage: "Take one tablet at bedtime.",
    rating: 4.6,
    discount: 20,
    image: "https://media.istockphoto.com/id/1196234905/photo/cetirizine-medication-or-allergy-drug-concept-photo-on-doctor-table-is-pack-with-words.jpg?s=612x612&w=0&k=20&c=tbCfxDu9gJmnd2n5-fSV6n3BS2Cr1PUYakF71X53Ao0=",
  },
  {
    name: "Amoxicillin",
    description: "Antibiotic for bacterial infections.",
    price: 150,
    usage: "Take one capsule every 8 hours for 7 days.",
    rating: 4.7,
    discount: 25,
    image: "https://media.istockphoto.com/id/2096790710/photo/generic-box-and-amoxicillin-antibiotic-pills-white-background.jpg?s=612x612&w=0&k=20&c=a1zzwB5Jzfa40czfd_hnEMbnmtxl5h_-ATO4e1AXJC8=",
  },
  {
    name: "Cough Syrup",
    description: "Relieves dry and chesty coughs.",
    price: 90,
    usage: "Take 10ml thrice daily after meals.",
    rating: 4.2,
    discount: 12,
    image: "https://media.istockphoto.com/id/1711052160/photo/cough-syrup-in-a-bottle-poured-on-a-spoon.jpg?s=612x612&w=0&k=20&c=MQw4aXzebuEU6-JQNche9rWv303uY64wWaZjh6kbZu0=",
  },
  {
    name: "Vitamin C Tablets",
    description: "Boosts immunity and skin health.",
    price: 120,
    usage: "Take one tablet daily after breakfast.",
    rating: 4.8,
    discount: 18,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Antacid Tablets",
    description: "Relieves heartburn and acid reflux.",
    price: 30,
    usage: "Take two tablets after meals when needed.",
    rating: 4.5,
    discount: 10,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Iron Supplement",
    description: "Prevents and treats iron deficiency anemia.",
    price: 110,
    usage: "Take one tablet daily with water.",
    rating: 4.6,
    discount: 15,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Calcium Tablets",
    description: "Strengthens bones and teeth.",
    price: 100,
    usage: "Take one tablet daily with milk.",
    rating: 4.4,
    discount: 10,
    image: "https://via.placeholder.com/150",
  },
];

function Card({ children, className }) {
  return <div className={`bg-white p-4 rounded-lg shadow-md ${className}`}>{children}</div>;
}

function CardHeader({ children }) {
  return <div className="mb-4 border-b pb-2">{children}</div>;
}

function CardTitle({ children, className }) {
  return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
}

function CardContent({ children }) {
  return <div className="text-sm text-gray-600">{children}</div>;
}

function MedicineCart() {
  const { searchQuery } = useOutletContext(); // Access search query
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cartItems, setCartItems } = useOutletContext();
  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const navigate = useNavigate();


  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const user = localStorage.getItem("user"); // Check if user data is in localStorage
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);
  console.log(isLoggedIn);
  console.log(setIsLoggedIn)

  // Modal State
  const [showDescription, setShowDescription] = useState(null);

  // Handle "Add to Cart" functionality
  const handleAddToCart = (medicine) => {
    if (!isLoggedIn) {
      alert("You must log in to add products to the cart.");
      navigate("/login"); // Redirect to login page using navigate
      return;
    }
    alert(`${medicine.name} added to cart!`);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === medicine.name);
      if (existingItem) {
        // Update quantity if already in cart
        return prevItems.map((item) =>
          item.name === medicine.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Add new item to the cart
      return [...prevItems, { ...medicine, quantity: 1 }];
    });
  };

  // Handle "Description" modal toggle
  const handleShowDescription = (medicine) => {
    setShowDescription(medicine);
  };

  const handleCloseDescription = () => {
    setShowDescription(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
     <div className="flex justify-between items-center mb-6">
  <button
    className="flex items-center text-blue-700 hover:text-blue-900"
    onClick={() => navigate("/")}
  >
    <ArrowLeft className="w-5 h-5 mr-2" /> Go Back to Home
  </button>

  <button
    className="flex items-center text-blue-700 hover:text-blue-900"
    onClick={() => navigate("/cart")}
  >
    <ArrowRight className="w-5 h-5 mr-2" /> Go Back to Cart
  </button>
</div>




      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Medicine E-Cart
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMedicines.map((medicine, index) => (
          <Card key={index}>
            <img
              src={medicine.image}
              alt={medicine.name}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <CardHeader>
              <CardTitle>{medicine.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{medicine.description}</p>
              <p className="mt-2 text-blue-600 font-bold">Price: ₹{medicine.price}</p>
              <p className="text-green-600">Discount: {medicine.discount}%</p>
              <p className="text-gray-700 mt-2">Usage: {medicine.usage}</p>
              <div className="flex items-center mt-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="ml-1 text-gray-600">{medicine.rating}</span>
              </div>

              {/* Add to Cart Button */}
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => handleAddToCart(medicine)}
              >
                Add to Cart
              </button>

              {/* Description Button */}
              <button
                className="mt-2 text-blue-600 mx-10"
                onClick={() => handleShowDescription(medicine)}
              >
                More Info
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal for Description */}
      {showDescription && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold">{showDescription.name}</h2>
            <p className="mt-4">{showDescription.description}</p>
            <p className="mt-2">Price: ₹{showDescription.price}</p>
            <p className="mt-2">Usage: {showDescription.usage}</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={handleCloseDescription}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MedicineCart;








