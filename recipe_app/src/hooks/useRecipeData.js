import { useEffect, useState } from "react";
import { recipeData } from "../utils/constants";

const useRecipeData = () => {

    const[recipe,setRecipe] = useState(null);
    
    
    useEffect(()=>{fetchdata()},[])
    const fetchdata = async () => {
        const data = await fetch (recipeData)
        const json = await data.json();
        setRecipe(json.recipes);
        
    }
    return recipe;
    
}


export default useRecipeData;