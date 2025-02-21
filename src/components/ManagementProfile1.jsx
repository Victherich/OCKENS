import React from "react";
import styled, { keyframes } from "styled-components";
import { FaUserTie, FaBriefcase, FaBuilding, FaCheckCircle, FaFileContract } from "react-icons/fa";
import managementImg from "../Images/md.jpeg";

// Animations
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
    flex-direction: column;
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
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  
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

const List = styled.ul`
  margin-top: 10px;
  padding-left: 20px;
`;

const ListItem = styled.li`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`;

const ManagementProfile1 = () => {
  return (
    <div>
      {/* Management Profile Section */}
      <Section>
        <SectionText>
          <SectionTitle><FaUserTie /> Management Profile</SectionTitle>
          <SectionTextContent>
            The Directors of OCKENS UNIVERSAL SERVICES LIMITED pooled their experiences and resources together 
            to establish the company for the development and advancement of the Engineering and Surveying professions. 
            This was possible due to their wide and extensive training and experiences in various aspects of Engineering and Surveying.
          </SectionTextContent>

          <SectionTextContent>
            <strong>The Directors of the company are:</strong>
          </SectionTextContent>
          <List>
            <ListItem><FaCheckCircle /> Surv. Chief Kenny C. Onyenegecha (MNIS), MD/CEO</ListItem>
            <ListItem><FaCheckCircle /> Dr Uchenwa T.A. (Director Administrations), DA</ListItem>
          </List>
        </SectionText>
        {/* <SectionImage src={managementImg} alt="Management Team" /> */}
      </Section>

      {/* Managing Director Profile */}
      <Section>
        <SectionText>
          <SectionTitle><FaBriefcase /> Managing Director Profile</SectionTitle>
          <SectionTextContent>
            The Managing Director, <strong>Surv. Chief Kenny Onyenegecha (MNIS), MD/CEO</strong>, is a registered Surveyor 
            by the Surveyors Council of Nigeria. He holds a B.Sc. in Surveying, Geodesy, and Photogrammetry 
            and has attended various courses in Management, Business Administration, Safety, Computer Application, Programming and 
            Programming and Navigation.
            <br/>
            He has obtained varied experience in the field Surveying especially offshore positioning and navigation. He has worked and served in various categories with many companies in Nigeria and outside Nigeria. 
          </SectionTextContent>
          <SectionTextContent>
            He has vast experience in the field of Surveying, particularly offshore positioning and navigation. 
            Throughout his career, he has worked with prestigious companies, including:
          </SectionTextContent>
          <List>
            <ListItem><FaCheckCircle /> CGG (Compayne Genere de Geophysic)</ListItem>
            <ListItem><FaCheckCircle /> CES (Corrosion Engineering Services)</ListItem>
            <ListItem><FaCheckCircle /> Bitmans Surveys</ListItem>
          </List>
        </SectionText>
        <SectionImage src={managementImg} alt="Managing Director" />
      </Section>

      {/* Work Experience */}
      <Section>
        <SectionText>
          <SectionTitle><FaBuilding /> Work Experience</SectionTitle>
          <SectionTextContent>
            Over his 30+ years of experience, Surv. Chief Kenny Onyenegecha has successfully led projects for 
            major organizations, including:
          </SectionTextContent>
          <List>
            <ListItem><FaCheckCircle /> NNPC / NPDC</ListItem>
            <ListItem><FaCheckCircle /> TOTAL</ListItem>
            <ListItem><FaCheckCircle /> AGIP</ListItem>
            <ListItem><FaCheckCircle /> MOBIL</ListItem>
            <ListItem><FaCheckCircle /> SPDC</ListItem>
            <ListItem><FaCheckCircle /> PHCN</ListItem>
            <ListItem><FaCheckCircle /> RIVERS STATE GOVERNMENT</ListItem>
          </List>
        </SectionText>
      </Section>

      {/* Business Efficiency */}
      <Section>
        <SectionText>
          <SectionTitle><FaCheckCircle /> Ensuring Business Efficiency</SectionTitle>
          <SectionTextContent>
            To enhance our performance in **accurate, timely, and cost-effective** project completion 
            and to prevent revenue losses, the Board and Managing Director enforce **strict compliance** 
            by all management and staff.
          </SectionTextContent>
        </SectionText>
      </Section>

      {/* Business Efficiency */}
      <Section>
        <SectionText>
          <SectionTitle><FaFileContract /> Registration /Permit</SectionTitle>
          <SectionTextContent>
          Ockens Universal Service Limited with the managing Director who is a    Registered Surveyor with Surveyors Council of Nigeria (SURCON) has the permit to practice Surveying and Environmental services anywhere within the country. The company is registered with the Department of Petroleum Resources (DPR). 
          </SectionTextContent>
        </SectionText>
      </Section>
    </div>
  );
};

export default ManagementProfile1;
