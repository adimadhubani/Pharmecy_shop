import React, { useState, useEffect } from "react";
import { Trash, MinusCircle, PlusCircle, ArrowRightCircle } from "lucide-react";
import { useOutletContext, useNavigate} from "react-router-dom";

export default function Cart() {
  const { cartItems, setCartItems } = useOutletContext();
  const [price, setPrice] = useState(0);
  
  const navigate = useNavigate();
  



  // Update quantity of a specific item in the cart
  const updateQuantity = (name, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Remove an item from the cart and update the total
  const removeItem = (name) => {
    const itemToRemove = cartItems.find((item) => item.name === name);
    if (itemToRemove) {
      setPrice((prevPrice) => prevPrice - calculateItemTotal(itemToRemove));
    }
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== name));
  };

  // trash the item
  const trashItem=(name)=>{
    const item = cartItems.find((item) => item.name === name);

    if(item.quantity===1){
      removeItem(name)
    }else{
      updateQuantity(name,-1)
    }
  }

  // Calculate the total price of an individual item (considering quantity and discount)
  const calculateItemTotal = (item) => {
    const discountedPrice = item.price - (item.price * item.discount) / 100;
    return discountedPrice * item.quantity;
  };

  // Calculate the total price of all items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + calculateItemTotal(item), 0);
  };

  // Update the price state whenever cartItems change
  useEffect(() => {
    setPrice(calculateTotal());
  }, [cartItems]);

  // Navigate to the /about page
  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-lg font-semibold text-gray-700">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {item.description}
                </p>
                <p className="text-sm text-gray-500">
                  Usage: {item.usage}
                </p>
                <p className="text-sm text-gray-500">
                  Rating: ⭐{item.rating}
                </p>
                <p className="text-sm text-gray-500">
                  Discount: {item.discount}%
                </p>
                <p className="text-sm text-gray-500">
                  Price: ₹{item.price.toFixed(2)} 
                  <span className="text-green-600">
                    {" "}
                    (₹{(item.price - (item.price * item.discount) / 100).toFixed(2)} after discount)
                  </span>
                </p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.name, -1)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <MinusCircle className="w-5 h-5" />
                  </button>
                  <span className="px-4 text-gray-700">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.name, 1)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <PlusCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <button
                onClick={() => trashItem(item.name)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash className="w-6 h-6" />
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-700">Total</h2>
            <p className="text-xl font-bold text-gray-800">₹{price.toFixed(2)}</p>
          </div>

          <button className="w-full bg-green-500 text-white py-3 rounded-lg shadow-md font-semibold hover:bg-green-600">
            Proceed to Checkout
          </button>
        </div>
      )}

      {/* Arrow icon to go to the About page - always visible */}
      <div className="flex justify-center mt-6">
        <button
          onClick={goToAbout}
          className="flex items-center text-blue-500 hover:text-blue-700"
        >
          <ArrowRightCircle className="w-6 h-6 mr-2" />
          Go to Shopping
        </button>
      </div>
    </div>
  );
}








