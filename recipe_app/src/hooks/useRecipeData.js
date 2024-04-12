import { useEffect, useState } from "react";
import { recipeData } from "../utils/constants";
import { useParams } from "react-router-dom";

const useRecipeData = () => {
  const [recipe, setRecipe] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    let data;

    if (!id) {
      data = await fetch(recipeData);
      const json = await data.json();
      setRecipe(json.recipes);
    }
    if (id) {
      data = await fetch(recipeData + "/" + id);
      const json = await data.json();
      setRecipe(json);
    }


  };
  return recipe;
};

export default useRecipeData;
