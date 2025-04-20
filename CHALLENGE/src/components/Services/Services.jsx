import React, { useState } from "react";
import axios from "axios";

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://cosylab.iiitd.edu.in/recipe-search/recipesAdvanced?pageSize=10",
        {
          continent: "",
          region: "",
          subRegion: "",
          recipeTitle: "",
          ingredientUsed: searchQuery,
          ingredientNotUsed: "",
          cookingProcess: "",
          utensil: "",
          energyMin: 0,
          energyMax: 0,
          carbohydratesMin: 0,
          carbohydratesMax: 0,
          fatMin: 0,
          fatMax: 0,
          proteinMin: 0,
          proteinMax: 0,
        }
      );

      setRecipes(response.data.payload?.data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch recipes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              SavourFlavour!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Search the leftover ingredients and get the best out of all recipes.
            </p>
          </div>

          {/* Search section */}
          <form onSubmit={handleSearch} className="mb-16 text-center">
            <input
              type="text"
              placeholder="Search for ingredients..."
              className="w-full max-w-md p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="hidden">
              Search
            </button>
          </form>

          {/* Recipes Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {loading ? (
              <p className="text-center text-gray-500">Loading recipes...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : recipes.length > 0 ? (
              recipes.map((recipe) => (
                <div
                  key={recipe.Recipe_id}
                  className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                >
                  <div className="h-[122px]">
                    <img
                      src={recipe.img_url || "https://via.placeholder.com/200"}
                      alt={recipe.Recipe_title || "Recipe"}
                      className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{recipe.Recipe_title}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                      {`Calories: ${recipe.Calories || "N/A"}, Cook Time: ${
                        recipe.cook_time || "N/A"
                      } min`}
                    </p>
                    <a
                      href={recipe.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View Recipe
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No recipes found for your search.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;