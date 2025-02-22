import React from "react";
import styled from "styled-components";
import { FaUserTie } from "react-icons/fa";

// Import Team Member Images
import mdImage from "../Images/md.jpeg"; // Update with actual paths
import directorImage from "../Images/md.jpeg";
import team1 from '../Images/team1b.png'
import team2 from '../Images/team2b.png'
import team3 from '../Images/team3.jpeg'
import team4 from '../Images/team4b.png'

// Team Data
const teamMembers = [
  {
    name: "Surv. Chief Kenny C. Onyenegecha",
    position: "Managing Director / CEO",
    image: mdImage,
  },
  {
    name: "Dr. Uchenwa T.A.",
    position: "Director Administrations",
    image: team1,
  },
  {
    name: "Uche Stephens",
    position: "Manager Operations",
    image: team2,
  },
  {
    name: "Mrs Amarachi Otis",
    position: "Secretary",
    image: team3,
  },
  

  {
    name: "Mrs Julie Grant Ogbe",
    position: "Admin Manager",
    image: team4,
  },
];

// Styled Components
const TeamSection = styled.section`
  text-align: center;
  padding: 60px 20px;
//   background: #f9f9f9;
  position:relative;
  background-color:rgba(255,255,255,0.5);
  box-shadow: rgba(0, 0, 0, 0.7) 0px 3px 8px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color:#0092CF;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const TeamGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 40px;
`;

const MemberCard = styled.div`
  width: 100%;
//   background: #ffffff;
  padding: 20px;
  border-radius: 10px;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
  }
`;

const MemberCard2 = styled.div`
  width: 200px;
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
  }
`;

const MemberImage = styled.img`
  width: 250px;
//   height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #007bff;
  transition: transform 0.3s ease-in-out;

  ${MemberCard}:hover & {
    transform: scale(1.1);
  }
`;


const MemberImage2 = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #007bff;
  transition: transform 0.3s ease-in-out;

  ${MemberCard}:hover & {
    transform: scale(1.1);
  }
`;

const MemberName = styled.h3`
  font-size: 1.2rem;
  margin-top: 10px;
  font-weight: bold;
  color:#0092CF;
`;

const MemberPosition = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 5px;
`;

// Team Component
const OurTeam = () => {
  return (
    <TeamSection>
      <Title><FaUserTie /> Meet Our Team</Title>
      <TeamGrid>
        {teamMembers.slice(0,1).map((member, index) => (
          <MemberCard key={index}>
            <MemberImage src={member.image} alt={member.name} />
            <MemberName>{member.name}</MemberName>
            <MemberPosition>{member.position}</MemberPosition>
          </MemberCard>
        ))}
      </TeamGrid>
      <TeamGrid>
        {teamMembers.slice(1).map((member, index) => (
          <MemberCard2 key={index}>
            <MemberImage2 src={member.image} alt={member.name} />
            <MemberName>{member.name}</MemberName>
            <MemberPosition>{member.position}</MemberPosition>
          </MemberCard2>
        ))}
      </TeamGrid>
    </TeamSection>
  );
};

export default OurTeam;
