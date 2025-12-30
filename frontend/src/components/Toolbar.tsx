import { Paintbrush, Eraser, Undo2, Redo2 } from "lucide-react";
import { type ChangeEvent } from "react";

// Defining an interface for the props
interface ToolbarProps {
    strokeColor: string;
    setStrokeColor: (event: ChangeEvent<HTMLInputElement>) => void;
    eraseMode: boolean;
    setEraseMode: (mode: boolean) => void;
    onUndo: () => void;
    onRedo: () => void;
    strokeWeight: number;
    setStrokeWeight: (mode: number) => void;
}

const strokeWeightOptions = [
    { label: "S", value: 2 },
    { label: "M", value: 5 },
    { label: "L", value: 8 },
    { label: "XL", value: 12 }
];

// Destructuring the props object and typing it as ToolbarProps
const Toolbar = ({
    strokeColor,
    setStrokeColor,
    eraseMode,
    setEraseMode,
    onUndo,
    onRedo,
    strokeWeight,
    setStrokeWeight,
}: ToolbarProps) => {

  return (
    <div className="bg-[#383838] p-4 rounded-xl shadow-md flex flex-col space-y-1.5 w-12 h-111">

        {/* Color Picker Section */}
        <div className="flex flex-col items-center space-y-2">
            <label className="text-sm font-medium text-[#a7a7a7]">Color</label>
            <div className="relative">
                <input 
                    id="color-picker"
                    type="color" 
                    value={strokeColor}
                    onChange={setStrokeColor}
                    className="absolute opacity-0 w-8 h-8 cursor-pointer"
                />
                <div 
                    className="w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer"
                    style={{ backgroundColor: strokeColor }}
                ></div>
            </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#686868]"></div>

        {/* Tool Selection */}
        <div className="w-full flex flex-col items-center space-y-1">

            {/* Paintbrush */}
            <button 
                className={`
                    h-9 w-9 rounded-lg 
                    hover:bg-gray-400/10 transition-all transition-duration-500 
                    flex items-center justify-center cursor-pointer
                    ${!eraseMode ? 'bg-gray-400/10' : ''}
                `}
                onClick={() => setEraseMode(false)}
            >
                <Paintbrush className="h-5 w-5" />
            </button>

            {/* Eraser */}
            <button 
                className={`
                    h-9 w-9 rounded-lg 
                    hover:bg-gray-400/10 transition-all transition-duration-500 
                    flex items-center justify-center cursor-pointer
                    ${eraseMode ? 'bg-gray-400/10' : ''}
                `}
                onClick={() => setEraseMode(true)}
            >            
                <Eraser className="w-5 h-5" />
            </button>

            {/* Undo & Redo */}
            <button 
                className="
                    h-9 w-9 rounded-lg 
                    hover:bg-gray-400/10 transition-all transition-duration-500 
                    flex items-center justify-center cursor-pointer"
                onClick={() => onUndo()}
                >
                <Undo2 className="w-5 h-5" />
            </button>
            <button 
                className="
                    h-9 w-9 rounded-lg 
                    hover:bg-gray-400/10 transition-all transition-duration-500 
                    flex items-center justify-center cursor-pointer"
                onClick={() => onRedo()}
                >
                <Redo2 className="w-5 h-5" />
            </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#686868]"></div>

        {/* Stroke Sizes */}
        <div className="flex flex-col items-center space-y-2">
            <label className="text-sm font-medium text-[#a7a7a7]">Size</label>
            <div className="flex flex-col space-y-1">
                {strokeWeightOptions.map(({ label, value }) => (
                    <button
                        key={label}
                        onClick={() => setStrokeWeight(value)}
                        className={`
                            w-8 h-8 rounded-lg 
                            hover:bg-gray-400/10 transition-all transition-duration-500 
                            flex items-center justify-center cursor-pointer
                            ${strokeWeight === value ? 'bg-gray-400/10' : ''}
                        `}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Toolbar