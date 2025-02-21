import React from 'react';
import styled, { keyframes } from 'styled-components';

// Import offshore images
import offshore1 from '../Images/OFFSHORE/offshore1.jpeg';
import offshore2 from '../Images/OFFSHORE/offshore2.jpg';
import offshore3 from '../Images/OFFSHORE/offshore3.jpg';
import offshore4 from '../Images/OFFSHORE/offshore4.jpg';
import offshore5 from '../Images/OFFSHORE/offshore5.jpg';

// Duplicate images for seamless looping
const images = [offshore1, offshore2, offshore3, offshore4, offshore5];
const duplicatedImages = [...images, ...images]; // Create a duplicate set

// Keyframe animation for continuous vertical scrolling
const slideUp = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50%);
  }
`;

// Styled container for the section
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px; /* Adjust height as needed */
  overflow: hidden;
  background: #000; /* Background color for contrast */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

// Title container (stays fixed on top)
const Title = styled.h1`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.8rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 2;
`;

// Sliding images container
const ImageTrack = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${slideUp} 30s linear infinite;
`;

// Styled component for each image
const SlideImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
`;

const Hero4 = () => {
  return (
    <SliderContainer>
      <Title>About OCKENS</Title>
      <ImageTrack>
        {duplicatedImages.map((img, index) => (
          <SlideImage key={index} src={img} alt={`Offshore Survey ${index + 1}`} />
        ))}
      </ImageTrack>
    </SliderContainer>
  );
};

export default Hero4;
