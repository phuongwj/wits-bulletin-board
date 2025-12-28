import { ReactSketchCanvas, type ReactSketchCanvasRef } from "react-sketch-canvas";
import { useRef, useState } from "react";
import '../styles/CreatePortraitPage.scss';


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
          <button
            type="button"
            disabled={eraseMode}
            onClick={handleEraserClick}
          >
            Eraser
          </button>
          <button
            type="button"
            onClick={handleUndoClick}
          >
            Undo
          </button>
          <button
            type="button"
            onClick={handleRedoClick}
          >
            Redo
          </button>
          <button
            type="button"
            onClick={handleClearClick}
          >
            Clear
          </button>
        </div>
        <h1 id="hello">Canvas</h1>
        <ReactSketchCanvas ref={canvasRef} canvasColor="transparent" width="1000px" height="400px"/>
      </div>
    </>
  )
}
