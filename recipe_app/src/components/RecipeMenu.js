import React from 'react'
import { Link } from 'react-router-dom'

const RecipeMenu = ({recipe}) => {

  const {servings} = recipe;

  const data = servings; 

  if(!recipe) return <h1>Loading...</h1>
  return (
    
    // <div className=' items-center justify-center h-auto w-9/12   rounded-lg '>
    // <div className='w-[100%] group bg-blue-200 m-4 inline-block'>
    // <Link to={"/recipes"}>
    //     <div className='bg-[#333] text-white m-2 rounded-lg'>
    //       <h1 className='text-2xl'>{recipe.name}</h1>
    //     </div>
    //     </Link>    
    //     <div className='flex justify-between invisible h-0 group-hover:visible group-hover:h-8'>
    //         <h6 className='m-1'>Calories   : {recipe.caloriesPerServing}  </h6>
    //         <h6 className='m-1'>Cuisine    : {recipe.cuisine}  </h6>
    //         <h6 className='m-1'>  </h6>
    //         <h6 className='m-1'>Difficulty : {recipe.difficulty} </h6>
    //     </div>
    //     </div>
        
    // </div>

    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl m-3">
    
      <img src={recipe.image} alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
      <Link to={{pathname:"/recipes",state:data}} >
      <div className="px-4 py-3 w-72">
        <span className="text-slate-800 mr-3 uppercase text-lg font-bold">{recipe.name}</span>
        <div className="flex items-center space-x-5 ">
        <p className="text-sm  text-slate-800 cursor-auto mr-3 ">▪️ Calories : {recipe.caloriesPerServing}</p>
        <p className="text-sm  text-slate-800 cursor-auto ml-3">▪️ Cuisine : {recipe.cuisine}</p>
        </div>
        <div className="flex items-center space-x-5 ">
          <p className="text-sm  text-slate-800 cursor-auto mr-3">▪️ Time : {recipe.cookTimeMinutes} min</p>
          
          <p className="text-sm text-slate-800 cursor-auto ml-3">▪️ Difficulty : {recipe.difficulty}</p>
          

        </div>
        
      </div>
    </Link>
  </div>
  )
}

export default RecipeMenu