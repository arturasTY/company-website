"use client";

import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }) {
  const options = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: true,
  };
  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
