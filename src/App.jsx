
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Recipes from './pages/Recipes'
import Welcome from './pages/Welcome' 
import Categories from './pages/Categories'
import "./App.css"

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Welcome />},
    {path: '/recipes', element: <Recipes />},
    {path: '/categories', element: <Categories />}
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
    
  )
} 
export default App
