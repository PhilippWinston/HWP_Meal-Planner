const axios = require("axios");
require('dotenv').config();


const recipe_id = process.env.RECIPE_ID;
const food_id = process.env.FOOD_ID;
const recipeAPIKey = process.env.RECIPE_API_KEY;
const foodAPIKey = process.env.FOOD_API_KEY;
const QUERY = "chicken";

// const searchInput = document.getElementById('search-bar');
// const QUERY = searchInput.value;
function searchAPI() {
axios
  .all([
    axios.get("https://api.edamam.com/search", {
      params: {
        q: QUERY,
        app_id: recipe_id,
        app_key: recipeAPIKey,
      },
    }),
    axios.get("https://api.edamam.com/api/food-database/v2/parser", {
      params: {
        ingr: QUERY,
        app_id: food_id,
        app_key: foodAPIKey,
      },
    }),
  ])
  .then(
    axios.spread((recipeResponse, foodResponse) => {
      const recipes = recipeResponse.data.hits;
      // const foods = foodResponse.data.hints;
      let i = Math.floor(Math.random() * recipes.length);
      
;      
      // Process and display the recipes
      console.log("Recipes:");
      
      recipes.forEach((recipe) => {
        const recipeLabel = recipe.recipe.label;
        const recipeUrl = recipe.recipe.url;
        const recipeImg = recipe.recipe.image;
        const ingredients = recipe.recipe.ingredientLines;})
        // console.log(`Recipe: ${recipeLabel}`);
        // console.log(`URL: ${recipeUrl}`);
        // console.log(`Img: ${recipeImg}`);
        // console.log(`ingredients: ${ingredients}`);
        // console.log("---");
      return recipes[i];

      



       
       
      // });


      // Process and display the food items
      // console.log("Food Items:");
      // foods.forEach((food) => {
      //   const foodLabel = food.food.label;
      //   const foodNutrients = food.food.nutrients;
      //   console.log(`Food: ${foodLabel}`);
      //   console.log(`Nutrients: ${JSON.stringify(foodNutrients)}`);
      //   console.log("---");
      // });
    })
  )
  .catch((error) => {
    console.error("Error retrieving data:", error);
  });
};
// searchAPI();
  module.exports = searchAPI;
