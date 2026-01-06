import { useNavigate } from 'react-router';
import CreatePortrait from './CreatePortrait';

export default function BulletinBoard() {
    let navigate = useNavigate();

  return (
    <div className="flex flex-col">
        Welcome to Bulletin Board (aka main Page)

        <button 
            onClick={() => navigate("/create")}
            className="hover:text-emerald-500 transition duration-200 cursor-pointer"
        >
            Click here to go to CreatePortrait Page
        </button>
        <button 
            onClick={() => navigate("/about")}
            className="hover:text-emerald-500 transition duration-200 cursor-pointer"
        >
            Click here to go to About
        </button>
         <button 
            onClick={() => navigate("/contact")}
            className="hover:text-emerald-500 transition duration-200 cursor-pointer"
        >
            Contact Us
        </button>
    </div>
  )
}
