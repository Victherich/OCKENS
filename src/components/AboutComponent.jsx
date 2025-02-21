import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaBuilding, FaMapMarkedAlt, FaUsers } from "react-icons/fa";
import aboutImage from "../Images/OFFSHORE/offshore1.jpeg"; // Replace with your image path

// Styled Components
const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 80px 20px;
  background: #f8f9fa;
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 550px;
  text-align: left;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 550px;
  padding: 20px;
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 15px;
  color:#0092CF;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const IconRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #007bff;
`;

const LearnMoreButton = styled.button`
  padding: 12px 24px;
  font-size: 1.1rem;
  color: #fff;
  background: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #0056b3;
    transform: scale(1.05);
  }
`;

const AboutComponent = () => {
  const navigate = useNavigate();

  return (
    <AboutSection>
      {/* Left Side - Content */}
      <ContentWrapper>
        <Title>🛢️ About Ockens Universal Services</Title>
        <Description>
          Ockens Universal Services Ltd has been providing top-tier survey, hydrography,
          and engineering services since 2007. With over 15 years of experience in the power
          and oil industries, we are dedicated to delivering precise and innovative solutions.
        </Description>

        {/* Icons Row */}
        <IconRow>
          <IconBox><FaBuilding size={24} /> Established in 2007</IconBox>
          <IconBox><FaMapMarkedAlt size={24} /> Nationwide Services</IconBox>
          <IconBox><FaUsers size={24} /> Experienced Team</IconBox>
        </IconRow>

        {/* Learn More Button */}
        <LearnMoreButton onClick={() => navigate("/aboutus")}>
          Learn More
        </LearnMoreButton>
      </ContentWrapper>

      {/* Right Side - Image */}
      <ImageWrapper>
        <AboutImage src={aboutImage} alt="About Us" />
      </ImageWrapper>
    </AboutSection>
  );
};

export default AboutComponent;
