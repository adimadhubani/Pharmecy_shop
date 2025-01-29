import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
const healthPrescriptions = [
    { 
      prescription: "Take daily vitamins to support your immune system.",
      description: "Daily vitamins can help fill nutritional gaps and support your body's natural defenses.",
      image: "https://via.placeholder.com/150",
      advantages: [
        "Boosts immune system, supports overall health.",
        "Helps fill nutritional gaps.",
        "Reduces the risk of vitamin deficiencies.",
        "Supports energy levels and mental clarity.",
        "Can improve skin health and appearance."
      ],
      disadvantages: [
        "Excessive intake may lead to toxicity.",
        "Potential interactions with other medications.",
        "May cause upset stomach or nausea.",
        "Can lead to imbalances if not properly balanced.",
        "May not be necessary if you already have a balanced diet."
      ]
    },
    { 
      prescription: "Take prescribed antibiotics to treat bacterial infections.",
      description: "Antibiotics are effective in treating bacterial infections but should be taken as prescribed to avoid resistance.",
      image: "https://via.placeholder.com/150",
      advantages: [
        "Kills harmful bacteria effectively.",
        "Prevents the spread of infection to others.",
        "Speeds up recovery from bacterial infections.",
        "Reduces the severity of illness.",
        "Helps in preventing complications from infections."
      ],
      disadvantages: [
        "May cause side effects like nausea and diarrhea.",
        "Overuse can lead to antibiotic resistance.",
        "May interact with other medications.",
        "Can disrupt gut microbiome leading to digestive issues.",
        "Not effective against viral infections."
      ]
    },
    { 
      prescription: "Monitor your blood pressure regularly.",
      description: "Regular monitoring of blood pressure helps to detect any issues early, reducing the risk of heart disease.",
      image: "https://plus.unsplash.com/premium_photo-1664373622076-e6d7b125a398?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9uaXRvciUyMHlvdXIlMjBibG9vZCUyMHByZXNzdXJlJTIwcmVndWxhcmx5LnxlbnwwfHwwfHx8MA%3D%3D",
      advantages: [
        "Helps detect high blood pressure early.",
        "Reduces the risk of heart disease and stroke.",
        "Helps doctors adjust medication for optimal treatment.",
        "Allows for better long-term health management.",
        "Prevents complications from untreated high blood pressure."
      ],
      disadvantages: [
        "Requires regular measurement and tracking.",
        "Can cause stress or anxiety for some individuals.",
        "May give false readings due to improper technique.",
        "Can lead to unnecessary medication if over-monitored.",
        "May cause inconvenience if done frequently."
      ]
    },
    { 
      prescription: "Follow your doctor's instructions for diabetic care.",
      description: "If you have diabetes, following your care plan can help keep your blood sugar levels stable and avoid complications.",
      image: "https://via.placeholder.com/150",
      advantages: [
        "Helps maintain stable blood sugar levels.",
        "Prevents long-term complications like nerve damage and heart disease.",
        "Improves overall health and well-being.",
        "Enables personalized treatment plans for better outcomes.",
        "Helps monitor and manage other health conditions that often accompany diabetes."
      ],
      disadvantages: [
        "Requires consistent monitoring and adherence.",
        "Can limit food choices or activities.",
        "May involve side effects from medication or insulin.",
        "Can lead to frustration or burnout if not managed properly.",
        "Requires lifestyle changes that may be difficult to sustain long-term."
      ]
    },
    { 
      prescription: "Take pain medication as prescribed for chronic pain.",
      description: "Chronic pain management may include prescription medications, which should be taken as directed by your healthcare provider.",
      image: "https://via.placeholder.com/150",
      advantages: [
        "Provides relief from chronic pain.",
        "Improves quality of life and daily functioning.",
        "Reduces the impact of pain on mental health.",
        "Helps people with chronic pain lead more active lives.",
        "Enables individuals to participate in physical therapy and rehabilitation."
      ],
      disadvantages: [
        "Risk of dependency and addiction.",
        "Potential side effects like drowsiness or nausea.",
        "May cause tolerance, requiring higher doses over time.",
        "Can impair cognitive function and motor skills.",
        "May interact with other medications, leading to adverse effects."
      ]
    },
    { 
      prescription: "Use inhalers for asthma or other respiratory conditions.",
      description: "Inhalers can provide quick relief for those with asthma or other respiratory conditions by delivering medication directly to the lungs.",
      image: "https://via.placeholder.com/150",
      advantages: [
        "Provides quick relief during asthma attacks.",
        "Improves breathing and lung function.",
        "Reduces inflammation in the airways.",
        "Portable and easy to use.",
        "Prevents severe asthma attacks and hospitalizations."
      ],
      disadvantages: [
        "May cause side effects like headaches or dizziness.",
        "Overuse can lead to reduced effectiveness.",
        "May not work for everyone, depending on the severity.",
        "Requires proper technique to ensure effectiveness.",
        "Can be costly depending on insurance coverage."
      ]
    },
    { 
      prescription: "Adhere to your prescribed weight loss medication plan.",
      description: "If prescribed by your healthcare provider, weight loss medications can support your efforts to lose weight and improve overall health.",
      image: "https://via.placeholder.com/150",
      advantages: [
        "Supports weight loss efforts and helps manage obesity.",
        "Can improve metabolic health and reduce risk of diabetes.",
        "Enhances the effects of diet and exercise.",
        "Promotes long-term weight management.",
        "Helps reduce related health risks like hypertension."
      ],
      disadvantages: [
        "May cause side effects such as nausea, diarrhea, or headaches.",
        "Can lead to dependency if not used correctly.",
        "May have limited effectiveness without lifestyle changes.",
        "Can be expensive without insurance coverage.",
        "Not suitable for everyone, especially those with certain medical conditions."
      ]
    },
    { 
      prescription: "Take medications for mental health as prescribed.",
      description: "Medications for mental health, like antidepressants or anti-anxiety medications, should be taken consistently to be effective.",
      image: "https://via.placeholder.com/150",
      advantages: [
        "Helps manage symptoms of anxiety, depression, and other mental health disorders.",
        "Improves quality of life and daily functioning.",
        "Reduces the risk of relapse in mental health conditions.",
        "Can improve sleep, appetite, and energy levels.",
        "Helps stabilize mood and emotions."
      ],
      disadvantages: [
        "May cause side effects like weight gain, dizziness, or fatigue.",
        "May take weeks to see the full benefits.",
        "Can interact with other medications, leading to side effects.",
        "Requires long-term commitment and adherence.",
        "Some medications may cause sexual side effects or reduced libido."
      ]
    },
    { 
      prescription: "Follow a balanced diet as prescribed for health management.",
      description: "Your healthcare provider may recommend a specific diet plan to manage conditions like high cholesterol, diabetes, or hypertension.",
      image: "https://via.placeholder.com/150",
      advantages: [
        "Helps manage chronic conditions like high cholesterol or diabetes.",
        "Promotes heart health and reduces the risk of heart disease.",
        "Improves overall nutritional intake and health.",
        "Supports weight loss and healthy weight maintenance.",
        "Can boost energy levels and mental clarity."
      ],
      disadvantages: [
        "Requires lifestyle adjustments and commitment.",
        "Can be difficult to follow in social settings or when dining out.",
        "May require the elimination of favorite foods.",
        "Can be time-consuming to prepare balanced meals.",
        "May lead to feelings of deprivation or frustration."
      ]
    },
    { 
      prescription: "Stay active with physical therapy for injury recovery.",
      description: "Physical therapy is often prescribed to recover from injuries, strengthen muscles, and improve mobility.",
      image: "https://via.placeholder.com/150",
      advantages: [
        "Helps recover from injuries and surgeries.",
        "Strengthens muscles and improves flexibility.",
        "Reduces pain and improves mobility.",
        "Increases functional independence.",
        "Improves posture and body alignment."
      ],
      disadvantages: [
        "Can be physically demanding and painful at times.",
        "Requires time commitment for consistent sessions.",
        "Can be inconvenient depending on the location and schedule.",
        "May require lifestyle changes to accommodate therapy.",
        "Results may take time, requiring patience and persistence."
      ]
    },
    // Add more prescriptions as needed...
  ];
  
  
  
  


  const HealthPrescriptions = () => {
    const [selectedPrescription, setSelectedPrescription] = useState(null);
    const {isDescriptionOpen, setIsDescriptionOpen} = useOutletContext(); // To track if the description is open
    // console.log(isDescriptionOpen)
  
    const openDescription = (index) => {
      setSelectedPrescription(index);
      setIsDescriptionOpen(true); // Show the description modal
    };
  
    const closeDescription = () => {
      setSelectedPrescription(null);
      setIsDescriptionOpen(false); // Hide the description modal
    };
  
    return (
      <div className="bg-gray-100 py-8 px-4">
        {/* Conditionally render navbar based on isDescriptionOpen */}
        {!isDescriptionOpen && (
          <div className="bg-blue-600 p-4 text-white text-center">
            <h1 className="text-3xl font-bold">Health Prescriptions</h1>
          </div>
        )}
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {healthPrescriptions.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              onClick={() => openDescription(index)}
            >
              <img src={item.image} alt={`Prescription ${index + 1}`} className="w-full h-40 object-cover" />
              <div className="p-4">
                <p className="text-gray-700 text-lg font-semibold">{item.prescription}</p>
              </div>
            </div>
          ))}
        </div>
  
        {selectedPrescription !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10"
            onClick={closeDescription}
          >
            <div
              className="bg-white rounded-lg p-6 w-full h-full md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
              style={{ marginTop: '80px' }} // Adding space from navbar (adjust based on your navbar height)
            >
              <div className="w-full md:w-1/3 lg:w-1/4 p-4">
                <img
                  src={healthPrescriptions[selectedPrescription].image}
                  alt={`Prescription ${selectedPrescription + 1}`}
                  className="w-full h-auto object-cover rounded-md shadow-md"
                />
              </div>
              <div className="flex flex-col w-full md:w-2/3 lg:w-3/4 p-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">
                  {healthPrescriptions[selectedPrescription].prescription}
                </h2>
                <p className="text-gray-600 mb-4">
                  {healthPrescriptions[selectedPrescription].description}
                </p>
  
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-700">Advantages</h3>
                  <ul className="list-disc pl-5">
                    {healthPrescriptions[selectedPrescription].advantages.map((advantage, index) => (
                      <li key={index} className="text-gray-600">{advantage}</li>
                    ))}
                  </ul>
                </div>
  
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">Disadvantages</h3>
                  <ul className="list-disc pl-5">
                    {healthPrescriptions[selectedPrescription].disadvantages.map((disadvantage, index) => (
                      <li key={index} className="text-gray-600">{disadvantage}</li>
                    ))}
                  </ul>
                </div>
  
                <button
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
                  onClick={closeDescription}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default HealthPrescriptions;
  