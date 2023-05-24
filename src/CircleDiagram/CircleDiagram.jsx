import React, { useRef, useEffect } from "react";
import "./CircleDiagram.css";

const CircleDiagram = ({ totalSigns, neededSigns }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Calculate the ratio of neededSigns to totalSigns
    const ratio = totalSigns / neededSigns;

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the outer circle
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.strokeStyle = "lightgray";
    context.lineWidth = 10;
    context.stroke();

    // Draw the progress arc
    const startAngle = -Math.PI / 2;
    const endAngle = startAngle + 2 * Math.PI * ratio;
    context.beginPath();
    context.arc(centerX, centerY, radius, startAngle, endAngle);
    context.strokeStyle = "green";
    context.lineWidth = 10;
    context.stroke();

    // Display the values in the center
    const mainText = totalSigns.toString();
    const subText = `підписів з ${neededSigns}`;
    context.font = "bold 36px Georgia";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(mainText, centerX, centerY - 10);
    context.font = "16px Georgia";
    context.fillText(subText, centerX, centerY + 15);
  }, [totalSigns, neededSigns]);

  return <canvas ref={canvasRef} width={200} height={200} />;
};

export default CircleDiagram;
