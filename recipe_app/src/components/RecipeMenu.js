import React from "react";
import { Link } from "react-router-dom";

const RecipeMenu = ({ recipe }) => {
  if (!recipe) return <h1>Loading...</h1>;
  return (
    <Link  key={recipe.id}
    to={"/recipes/"+recipe.id}>
    <div className="w-64 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl m-3">
      <img
        src={recipe.image}
        alt="Product"
        className="h-56 w-60 object-cover rounded-t-xl m-auto"
      />
      
        <div className="px-4 py-3 w-72">
          <span className="text-slate-800 mr-3 uppercase text-lg font-bold">
            {recipe.name}
          </span>
          <div className="flex items-center space-x-5 ">
            <p className="text-sm  text-slate-800 cursor-auto mr-3 ">
              Calories : {recipe.caloriesPerServing}
            </p>
            <p className="text-sm  text-slate-800 cursor-auto ml-3">
              Cuisine : {recipe.cuisine}
            </p>
          </div>
          <div className="flex items-center space-x-5 ">
            <p className="text-sm  text-slate-800 cursor-auto mr-3">
              Time : {recipe.cookTimeMinutes} min
            </p>

            <p className="text-sm text-slate-800 cursor-auto ml-3">
              Difficulty : {recipe.difficulty}
            </p>
          </div>
        </div>
    </div>
    </Link>

  );
};

export default RecipeMenu;
