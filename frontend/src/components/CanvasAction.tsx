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
        <button className="">
            <Trash2 className="h-5 w-5"/>
        </button> 
    </div>
  )
}

export default CanvasAction;