
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import RecipePage from './components/RecipePage';

function App() {


  return (
    <div>
      <Header/>
      <RouterProvider router = {appRouter}/>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/recipes",
    element:<RecipePage/>
  }
])

export default App;
