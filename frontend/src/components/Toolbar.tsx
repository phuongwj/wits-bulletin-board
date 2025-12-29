import { Paintbrush, Eraser, Undo2, Redo2 } from "lucide-react";
import { useState, type ChangeEvent } from "react";
import '../styles/Toolbar.scss';

export default function Toolbar() {
    const [strokeColor, setStrokeColor] = useState("#6497eb");

    const onColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStrokeColor(event.target.value);
    }

  return (
    <div className="bg-[#383838] p-4 rounded-xl shadow-md flex flex-col space-y-6 w-20">
        {/* Color Picker Section */}
        <div className="flex flex-col items-center space-y-2">
            <label className="text-sm font-medium text-[#a7a7a7]">Color</label>
            <div className="relative">
                <input 
                    id="color-picker"
                    type="color" 
                    value={strokeColor}
                    onChange={onColorChange}
                    className="absolute opacity-0 w-10 h-10 cursor-pointer"
                />
                <div 
                    className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
                    style={{ backgroundColor: strokeColor }}
                    onClick={() => document.getElementById('color-picker')?.click()}
                ></div>
            </div>
        </div>

        {/* Tool Selection */}
        <div className="w-full flex flex-col items-center space-y-3">

            {/* Paintbrush & Eraser */}
            <button className="h-9 w-9 rounded-lg hover:bg-gray-400/10 transition-all transition-duration-500 flex items-center justify-center cursor-pointer">
                <Paintbrush className="h-6 w-6" />
            </button>
            <button className="h-9 w-9 rounded-lg hover:bg-gray-400/10 transition-all transition-duration-500 flex items-center justify-center cursor-pointer">            
                <Eraser className="w-5 h-5" />
            </button>

            {/* Undo & Redo */}
            <button className="h-9 w-9 rounded-lg hover:bg-gray-400/10 transition-all transition-duration-500 flex items-center justify-center cursor-pointer">
                <Undo2 className="w-5 h-5" />
            </button>
            <button className="h-9 w-9 rounded-lg hover:bg-gray-400/10 transition-all transition-duration-500 flex items-center justify-center cursor-pointer">
                <Redo2 className="w-5 h-5" />
            </button>
        </div>
        <div className="flex flex-col items-center space-y-2">
            <label className="text-sm font-medium text-[#a7a7a7]">Size</label>
            <div className="flex flex-col space-y-1">
                <button className="w-8 h-8 rounded-lg hover:bg-gray-400/10 transition-all transition-duration-500 flex items-center justify-center cursor-pointer">S</button>
                <button className="w-8 h-8 rounded-lg hover:bg-gray-400/10 transition-all transition-duration-500 flex items-center justify-center cursor-pointer">M</button>
                <button className="w-8 h-8 rounded-lg hover:bg-gray-400/10 transition-all transition-duration-500 flex items-center justify-center cursor-pointer">L</button>
                <button className="w-8 h-8 rounded-lg hover:bg-gray-400/10 transition-all transition-duration-500 flex items-center justify-center cursor-pointer">XL</button>
            </div>
        </div>
    </div>
  )
}
