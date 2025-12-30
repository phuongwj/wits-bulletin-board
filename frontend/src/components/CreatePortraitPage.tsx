import { ReactSketchCanvas, type ReactSketchCanvasRef } from "react-sketch-canvas";
import { type ChangeEvent, useRef, useState } from "react";
import Toolbar from './Toolbar';
import CanvasAction from './CanvasAction';

export default function CreatePortraitPage() {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [strokeColor, setStrokeColor] = useState("#6497eb");
  const [eraseMode, setEraseMode] = useState(false);
  const [strokeWeight, setStrokeWeight] = useState(2);

  const handleEraserClick = (mode: boolean) => {
    setEraseMode(mode);
    canvasRef.current?.eraseMode(mode);
  };

  const handleStrokeColor = (event: ChangeEvent<HTMLInputElement>) => {
    setStrokeColor(event.target.value);
  };

  const handleUndo = () => {
    canvasRef.current?.undo();
  }

  const handleRedo = () => {
    canvasRef.current?.redo();
  }

  const handleStrokeWeight = (mode: number) => {
    setStrokeWeight(mode);
  }

  const handleClearCanvas = () => {
    canvasRef.current?.clearCanvas();
  }

  return (
    <>
      <div className="flex gap-4">

        {/* Toolbar */}
        <Toolbar
          strokeColor={strokeColor}
          setStrokeColor={handleStrokeColor}
          eraseMode={eraseMode}
          setEraseMode={handleEraserClick}
          onUndo={handleUndo}
          onRedo={handleRedo}
          strokeWeight={strokeWeight}
          setStrokeWeight={handleStrokeWeight}
        />

        {/* Canvas and Actions */}
        <div className="flex flex-col gap-2">

          {/* Canvas to Draw */}
          <ReactSketchCanvas 
            className="canvas"
            ref={canvasRef} 
            strokeColor={strokeColor}
            strokeWidth={strokeWeight}
            eraserWidth={strokeWeight}
            style={{
              width: "250px",
              height: "280px",
              border: "1px",
              borderRadius: "8px",
              overflow: "hidden"
            }}
          />

          {/* Clear Canvas and Save Canvas */}
          <CanvasAction
            onClear={handleClearCanvas}
          />
        </div>
      </div>
    </>
  )
}
