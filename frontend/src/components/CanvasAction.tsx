import { Trash2 } from "lucide-react";

// Defining an interface for the props
interface CanvasActionProps {
    onClear: () => void;
}

const CanvasAction = ({
    onClear,
}: CanvasActionProps) => {
  return (
    <div className="flex flex-row justify-center space-x-2">
        {/* Clear Canvas */}
        <button 
            id="my-button"
            className="
                h-9 w-9 rounded-lg 
                hover:text-red-500/90 hover:bg-gray-400/10 transition-all transition-duration-500 
                flex items-center justify-center cursor-pointer"
            onClick={() => onClear()}
            >
            <Trash2 className="h-5 w-5"/>
        </button>

        {/* Save Portrait */}
        <button 
            className="
                bg-[#383838] text-white px-6 py-2 rounded-lg 
                hover:bg-gray-400/20 transition-all transition-duration-500 cursor-pointer">
            Save Portrait
        </button>
    </div>
  )
}

export default CanvasAction;