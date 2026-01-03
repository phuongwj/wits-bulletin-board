import { Pencil, Eraser, Undo2, Redo2, Trash2 } from "lucide-react";
import { type ChangeEvent } from "react";

// Defining an interface for the props
interface ToolbarProps {
    strokeColor: string;
    setStrokeColor: (event: ChangeEvent<HTMLInputElement>) => void;
    eraseMode: boolean;
    setEraseMode: (mode: boolean) => void;
    onClear: () => void;
    onUndo: () => void;
    onRedo: () => void;
    strokeWeight: number;
    setStrokeWeight: (mode: number) => void;
    canUndoRedo: {
        canUndo: boolean;
        canRedo: boolean;
    };
}

// Destructuring the props object and typing it as ToolbarProps
const Tools = ({
    strokeColor,
    setStrokeColor,
    eraseMode,
    setEraseMode,
    onClear,
    onUndo,
    onRedo,
    strokeWeight,
    setStrokeWeight,
    canUndoRedo,
}: ToolbarProps) => {

  return (
    <div className="bg-[#383838] p-4 rounded-xl shadow-md flex flex-col space-y-1.5 h-fit w-96">

        {/* Tool Selection */}
        <div className="flex items-center gap-3 flex-wrap">

            {/* Paintbrush */}
            <button 
                className={`
                    flex items-center gap-1 px-4 py-2
                    hover:bg-[#9FDEDE] border-2 border-[#464039] 
                    hover:text-black text-sm font-medium
                    shadow-md cursor-pointer
                    transition-all duration-200
                    ${!eraseMode ? 'bg-[#EDC95E] hover:bg-[#EDC95E]/80 text-black' : 'bg-transparent text-white'}
                `}
                onClick={() => setEraseMode(false)}
            >
                <Pencil className="h-4 w-4 mr-2" />
                Draw
            </button>

            {/* Eraser */}
            <button 
                className={`
                    flex items-center gap-1 px-4 py-2
                    hover:bg-[#9FDEDE] border-2 border-[#464039] 
                    hover:text-black text-sm font-medium
                    shadow-md cursor-pointer
                    transition-all duration-200
                    ${eraseMode ? 'bg-[#EDC95E] hover:bg-[#EDC95E]/80 text-black' : 'bg-transparent text-white'}
                `}
                onClick={() => setEraseMode(true)}
            >            
                <Eraser className="h4 w-4 mr-2" />
                Erase
            </button>

            {/* Clear */}
            <button 
                id="my-button"
                className="
                    flex items-center gap-1 px-4 py-2
                    hover:bg-[#9FDEDE] border-2 border-[#464039] 
                    hover:text-black text-sm font-medium
                    shadow-md cursor-pointer
                    transition-all duration-200"
                onClick={() => onClear()}
                >
                <Trash2 className="h-4 w-4 mr-2"/>
                Clear
            </button>

            {/* Undo */}
            <button 
                className={`
                    flex items-center gap-1 px-4 py-2
                    border-2 border-[#464039] 
                    text-sm font-medium
                    shadow-md
                    transition-all duration-200
                    ${canUndoRedo.canUndo 
                        ? 'bg-transparent text-white hover:bg-[#9FDEDE] hover:text-black cursor-pointer' 
                        : 'bg-transparent text-white/10'
                    }
                `}
                onClick={() => onUndo()}
                disabled={!canUndoRedo.canUndo}
                >
                <Undo2 className="h-4 w-4 mr-2" />
                Undo
            </button>

            {/* Redo */}
            <button 
                className={`
                    flex items-center gap-1 px-4 py-2
                    border-2 border-[#464039] 
                    text-sm font-medium
                    shadow-md 
                    transition-all duration-200
                    ${canUndoRedo.canRedo 
                        ? 'bg-transparent text-white hover:bg-[#9FDEDE] hover:text-black cursor-pointer' 
                        : 'bg-transparent text-white/10'
                    }
                `}
                onClick={() => onRedo()}
                disabled={!canUndoRedo.canRedo}
                >
                <Redo2 className="h-4 w-4 mr-2" />
                Redo
            </button>
        </div>

        {/* Color Slider */}
        <div className="flex items-center gap-2">
            <span className="text-[#a7a7a7]">Size:</span>
            <input 
                id="stroke-size"
                type="range" 
                min="1"
                max="10"
                value={strokeWeight}
                step="1"
                onInput={e => setStrokeWeight(Number(e.currentTarget.value))}
                className="w-24"
            />
        </div>

        {/* Color Picker Section */}
        <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-[#a7a7a7]">Color:</label>
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
    </div>
  )
}

export default Tools