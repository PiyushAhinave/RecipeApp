
import useRecipeData from '../hooks/useRecipeData'
import RecipeMenu from './RecipeMenu';

const Home = () => {
const recipe = useRecipeData();


if(!recipe) return;

  return (
    
    <div className='flex flex-wrap justify-center w-screen'>
      
       {recipe.map((e)=><RecipeMenu recipe={e} key={e.id}/>)}
       
    </div>
  
  )
}

export default Home