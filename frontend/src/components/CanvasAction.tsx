import { Trash2 } from "lucide-react";
import React from 'react';

// Defining an interface for the props
interface CanvasActionProps {
    onClear: () => void;
}

const CanvasAction = ({
    onClear,
}: CanvasActionProps) => {
  return (
    <div>

        {/* Trash */}
        <button 
            className="
                h-9 w-9 rounded-lg 
                hover:text-red-500/90 hover:bg-gray-400/10 transition-all transition-duration-500 
                flex items-center justify-center cursor-pointer"
            onClick={() => onClear()}
            >
            <Trash2 className="h-5 w-5"/>
        </button> 
    </div>
  )
}

export default CanvasAction;