import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    address: "123 Main Street, City, Country",
  });

  const [orderHistory, setOrderHistory] = useState([
    { id: 1, date: "2025-01-10", status: "Delivered", total: 120.00 },
    { id: 2, date: "2025-01-15", status: "Shipped", total: 45.50 },
    { id: 3, date: "2025-01-20", status: "Pending", total: 60.00 },
  ]);

  const navigate = useNavigate();

  // Navigate to Order Details Page
  const viewOrderDetails = (orderId) => {
    navigate(`/order-details/${orderId}`);
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">My Account</h1>

      {/* User Profile Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Profile Information</h2>
        <div className="space-y-2">
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Phone:</strong> {userDetails.phone}</p>
          <p><strong>Address:</strong> {userDetails.address}</p>
        </div>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Edit Profile
        </button>
      </div>

      {/* Order History Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Order History</h2>
        {orderHistory.length === 0 ? (
          <p className="text-gray-500">You have no order history.</p>
        ) : (
          <div className="space-y-4">
            {orderHistory.map((order) => (
              <div
                key={order.id}
                className="flex justify-between items-center border-b py-2"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-800">Order #{order.id}</p>
                  <p className="text-sm text-gray-500">Date: {order.date}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm text-gray-600">Total: ₹{order.total.toFixed(2)}</p>
                  <button
                    onClick={() => viewOrderDetails(order.id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Change Password Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Change Password</h2>
        <input
          type="password"
          placeholder="Enter current password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        />
        <input
          type="password"
          placeholder="Enter new password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        />
        <input
          type="password"
          placeholder="Confirm new password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
