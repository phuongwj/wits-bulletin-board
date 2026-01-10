import { ReactSketchCanvas, type ReactSketchCanvasRef } from "react-sketch-canvas";
import { type ChangeEvent, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft } from 'lucide-react';
import Tools from '../components/Tools';
import Form from '../components/Form';
import { supabase } from "../supabase";

export default function CreatePortrait() {
  let navigate = useNavigate();

  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [strokeColor, setStrokeColor] = useState("#6497eb");
  const [eraseMode, setEraseMode] = useState(false);
  const [strokeWeight, setStrokeWeight] = useState(2);
  const [canUndoRedo, setCanUndoRedo] = useState({ canUndo: false, canRedo: false});

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

  const updateUndoRedoState = async () => {
    if (canvasRef.current) {
      const paths = await canvasRef.current.exportPaths();
      const canUndo = paths.length > 0;
      setCanUndoRedo(prev => ({ ...prev, canUndo }));
    }
  };

  const handleStrokeWeight = (mode: number) => {
    setStrokeWeight(mode);
  }

  const handleClearCanvas = () => {
    canvasRef.current?.clearCanvas();
    setCanUndoRedo({ canUndo: false, canRedo: false });
  }

  const exportCanvasImage = async (): Promise<string | null> => {
    if (!canvasRef.current) {
      console.log("No canvas references");
      return null;
  }

    try {
      const dataUrl = await canvasRef.current.exportImage("png");
      return dataUrl;
    } catch (err) {
      console.error("Failed to export canvas", err);
      return null;
    }
  };

  const handlePinToBoard = async (name: string, bio: string) => {
    const imageDataUrl = await exportCanvasImage();
    if (!imageDataUrl) {
      console.log("No image found :(")
      return;
    }

    const { error } = await supabase
      .from("pins")
      .insert({
        name,
        bio,
        image_url: imageDataUrl,
      });

    if (error) {
      console.error("Error inserting pin: ", error);
      return;
    }

    console.log({ name, bio, imageDataUrl });
  };

  return (
    <>
      <div className="flex flex-col items-center pt-10">
      
        {/* Header: Back Button + Draw Title */}
        <div className="flex flex-row items-center justify-center space-x-60 w-full mb-4">
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
          <Form
            onSave={handlePinToBoard}
          />
        </div>
      </div>
    </>
  )
}