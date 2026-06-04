"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the device is touch-enabled
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      (window.matchMedia && window.matchMedia("(max-width: 768px)").matches);

    if (isTouchDevice) {
      return;
    }

    // Add class to body to hide the default cursor
    document.body.classList.add("no-touch-cursor");

    const cursor = cursorRef.current;
    const ring = ringRef.current;

    if (!cursor || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    };

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      animationFrameId = requestAnimationFrame(animRing);
    };

    // Global event listener for hover class additions
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest(".proj-card") ||
          target.closest(".skill-card") ||
          target.closest(".cert-card") ||
          target.closest(".soc-btn") ||
          target.style.cursor === "pointer")
      ) {
        ring.classList.add("hover");
      } else {
        ring.classList.remove("hover");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    animRing();

    return () => {
      document.body.classList.remove("no-touch-cursor");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" id="cursor" />
      <div ref={ringRef} className="cursor-ring" id="cursorRing" />
    </>
  );
}
