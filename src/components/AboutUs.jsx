import React from "react";
import styled, { keyframes } from "styled-components";
import { FaFlag, FaEye, FaBullseye, FaCogs, FaMoneyCheckAlt, FaClipboardList, FaGlobe, FaRecycle } from "react-icons/fa";
import aboutHero from "../Images/ONSHORE/onshore5.jpg";
import introImg from "../Images/logo2.png";
import missionImg from "../Images/ONSHORE/onshore3.JPG";
import visionImg from "../Images/OFFSHORE/offshore3.jpg";
import objectivesImg from "../Images/OFFSHORE/offshore6.jpg";
import managementImg from "../Images/logo.png";
import financeImg from "../Images/logo.png";
import scopeImg from "../Images/logo.png";
import ManagementProfile1 from "./ManagementProfile1";
import OurTeam from "./OurTeam";
import Hero2 from "./Hero2";
import Hero4 from "./Hero4";
import offshore3 from '../Images/OFFSHORE/offshore3.jpg'

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

const Div = styled.div`
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
    opacity: 0.9; /* Adjust opacity if you want a transparent overlay */
  }
`;


const HeroSection = styled.section`
  background: url(${aboutHero}) center/cover no-repeat;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  overflow:hidden;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
//   animation: ${zoomIn} 10s infinite alternate ease-in-out;
`;

const Section = styled.section`
  padding: 60px 10%;
  display: flex;
  align-items: center;
  gap: 40px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  
  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;

      &:nth-child(even) {
    flex-direction: column-reverse;
  }
  }
`;

const SectionText = styled.div`
  flex: 1;
`;

const SectionImage = styled.img`
  width: 40%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  animation: ${zoomIn} 10s infinite alternate ease-in-out;
  
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #0092CF;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SectionTextContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-top: 10px;
`;

const AboutUs = () => {
  return (
    <Div>
      {/* Hero Section */}
      <Hero4/>
      {/* <HeroSection>ABOUT US</HeroSection> */}

      {/* Introduction */}
      <Section>
        <SectionText>
          <SectionTitle><FaFlag /> Introduction</SectionTitle>
          <SectionTextContent>
          OCKENS UNIVERSAL SERVICES LTD, was registered in 2007 to provide an integrated package of specialized services in the field of Surveying, Hydrography,
Engineering and information Technology using high-tech equipment.
 The Company has more than fifteen (15) years working experience in power and oil industries. It is the belief of the company to provide services that are tailored to suit the peculiar needs of the clients.

          </SectionTextContent>
        </SectionText>
        <SectionImage src={introImg} alt="Introduction" />
      </Section>

      {/* Mission Statement */}
      <Section>
        <SectionText>
          <SectionTitle><FaBullseye /> Company Mission</SectionTitle>
          <SectionTextContent>
          The mission of Ockens Universal Services Limited is to strive to become the leading indigenous company in Nigeria offering surveying, geotechnical and environmental services to power and oil companies and other clients operating on land, swamp and offshore environments, using the most modern state of the art equipment and technological methods.
          </SectionTextContent>
        </SectionText>
        <SectionImage src={missionImg} alt="Mission" />
      </Section>

      {/* Vision Statement */}
      <Section>
        <SectionText>
          <SectionTitle><FaEye /> Our Vision</SectionTitle>
          <SectionTextContent>
          Our vision is to become a Baseline upon which a well completed service is
calibrated, especially, within our area of activity.
  </SectionTextContent>
        </SectionText>
        <SectionImage src={visionImg} alt="Vision" />
      </Section>

      {/* Objectives */}
      <Section>
        <SectionText>
          <SectionTitle><FaCogs /> Company Objectives</SectionTitle>
          <SectionTextContent>
            • To provide cost effective and highest quality survey services with real time / standby capability for offshore, swamp and land operations and ensure a no-return on all deliverables to the Clients.<br />
            • To provide modern surveying equipment and supporting expertise on rental basis to other parties.<br />
            • To provide high quality consulting and contracting services for the improvement of the operations of our clients.<br />
            • To run a highly profitable venture maximally consistent with the potential in the field of our venture.
          </SectionTextContent>
        </SectionText>
        <SectionImage src={objectivesImg} alt="Objectives" />
      </Section>


        <ManagementProfile1/>
        <OurTeam/>
    </Div>
  );
};

export default AboutUs;
