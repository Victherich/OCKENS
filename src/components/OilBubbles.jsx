import React, { useEffect } from "react";
import "../../src/index.css"; // Ensure correct path

const OilBubbles = () => {
  useEffect(() => {
    const container = document.getElementById("bubbles-container");

    if (!container) return; // Ensure container exists

    const createBubble = () => {
      const bubble = document.createElement("div");
      bubble.className = "oil-bubble";
      bubble.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      bubble.style.animationDuration = `${Math.random() * 3 + 100}s`; // Random speed
      bubble.style.width = `${Math.random() * 15 + 10}px`; // Random size
      bubble.style.height = bubble.style.width; // Maintain circle shape

      container.appendChild(bubble);

      // Remove bubble after animation
      setTimeout(() => {
        bubble.remove();
      }, 5000);
    };

    const interval = setInterval(createBubble, 200); // Create a bubble every 200ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <div id="bubbles-container" className="bubbles-container"></div>;
};

export default OilBubbles;
