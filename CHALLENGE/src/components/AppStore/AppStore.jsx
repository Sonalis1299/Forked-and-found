import React, { useState } from "react";
import BgPng from "../../assets/website/test.png";

// Style for the background image
const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

// Diet plans based on BMI category
const dietPlans = {
  underweight: [
    "Increase calorie intake with healthy snacks",
    "Include protein-rich foods like eggs, chicken, and beans",
    "Drink smoothies and shakes to boost calories",
  ],
  normal: [
    "Eat a balanced diet with lean protein, vegetables, and whole grains",
    "Include fruits, nuts, and seeds in your meals",
    "Stay hydrated and maintain portion control",
  ],
  overweight: [
    "Reduce calorie intake with more vegetables and lean proteins",
    "Limit processed foods and sugars",
    "Include fiber-rich foods like oats, fruits, and vegetables",
  ],
  obese: [
    "Follow a low-calorie, nutrient-dense diet",
    "Focus on whole foods, lean proteins, and vegetables",
    "Avoid high-calorie snacks and sugary drinks",
  ],
};

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [diet, setDiet] = useState([]);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBMI);

      let newCategory = "";
      let suggestedDiet = [];

      if (calculatedBMI < 18.5) {
        newCategory = "Underweight";
        suggestedDiet = dietPlans.underweight;
      } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
        newCategory = "Normal Weight";
        suggestedDiet = dietPlans.normal;
      } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
        newCategory = "Overweight";
        suggestedDiet = dietPlans.overweight;
      } else {
        newCategory = "Obese";
        suggestedDiet = dietPlans.obese;
      }

      setCategory(newCategory);
      setDiet(suggestedDiet);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="py-1 bg-gray-800 text-white p-4">
        <div className="container flex justify-between items-center">
          {/* Navbar content here */}
        </div>
      </div>

      {/* BMI Calculator Section */}
      <div id="BMICalculator" className="py-14" style={backgroundStyle}>
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-8">
            {/* Left Side - BMI Calculator */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="space-y-6 max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg"
            >
              <h1 className="text-3xl font-semibold text-center mb-4 text-[#4b2e1d]">
                NutriBalance
              </h1>
              <p className="text-center text-gray-700 text-lg">
                Calculate your BMI and find out your health category
              </p>

              {/* BMI calculator form */}
              <div className="space-y-6">
                <div className="flex flex-col items-center sm:items-start">
                  <input
                    type="number"
                    placeholder="Enter weight (kg)"
                    className="p-3 w-full sm:w-80 border rounded-md shadow-md focus:outline-none"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <input
                    type="number"
                    placeholder="Enter height (cm)"
                    className="p-3 w-full sm:w-80 border rounded-md shadow-md focus:outline-none"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
                <div className="flex justify-center sm:justify-start">
                  <button
                    onClick={calculateBMI}
                    className="bg-[#6d2b02] text-[#0f0e0e] p-4 rounded-md w-full sm:w-auto transition-all transform hover:bg-blue-500 hover:scale-105"
                  >
                    Calculate BMI
                  </button>
                </div>

                {/* BMI result */}
                {bmi && (
                  <div className="text-center mt-6 text-blue-600">
                    <h3 className="text-2xl font-semibold">Your BMI: {bmi}</h3>
                    <p className="text-lg">{category}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Diet Planner */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="space-y-6 max-w-xl mx-auto bg-blue-100 p-8 rounded-lg shadow-lg mt-6 sm:mt-0"
            >
              {category && (
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                    Diet Planner for {category}
                  </h2>
                  <ul className="space-y-3 text-gray-800">
                    {diet.map((item, index) => (
                      <li key={index} className="text-lg">
                        <span className="font-semibold">- </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* AppStore Section */}
      <div id="AppStore" className="py-1 bg-gray-800 text-white">
        <div className="container text-center">
          {/* AppStore content */}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
