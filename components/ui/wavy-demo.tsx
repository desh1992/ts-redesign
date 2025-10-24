"use client";
import React from "react";
import { WavyBackground } from "./wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground 
      className="max-w-4xl mx-auto pb-40"
      colors={['#6366f1', '#8b5cf6', '#ec4899', '#06b6d4', '#10b981']}
      waveWidth={60}
      backgroundFill="white"
      blur={8}
      speed="fast"
      waveOpacity={0.3}
    >
      <p className="text-2xl md:text-4xl lg:text-7xl text-gray-800 font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <p className="text-base md:text-lg mt-4 text-gray-600 font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>
    </WavyBackground>
  );
}
