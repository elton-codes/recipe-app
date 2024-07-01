
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Recipes from './pages/Recipes'
import Welcome from './pages/Welcome' 
import Categories from './pages/Categories'
import "./App.css"
import CatTiles from './pages/CatTiles'
import Favorites from './pages/Favorites'
import NewRecipe from './pages/NewRecipe'

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Welcome />},
    {path: '/recipes', element: <Recipes />},
    {path: '/categories', element: <Categories />},
    {path: '/cattiles', element: <CatTiles />},
    {path: '/favorites', element: <Favorites />},
    {path: '/recipes/new', element: <NewRecipe />},
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
    
  )
} 
export default App
