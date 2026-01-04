import { ReactSketchCanvas, type ReactSketchCanvasRef } from "react-sketch-canvas";
import { type ChangeEvent, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft } from 'lucide-react';
import Tools from '../components/Tools';
import Form from '../components/Form';

export default function CreatePortrait() {
  let navigate = useNavigate();

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
      <div className="flex flex-col items-center">

        {/* Header: Back Button + Draw Title */}
        <div className="flex flex-row w-full items-center justify-between mb-10">
          <button 
            className="inline-flex items-center gap-2 w-fit h-fit text-lg text-white/50 hover:text-white transition duration-200 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-5 w-5"/>
            Back to board
          </button>

          <div
            className="bg-[#FFF0B3] px-6 py-3"
            style={{
              transform: 'rotate(-1deg)',
              boxShadow: 'var(--shadow-note)',
            }}
          >
            <p className="text-[#38332E] text-3xl">
              Draw Your Portrait 🎨
            </p>
          </div>
        </div>

        {/* Main: Canvas + Tools + Form */}
        <div className="flex gap-4 p-4">

          {/* Left side: Canvas + Tools */}
          <div className="flex flex-col gap-2 relative">

            {/* Canvas to Draw */}
            <div
              className="bg-teal-100 p-4 w-fit"
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
          <Form/>
        </div>
      </div>
    </>
  )
}
