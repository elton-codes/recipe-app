import RecipeCategories from "../components/RecipeCategories"
import recipeOneImage from "../assets/images/recipe1.png"
import recipeTwoImage from "../assets/images/recipe2.png"
import recipeThreeImage from "../assets/images/recipe3.png"
import recipeFourImage from "../assets/images/recipe4.png"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { HeartIcon } from "@heroicons/react/24/outline"

const Categories = () => {
  return (
    <div className="px-10 py-10">
      <h3 className="text-[22px] font-semibold text-center pt-7">Search</h3>
      <div>
        <h3 className="text-[22px] font-semibold pt-9 tracking-tight">What is in your kitchen?</h3>
        <p className="text-[#424242] tracking-tight">Enter some ingredients</p>
      </div>

      <div className="relative mt-5 mb-5">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 size-[19px]" />

        <input
          type="text"
          placeholder="Type your ingredients"
          className="pl-10 pr-4 py-2 w-full border-2 border-[#00B4BF] rounded-xl focus:outline-none focus:ring-2 hover:bg-sky-500"
        />
      </div>

      <div>
        <RecipeCategories 
        image = {recipeOneImage}
        name="Chorizo & mozzarella gnocchi bake"
        kcal="350 Kcal"
        min="45 min" />
        <RecipeCategories 
        image={recipeTwoImage}
        name="Coconut & squash curry"
        kcal="125 Kcal"
        min="20 min" />
        <RecipeCategories 
          image={recipeThreeImage}
          name="Huevos Rancheros"
        kcal="250 Kcal"
        min="30 min" />
        <RecipeCategories 
          image={recipeFourImage}
          name="Black forest Gateau"
        kcal="250 Kcal"
        min="45 min" />
        
      </div>

      </div>

  )
}

export default Categories