import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import heroImg1 from '../Images/heroImg1.jpg'
import heroImg2 from '../Images/heroImg2.jpg'
import heroImg3 from '../Images/heroImg3.jpg'
import { useNavigate } from "react-router-dom";

const images = [
    {
        src: heroImg1, 
        title: "Precision in Surveying, Excellence in Oil Services",
        description: "Delivering world-class surveying, hydrographic, and oil servicing solutions with cutting-edge technology and expertise.",
        buttonText: "Learn More",
        link: "aboutus" // Points to the About Page
      },
      
      {
        src: heroImg2,
        title: "Expert Solutions in Surveying & Oil Services",
        description: "From land & hydrographic surveys to oil servicing, we deliver precision, efficiency, and reliability.",
        buttonText: "Explore Services",
        link: "ourservices" // Points to the Our Services Page
      },
      
      {
        src: heroImg3,
        title: "Let's Work Together",
        description: "Reach out to us for expert surveying and oil servicing solutions.",
        buttonText: "Contact Us",
        link: "contactus" // Points to the Contact Us Page
      }
      
];

// Keyframe animation for zoom-in effect
const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.5);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translatex(100px);
  }
  to {
    opacity: 1;
    transform: translatex(0);
  }
`;

// Hero Section Styling
const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.bg}) center/cover no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.active ? "1" : "0")};
//   transition: opacity 1s ease-in-out;
  animation: ${zoomIn} 6s infinite alternate ease-in-out;
`;

const Content = styled.div`
  position: absolute;
  top:30%;
  left: 10%;
//   transform: translateY(-50%);
  color: white;
  max-width: 500px;
  z-index: 2;
  animation: ${fadeIn} 3s ease-in-out;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* Adds a soft shadow */
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); /* Subtle shadow for readability */
`;


const Button = styled.button`
  background: white;
  color: #0092CF;
  border: none;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s ease-in-out;

  &:hover {
    color: white;
    background: #0092CF;
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
//   background: rgba(0, 0, 0, 0.1);
`;

// Main Hero Component
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000); // Change every 9 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      {images.map((item, index) => (
        <Background key={index} bg={item.src} active={index === currentIndex} />
      ))}
      <Overlay />
      <Content key={currentIndex}>
        <Title>{images[currentIndex].title}</Title>
        <Description>{images[currentIndex].description}</Description>
        <Button onClick={()=>navigate(`/${images[currentIndex].link}`)}>{images[currentIndex].buttonText}</Button>
      </Content>
    </HeroContainer>
  );
};

export default Hero;
