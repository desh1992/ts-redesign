"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  bottomHeight = 0.8,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  bottomHeight?: number; // 0-1, where 1 is bottom of container
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      
      // Define the bottom height for all waves using the prop
      const waveBottomHeight = h * bottomHeight;
      const topHeight = h * 0.1; // Small margin from top
      
      // Start from the bottom-left corner
      ctx.moveTo(0, h);
      ctx.lineTo(0, waveBottomHeight);
      
      for (x = 0; x < w; x += 5) {
        // Generate wave amplitude that varies between top and bottom
        // Reduce amplitude by 0.6 to make waves shorter and more subtle
        var waveAmplitude = noise(x / 800, 0.3 * i, nt) * (waveBottomHeight - topHeight) * 0.6;
        // Ensure all waves start from the same bottom height
        var y = waveBottomHeight - waveAmplitude;
        ctx.lineTo(x, y);
      }
      
      // Complete the shape by going to bottom-right corner
      ctx.lineTo(w, waveBottomHeight);
      ctx.lineTo(w, h);
      ctx.closePath();
      
      // Fill the wave shape with gradient for better color differentiation
      const gradient = ctx.createLinearGradient(0, 0, w, 0);
      const baseColor = waveColors[i % waveColors.length];
      const darkerColor = waveColors[(i + 1) % waveColors.length];
      
      gradient.addColorStop(0, baseColor);
      gradient.addColorStop(0.5, darkerColor);
      gradient.addColorStop(1, baseColor);
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Add stroke for better definition
      ctx.lineWidth = 1;
      ctx.strokeStyle = baseColor;
      ctx.stroke();
    }
  };

  let animationId: number;
  const render = () => {
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
