import { ReactSketchCanvas, type ReactSketchCanvasRef } from "react-sketch-canvas";
import { useRef } from "react";

export default function CreatePortraitPage() {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);

  return (
    <>
      <div>
        {/* <h1>Tools</h1>
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
          <button
            type="button"
            onClick={handleResetClick}
          >
            Reset
          </button>
        </div> */}
        <h1>Canvas</h1>
        <ReactSketchCanvas 
          className="canvas"
          ref={canvasRef} 
          style={{
            width: "450px",
            height: "500px",
            border: "2px solid #ff3b3bff",
            borderRadius: "8px",
            overflow: "hidden"
          }}
        />
      </div>
    </>
  )
}
