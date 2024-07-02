import CategoriesCard from "../components/CategoriesCard"
import BottomNavigation from "../components/BottomNavigation"
import { useEffect, useState } from "react"
import axios from "axios"

const Categories = () => {
  //Define a state to store categories
  const [categories, setCategories] = useState([]);

  //Define a function to get categories
  const getCategories = async () => {
    const response = await axios.get(`${import.meta.env.VITE_RECIPE_API}/categories`);
    setCategories(response.data);
  }

  //Fetch data with useEffect
  useEffect(() => {
    getCategories();
  },[]);
  return (
      <>
          <div className="px-10 py-10">
      <h5 className="text-[20px] font-bold text-center pt-10 pb-6">Categories</h5>

      <div>
        {categories.map(category => (
          <CategoriesCard 
          key={category.id}
          image={`${import.meta.env.VITE_RECIPE_API}/${category.image}`}
          name={category.name}/>
        ))}
      </div>
    </div>

    <BottomNavigation />
      </>
  )
}

export default Categories