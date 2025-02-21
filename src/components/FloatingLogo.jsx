import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../Images/logo2.png"; // Change this to your actual logo

// 🔹 Animation for moving left ↔ right
const moveLogo = keyframes`
  0% { left: 0; }
  50% { left: calc(100% - 100px); } /* Adjust '100px' based on logo size */
  100% { left: 0; }
`;

// 🔹 Styled Component
const FloatingLogoImg = styled.img`
  position: fixed;
  bottom: 20px;
  left: 0;
  width: 80px;  /* Adjust size as needed */
  height: auto;
  z-index: 9999; /* Ensures it stays above everything */
  animation: ${moveLogo} 30s linear infinite; /* Adjust timing if needed */
`;

const FloatingLogo = () => {
  return <FloatingLogoImg src={logo} alt="Company Logo" />;
};

export default FloatingLogo;
