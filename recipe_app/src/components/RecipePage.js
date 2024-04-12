import React from "react";
import useRecipeData from "../hooks/useRecipeData";

const RecipePage = () => {
  const recipe = useRecipeData();

  if (!recipe) return;
  console.log(recipe);

  const { name, image, ingredients, instructions } = recipe;

  return (
    <div className="w-9/12 m-auto">
      <div>
        {/* <img src={image} alt='food_image'/> */}
        <div className="container mx-auto p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 ">{name}</h1>

            <img
              className="mb-4 rounded-lg shadow-md w-full h-96 object-cover"
              src={image}
              alt="food_image"
            />

            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside mb-4">
              {ingredients.map((e) => (
                <li className="mb-2">{e}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside mb-6">
              {instructions.map((e) => (
                <li className="mb-2">{e}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
