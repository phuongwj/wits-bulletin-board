import { ReactSketchCanvas, type ReactSketchCanvasRef } from "react-sketch-canvas";
import { type ChangeEvent, useRef, useState } from "react";
import Tools from '../components/Tools';
import Form from '../components/Form';

export default function CreatePortrait() {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [strokeColor, setStrokeColor] = useState("#6497eb");
  const [eraseMode, setEraseMode] = useState(false);
  const [strokeWeight, setStrokeWeight] = useState(2);
  const [canUndoRedo, setCanUndoRedo] = useState({ canUndo: false, canRedo: false});

  const updateUndoRedoState = async () => {
    if (canvasRef.current) {
      const paths = await canvasRef.current.exportPaths();
      const canUndo = paths.length > 0;
      setCanUndoRedo(prev => ({ ...prev, canUndo }));
    }
  };

  const handleEraserClick = (mode: boolean) => {
    setEraseMode(mode);
    canvasRef.current?.eraseMode(mode);
  };

  const handleStrokeColor = (event: ChangeEvent<HTMLInputElement>) => {
    setStrokeColor(event.target.value);
  };

  const handleUndo = () => {
    canvasRef.current?.undo();
    setCanUndoRedo(prev => ({ canUndo: prev.canUndo, canRedo: true}));
    updateUndoRedoState();
  }

  const handleRedo = () => {
    canvasRef.current?.redo();
    updateUndoRedoState();
  }

  const handleStrokeWeight = (mode: number) => {
    setStrokeWeight(mode);
  }

  const handleClearCanvas = () => {
    canvasRef.current?.clearCanvas();
    setCanUndoRedo({ canUndo: false, canRedo: false });
  }

  return (
    <>
      <div className="flex gap-4 p-4">

        {/* Left side: Canvas + Tools */}
        <div className="flex flex-col gap-2 relative">

          {/* Canvas to Draw */}
          <div
            className="bg-teal-100 p-4 rounded-sm w-fit"
            style={{
              transform: 'rotate(1deg)',
              boxShadow: 'var(--shadow-note),'
            }}
          >
            <div className="pin"></div>
            <ReactSketchCanvas
              ref={canvasRef} 
              strokeColor={strokeColor}
              strokeWidth={strokeWeight}
              eraserWidth={strokeWeight}
              onChange={updateUndoRedoState}
              style={{
                width: "300px",
                height: "300px"
              }}
            />
          </div>

          

          {/* Toolbar */}
          <Tools
            strokeColor={strokeColor}
            setStrokeColor={handleStrokeColor}
            eraseMode={eraseMode}
            setEraseMode={handleEraserClick}
            onClear={handleClearCanvas}
            onUndo={handleUndo}
            onRedo={handleRedo}
            strokeWeight={strokeWeight}
            setStrokeWeight={handleStrokeWeight}
            canUndoRedo={canUndoRedo}
          />
        </div>

        {/* Right side: Form */}
        {/* <Form/> */}
      </div>
    </>
  )
}
