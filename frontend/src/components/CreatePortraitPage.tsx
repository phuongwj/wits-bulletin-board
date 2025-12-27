import { ReactSketchCanvas, type ReactSketchCanvasRef } from "react-sketch-canvas";
import { useRef, useState } from "react";

export default function CreatePortraitPage() {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [eraseMode, setEraseMode] = useState(false);

  const handlePenClick = () => {
    setEraseMode(false);
    canvasRef.current?.eraseMode(false);
  }

  const handleEraserClick = () => {
    setEraseMode(true);
    canvasRef.current?.eraseMode(true);
  }

  const handleUndoClick = () => {
    canvasRef.current?.undo();
  }

  const handleRedoClick = () => {
    canvasRef.current?.redo();
  }

  const handleClearClick = () => {
    canvasRef.current?.clearCanvas();
  }

  const handleResetClick = () => {
    canvasRef.current?.resetCanvas();
  }

  return (
    <>
      <div>
        <h1>Tools</h1>
        <div>
          <button
            type="button"
            disabled={!eraseMode}
            onClick={handlePenClick}
          >
            Pen
          </button>
        </div>
      </div>
    </>
  )
}
