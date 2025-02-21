import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa"; // Using an icon for the button

const ManualScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // 🔹 Show button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300); // Show after scrolling 300px
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 🔹 Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button onClick={scrollToTop} style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}>
      <FaArrowUp />
    </Button>
  );
};

export default ManualScrollToTop;

// 🔹 Styled Components
const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #0092cf;
  color: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: opacity 0.3s, transform 0.3s;
  z-index: 1000;

  &:hover {
    background-color: #007bb5;
    transform: scale(1.1);
  }
`;
