import BottomNavigation from "../components/BottomNavigation"
const NewRecipe = () => {
  return (
    <>
    <div className="px-10 py-10">
      <h3 className="text-[22px] font-semibold text-center pt-8 pb-6">New Recipe</h3>

      
      {/* <input
          type="text"
          className="pl-10 pr-4 py-2 w-full border-2 border-[#00B4BF] rounded-xl focus:outline-none focus:ring-2 hover:bg-sky-500"
        /> */}

<div className="mt-2">
        <label className="block text-sm">NAME</label>
        <input
          type="text"
          className="block p-2 w-full border-2 border-[#00B4BF] rounded-xl focus:outline-none focus:ring-2 bg-gray-100"
        />
      </div>

      <div className="mt-10">
        <label className="block text-sm text-gray-700">CATEGORY</label>
        <input
          type="text"
          className="block p-2 w-full border-2 border-[#AEAEAE] rounded-xl focus:outline-none focus:ring-2 bg-gray-100"
        />
      </div>
        
      <div className="mt-10">
        <label className="block text-sm text-gray-700">DESCRIPTION</label>
        <input
          type="text"
          className="block p-2 w-full border-2 border-[#AEAEAE] rounded-xl focus:outline-none focus:ring-2 bg-gray-100"
        />
      </div>

      <div className="mt-10">
        <label className="block text-sm text-gray-700">INGREDIENTS</label>
        <input
          type="text"
          className="block p-2 w-full border-2 border-[#AEAEAE] rounded-xl focus:outline-none focus:ring-2 bg-gray-100"
        />
      </div>
      
      </div>
    <BottomNavigation />
    </>
  )
}

export default NewRecipe