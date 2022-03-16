import React, {useEffect, useRef, useState, MouseEvent } from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const DrawingBoard = () => {

    const color = useSelector((state:RootState) => state.color.value)
    const time = useSelector((state:RootState) => state.reset.value)

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const contextRef = useRef<CanvasRenderingContext2D | null>(null)
    const [isDrawing, setIsDrawing] = useState(false);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const canvas: HTMLCanvasElement = canvasRef.current!; //as HTMLCanvasElement
        canvas.width = window.innerWidth * 2
        canvas.height = window.innerHeight * 2
        canvas.style.width = `${window.innerWidth}px`
        canvas.style.height = `${window.innerHeight}px`

        const clientRect = canvas.getBoundingClientRect()
        setOffsetX(clientRect.left)
        setOffsetY(clientRect.top)

        const context: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;
        context.lineCap = "round"
        context.strokeStyle = "black"
        context.lineWidth = 10
        contextRef.current = context
    }, [time]);

    useEffect(() => {
        if (contextRef.current) {
            contextRef.current.strokeStyle = color
        }
    }, [color]);
    
    const startDrawing = (event: MouseEvent) => {
        const {clientX, clientY} = event;
        contextRef.current?.beginPath()
        contextRef.current?.moveTo((clientX - offsetX) *2, ((clientY - offsetY) * 2))
        setIsDrawing(true)
    }

    const drawing = (event: MouseEvent) => {
        if (!isDrawing) return
        const {clientX, clientY} = event
        contextRef.current?.lineTo((clientX - offsetX) *2, ((clientY - offsetY) * 2))
        contextRef.current?.stroke()
    }

    const finishDrawing = () => {
        contextRef.current?.closePath()
        setIsDrawing(false)
    }

  return (
    <canvas
      className="w-full h-[600px] bg-gray-200"
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={drawing}
      onMouseUp={finishDrawing}
    ></canvas>
  );
};

export default DrawingBoard;
