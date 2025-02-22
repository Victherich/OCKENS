import React from "react";
import styled, { keyframes } from "styled-components";
import { FaHandshake, FaShieldAlt, FaUsers, FaGlobe, FaLightbulb } from "react-icons/fa";

// Import Core Value Images
import integrityImg from "../Images/intergrity.jpg";
import teamworkImg from "../Images/team.jpg";
import excellenceImg from "../Images/excellence.jpg";


// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  background: #f8fafc;
  color: #1e293b;
  text-align: center;
  padding: 4rem 2rem;
`;

const Title = styled.h2`
   font-size: 2.8rem;
  font-weight: bold;
  // margin-bottom: 15px;
  color:#0092CF;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-in-out;

   @media(max-width:768px){
    font-size:2rem;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

   @media(max-width:768px){
    display:flex;
    flex-direction:column;
    
  }
`;

const ValueCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out;
  transition: transform 0.3s ease-in-out; 

  &:hover {
    transform: translateY(-10px);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #0092CF;
  margin-bottom: 1rem;
`;

const ValueImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 1rem;

   @media(max-width:768px){
    height:150px;
  }
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color:#555;
`;

const ValueDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

const OurCoreValues = () => {
  const values = [
    {
      title: "Integrity",
      icon: <FaShieldAlt />,
      image: integrityImg,
      description: "We uphold the highest standards of integrity and honesty in everything we do.",
    },
    {
      title: "Teamwork",
      icon: <FaUsers />,
      image: teamworkImg,
      description: "Collaboration and respect drive our success in every project.",
    },
 
    {
      title: "Excellence",
      icon: <FaHandshake />,
      image: excellenceImg,
      description: "Our commitment to quality ensures world-class service delivery.",
    },

  ];

  return (
    <Container>
      <Title>🌍 Our Core Values</Title>
      <ValuesGrid>
        {values.map((value, index) => (
          <ValueCard key={index}>
            <IconWrapper>{value.icon}</IconWrapper>
            <ValueTitle>{value.title}</ValueTitle>
            <ValueDescription>{value.description}</ValueDescription>
            <ValueImage src={value.image} alt={value.title} />
          </ValueCard>
        ))}
      </ValuesGrid>
    </Container>
  );
};

export default OurCoreValues;
