import React, { useState } from "react";
import BannerImg from "../../assets/indian.png";
import BgImg from "../../assets/website/ann-2.png";

const spinAnimation = {
  animation: "spin 15s linear infinite",
};

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const styles = `
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Banner = () => {
  const [currentChallenge, setCurrentChallenge] = useState("annapurna"); // 'annapurna' or 'sponsor'
  const [recipeLink, setRecipeLink] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (recipeLink.trim()) {
      setStep(2);
    }
  };

  const handleSubmit = () => {
    if (ingredients.trim()) {
      setIsSubmitted(true);
      setRecipeLink("");
      setIngredients("");
    }
  };

  const switchChallenge = (challenge) => {
    setCurrentChallenge(challenge);
    setStep(1);
    setIsSubmitted(false);
    setRecipeLink("");
    setIngredients("");
  };

  return (
    <>
      <style>{styles}</style>
      <span id="about"></span>
      <div style={bgImage}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]"
                  style={spinAnimation}
                />
              </div>

              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold text-white font-sans"
                >
                  {currentChallenge === "annapurna"
                    ? "Annapurna's Challenge"
                    : "Sponsor's Challenge"}
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-white tracking-wide leading-5"
                >
                  {currentChallenge === "annapurna"
                    ? "Share your recipe link and ingredients below. Winners are decided monthly!"
                    : "Share your recipe link and ingredients below. Winners are decided weekly! Sponsored products must be shown in the video and listed in the ingredients."}
                </p>

                {step === 1 && (
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-4"
                  >
                    <h1 className="text-2xl font-semibold text-white font-cursive">
                      Share Your Recipe Link
                    </h1>

                    <textarea
                      className="w-full p-4 text-sm text-gray-700 border-2 border-primary rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all hover:shadow-xl hover:border-primary-dark"
                      rows="6"
                      placeholder="Paste your recipe link here..."
                      value={recipeLink}
                      onChange={(e) => setRecipeLink(e.target.value)}
                    ></textarea>

                    <button
                      onClick={handleNext}
                      className={`mt-4 px-6 py-2 rounded-md transition ${
                        !recipeLink.trim()
                          ? "bg-gray-400 text-white cursor-not-allowed"
                          : "bg-primary text-white hover:bg-primary-dark"
                      }`}
                      disabled={!recipeLink.trim()}
                    >
                      Next
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-4"
                  >
                    <h1 className="text-2xl font-semibold text-white font-cursive">
                      Add Your Ingredients
                    </h1>

                    <textarea
                      className="w-full p-4 text-sm text-gray-700 border-2 border-primary rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all hover:shadow-xl hover:border-primary-dark"
                      rows="6"
                      placeholder="Add ingredients here..."
                      value={ingredients}
                      onChange={(e) => setIngredients(e.target.value)}
                    ></textarea>

                    <button
                      onClick={handleSubmit}
                      className={`mt-4 px-6 py-2 rounded-md transition ${
                        isSubmitted
                          ? "bg-green-400 text-white cursor-not-allowed"
                          : "bg-primary text-white hover:bg-primary-dark"
                      }`}
                      disabled={isSubmitted}
                    >
                      {isSubmitted ? "Submitted" : "Submit"}
                    </button>
                  </div>
                )}

                {/* Challenge Switch Button */}
                <button
                  onClick={() =>
                    switchChallenge(
                      currentChallenge === "annapurna" ? "sponsor" : "annapurna"
                    )
                  }
                  className="mt-8 px-6 py-3 bg-secondary text-white rounded-md text-lg font-semibold hover:bg-secondary-dark transition-all"
                >
                  {currentChallenge === "annapurna"
                    ? "Sponsor's Challenge"
                    : "Back to Annapurna Challenge"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
