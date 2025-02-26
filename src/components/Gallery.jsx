import React from "react";
import styled from "styled-components";

// Importing all images
import offshore1 from "../Images/OFFSHORE/offshore1.jpeg";
import offshore2 from "../Images/OFFSHORE/offshore2.jpg";
import offshore3 from "../Images/OFFSHORE/offshore3.jpg";
import offshore4 from "../Images/OFFSHORE/offshore4.jpg";
import offshore5 from "../Images/OFFSHORE/offshore5.jpg";
import offshore6 from "../Images/OFFSHORE/offshore6.jpg";
import offshore7 from "../Images/OFFSHORE/offshore7.jpg";
import offshore8 from "../Images/OFFSHORE/offshore8.jpg";
import offshore9 from "../Images/OFFSHORE/offshore9.jpg";
import offshore10 from "../Images/OFFSHORE/offshore10.jpg";

import onshore1 from "../Images/ONSHORE/onshore1.jpg";
import onshore2 from "../Images/ONSHORE/onshore2.JPG";
import onshore3 from "../Images/ONSHORE/onshore3.JPG";
import onshore4 from "../Images/ONSHORE/onshore4.jpg";
import onshore5 from "../Images/ONSHORE/onshore5.jpg";
import onshore6 from "../Images/ONSHORE/onshore6.jpg";
import onshore7 from "../Images/ONSHORE/onshore7.jpg";
import onshore8 from "../Images/ONSHORE/onshore8.jpg";
import onshore9 from "../Images/ONSHORE/onshore9.jpg";
import onshore10 from "../Images/ONSHORE/onshore10.jpg";
import onshore11 from "../Images/ONSHORE/onshore11.jpg";

import ex1 from "../Images/ex1.jpeg"
import ex2 from "../Images/ex2.jpeg"
import ex3 from "../Images/ex3.jpeg"
import ex4 from "../Images/ex4.jpeg"


// Combine all images in an array
const images = [
  offshore1, offshore2, offshore3, offshore4, offshore5, offshore6, offshore7, offshore8, offshore9, offshore10,
  onshore1, onshore2, onshore3, onshore4, onshore5, onshore6, onshore7, onshore8, onshore9, onshore10, ex1, ex2, ex3, ex4
];

// Styled Components
const GalleryContainer = styled.div`
  padding: 50px 20px;
  background: #f9f9f9;
  text-align: center;

    background-image: url(${offshore3});
    position: relative;
    background-size: cover;
    background-position: center;
  
    &::before {
      content: "";
      background-color: white;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.5; /* Adjust opacity if you want a transparent overlay */
    }
`;

const GalleryTitle = styled.h2`
  font-size: 2.5rem;
  color:  white;
  margin-bottom: 40px;
   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* Adds a soft shadow */
   position: relative;

    @media(max-width:768px){
    font-size:2rem;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 images per row on mobile */
  }
`;

const ImageCard = styled.div`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: opacity 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.9) 0px 3px 8px;
  }
`;

const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryTitle>📸✨ Our Project Gallery</GalleryTitle>
      <ImageGrid>
        {images.map((img, index) => (
          <ImageCard key={index}>
            <img src={img} alt={`Gallery Image ${index + 1}`} />
          </ImageCard>
        ))}
      </ImageGrid>
    </GalleryContainer>
  );
};

export default Gallery;
