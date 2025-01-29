import React, { useState } from 'react';

// Sample data (you can replace the image URLs with your actual URLs)
const personalCareSuggestions = [
  { suggestion: "Wash your hands frequently with soap and water.", description: "Washing your hands is one of the most important practices for personal hygiene and preventing the spread of germs.", image: "https://media.istockphoto.com/id/1182622704/photo/gotta-make-sure-germs-have-a-zero-chance.webp?a=1&b=1&s=612x612&w=0&k=20&c=ji6t7UfgoBjFmK9C6jISAl6PjIzgkIsJg2m9ULxo1cc=" },
  { suggestion: "Use a hand sanitizer when soap and water aren't available.", description: "Hand sanitizers are a great alternative when soap and water are not accessible. They kill most germs, but don't work on all viruses.", image: "https://media.istockphoto.com/id/1210795447/photo/human-hands-using-sanitizer-to-clean-himself.webp?a=1&b=1&s=612x612&w=0&k=20&c=HTgPSf7E9m0TT7WzFmCnS1qaP3G4cVsJ3k2QPHQTc3E=" },
  { suggestion: "Brush your teeth twice a day with fluoride toothpaste.", description: "Brushing your teeth regularly helps prevent tooth decay and gum disease, maintaining overall oral hygiene.", image: "https://media.istockphoto.com/id/536890197/photo/closeup-on-young-woman-brushing-teeth.webp?a=1&b=1&s=612x612&w=0&k=20&c=wajpxjMdb_2RwA2mn8w5ictfxaD6WSWl2sq5eM0St4M=" },
  { suggestion: "Stay hydrated by drinking at least 8 cups of water daily.", description: "Drinking water keeps your body hydrated, helps regulate temperature, and supports essential bodily functions.", image: "https://plus.unsplash.com/premium_photo-1664908474064-d4847a2550cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RheSUyMGh5ZHJhdGVkfGVufDB8fDB8fHww" },
  { suggestion: "Get 7-9 hours of sleep each night for optimal health.", description: "Sleep is crucial for physical and mental health. It allows the body to repair and refresh, promoting better focus and mood.", image: "https://plus.unsplash.com/premium_photo-1661779054933-3b929260ec41?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2V0JTIwNyUyMDklMjBob3VyJTIwc2xlZXAlMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D" },
  { suggestion: "Exercise regularly for at least 30 minutes a day.", description: "Exercise improves cardiovascular health, strengthens muscles, and boosts mental well-being. It's essential for a healthy lifestyle.", image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXhlcmNpc2UlMjByZWd1bGFybHl8ZW58MHx8MHx8fDA%3D" },
  { suggestion: "Eat a balanced diet with plenty of fruits and vegetables.", description: "A balanced diet provides essential nutrients that keep your body strong and healthy, reducing the risk of chronic diseases.", image: "https://media.istockphoto.com/id/1403238360/photo/old-vintage-paper-sheet-in-hand-over-the-planty-of-ripe-vegetables-vegetarian-healthy-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=8y1uUuoifxoS5raVc0eSsm54EUFW9xDawp_tf6A6q7c=" },
  { suggestion: "Limit your intake of processed foods and sugars.", description: "Consuming too many processed foods or sugars can lead to weight gain, obesity, and other health issues, so moderation is key.", image: "https://plus.unsplash.com/premium_photo-1677651819287-73f9ce66727f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGltaXQlMjB5b3VyJTIwaW50YWslMjBvZiUyMHByb2Nlc3NlZCUyMGZvb2QlMjBhbmQlMjBzdWdhcnxlbnwwfHwwfHx8MA%3D%3D" },
  { suggestion: "Practice good posture while sitting and standing.", description: "Good posture helps prevent strain on your back and neck, and reduces the risk of developing long-term musculoskeletal issues.", image: "https://media.istockphoto.com/id/1292381099/photo/instructor-teaching-yoga-pose-to-woman-at-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=UW1I7jKT2NJKHmaLc-LpXERonic3YEPjRqx5sUlHM0Y=" },
  { suggestion: "Use sunscreen with SPF 30 or higher to protect your skin from UV rays.", description: "Sunscreen protects the skin from harmful UV rays, preventing premature aging and skin cancer.", image: "https://media.istockphoto.com/id/1496614896/photo/smiling-mixed-race-young-woman-applying-moisturizer-on-her-face-in-bathroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=zE9VuNEcI2HbBM70kZHgtHRvNry6Qt6f0Ghn6GkhCDY=" },
];

const PersonalCare = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Personal Care Suggestions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {personalCareSuggestions.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => openModal(item)}
          >
            <img src={item.image} alt={`Suggestion ${index + 1}`} className="w-full h-40 object-cover" />
            <div className="p-4">
              <p className="text-gray-700 text-sm">{item.suggestion}</p>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-xl font-bold text-gray-600"
            >
              ×
            </button>
            <img
              src={selectedItem.image}
              alt="Selected suggestion"
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">{selectedItem.suggestion}</h2>
            <p className="text-gray-700">{selectedItem.description}</p>
            {/* Close Description Button */}
            <button
              onClick={closeModal}
              className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              Close Description
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalCare;


