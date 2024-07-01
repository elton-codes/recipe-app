import { useNavigate } from "react-router-dom";
import welcomeImage from "../assets/images/welcome-image.png";


export default function Welcome() {
    const navigate = useNavigate();
    return (
        <div
            onTouchEnd={() => navigate('/recipes')}
            className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('./assets/images/welcome-bg-image.png')] bg-cover bg-center h-screen flex flex-col place-items-center place-content-center">

            <h1 className="text-white text-center text-4xl pb-8">Savory & <br />Sweet</h1>
            <img src={welcomeImage} alt="Welcome image" className="rounded-full border-8 border-[#00B4BF] hover:bg-sky-500" />
        </div>
    )
}