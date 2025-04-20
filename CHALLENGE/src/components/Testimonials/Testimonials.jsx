import React from "react";
import BannerImg from "../../assets/don.png";
import BgImg from "../../assets/website/coffee-texture.jpg";

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
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in {
    animation: fadeIn 1.5s ease-in-out;
  }

  .hover-scale {
    transition: transform 0.3s ease-in-out;
  }

  .hover-scale:hover {
    transform: scale(1.05);
  }
`;

const Banner = () => {
  const handleRedirect = () => {
    window.location.assign("http://localhost:3000"); // Corrected URL redirection
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
                  alt="ShareAPlate Banner"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] fade-in hover-scale"
                />
              </div>

              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 fade-in">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold text-black font-sans"
                >
                  ShareAPlate
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-black tracking-wide leading-5"
                >
                  ShareAPlate is a community initiative to reduce food waste and
                  help those in need. Instead of throwing away leftovers, you
                  can donate them safely to shelters and food banks. Join us in
                  making a difference by sharing a plate with someone who needs
                  it!
                </p>

                {/* Donate Button */}
                <button
                  onClick={handleRedirect} // Updated to use the correct function
                  className="mt-8 px-6 py-3 bg-primary text-white rounded-md text-lg font-semibold hover:bg-primary-dark transition-all"
                >
                  Donate
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
