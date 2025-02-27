import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaGlobe, FaWater, FaLeaf } from "react-icons/fa"; // Icons for each service
import surveyImg from "../Images/ONSHORE/onshore7b.jpg";
import hydroImg from "../Images/ex1b.jpeg";
import envImg from "../Images/OFFSHORE/offshore9.jpg";

const services = [
  {
    id: 1,
    title: "Ground Surveys & GPS",
    description: "We offer accurate ground surveys and GPS positioning...",
    icon: <FaGlobe />,
    image: surveyImg,
    path: "/ourservices1",
  },
  {
    id: 2,
    title: "Hydrographic Surveys",
    description: "Our hydrographic surveys ensure precision in offshore projects...",
    icon: <FaWater />,
    image: hydroImg,
    path: "/ourservices2",
  },
  {
    id: 3,
    title: "Environmental Services",
    description: "Protecting the environment with monitoring and analysis...",
    icon: <FaLeaf />,
    image: envImg,
    path: "/ourservices3",
  },
];

const ServicesContainer = styled.div`
  padding: 50px 20px;
  text-align: center;
  background: #f4f4f4;

  h2{
     font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 15px;
//   color:#555;
color:#0092CF;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

   @media(max-width:768px){
    h2{
      font-size:2rem;
    }
  }
 
`;

const ServiceCardWrap = styled.div`
    display:flex;

 @media(max-width:768px){
    flex-direction:column;
  }

`

const ServiceCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }


`;

const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit:cover;
`;

const ServiceIcon = styled.div`
  font-size: 40px;
  color: #007bff;
  margin: 10px 0;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
  color:#555;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ExploreButton = styled.button`
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
  margin-top:10px;
  &:hover {
    background: #0056b3;
  }
`;

const OurServices = () => {
  const navigate = useNavigate();

  return (
    <ServicesContainer>
      <h2>🛢️⚙️ Our Services</h2>
      <ServiceCardWrap>
      {services.map((service) => (
        <ServiceCard key={service.id}>
          <ServiceImage src={service.image} alt={service.title} />
          <ServiceIcon>{service.icon}</ServiceIcon>
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceDescription>{service.description}</ServiceDescription>
          <ExploreButton onClick={() => navigate(`${service.path}`)}>Explore More</ExploreButton>
        </ServiceCard>
      ))}
      </ServiceCardWrap>
    </ServicesContainer>
  );
};

export default OurServices;
