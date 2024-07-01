
import { FireIcon, HeartIcon } from "@heroicons/react/24/outline"

const RecipeCategories = ({image, name, kcal, min}) => {
    return (
        <div className="flex items-center bg-[#F6F6F6]  rounded-lg drop-shadow-lg mb-4">
            <div className="w-16 h-16 rounded-full ">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 ml-4">
                <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">{name}</p>
                <HeartIcon className="w-6 h-6"/>
                </div>
            
            </div>

            <div className="flex items-center text-gray-500 text-sm mt-2">
                <FireIcon className="w-4 h-4 mr-1"/>
                <span>{kcal}</span>
                <span className="mx-2">{min}</span>
            </div>

        </div>
    )
}

export default RecipeCategories