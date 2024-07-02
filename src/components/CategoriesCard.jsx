
const CategoriesCard = ({name, image}) => {
  return (
    <div className="flex items-center bg-[#F6F6F6] rounded-lg drop-shadow-lg mb-4">

            <div className="flex-1  items-center font-semibold pl-4 mt-2">
                <span className="text-lg">{name}</span>
            </div>

            <div className="flex  w-16 h-16 rounded-full ">
                <img src={image} alt={name} className="h-[41px] w-[43px]" />
            </div>

        </div>
  )
}

export default CategoriesCard