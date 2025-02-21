import React from "react";
import styled, { keyframes } from "styled-components";
import client1 from "../Images/c1.jpeg"; // Add your client logo paths
import client2 from "../Images/c2.jpeg";
import client3 from "../Images/c3.jpeg";
import client4 from "../Images/c4.jpeg";


const scroll = keyframes`
  0% {
    transform: translateX(30%);
  }
  100% {
    transform: translateX(-30%);
  }
`;

const ClientsSection = styled.div`
  width: 100%;
  overflow: hidden;
  background: #f8f9fa;
  padding: 30px 0;
  position: relative;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  padding-top:50px;
  padding-bottom:50px;

  h2{
    margin-bottom:20px;
    color:#0092CF;
  }
`;

const ClientsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  animation: ${scroll} 10s linear infinite;
`;

const ClientLogo = styled.img`
  height: 60px;
  margin: 0 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const Clients = () => {
  return (
    <ClientsSection>
        <h2>OUR CLIENTS</h2>
      <ClientsWrapper>
        <ClientLogo src={client1} alt="Client 1" />
        <ClientLogo src={client2} alt="Client 2" />
        <ClientLogo src={client3} alt="Client 3" />
        <ClientLogo src={client4} alt="Client 4" />
     
        {/* Repeat logos for infinite scrolling effect */}
        <ClientLogo src={client1} alt="Client 1" />
        <ClientLogo src={client2} alt="Client 2" />
        <ClientLogo src={client3} alt="Client 3" />
        <ClientLogo src={client4} alt="Client 4" />

        
     
      </ClientsWrapper>
    </ClientsSection>
  );
};

export default Clients;
