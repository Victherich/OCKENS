import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import logo from '../Images/logo2.png'
import { useNavigate } from "react-router-dom";


const FooterContainer = styled.footer`
  background: #0092CF;
  color: white;
  padding: 40px 20px;
  text-align: center;
  position: relative;
//   font-family: Arial, sans-serif;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: auto;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }

  p, a {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    line-height: 1.6;
    transition: color 0.3s ease-in-out;

    

    &:hover {
    //   color: #FFD700;
    }

  
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;

  a {
    color: white;
    font-size: 1.5rem;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
      color: #FFD700;
    }
  }
`;

const Copyright = styled.p`
  margin-top: 30px;
  font-size: 0.8rem;
  opacity: 0.8;
`;

const Img = styled.img`
  width: 100px;
  animation: horizontalSpin 4s linear infinite;

  @keyframes horizontalSpin {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`;




const SignatureFont = styled.h1`
     font-weight: bold;
  font-style: italic;
  font-family: "Brush Script MT", "Brush Script Std", cursive;
`

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <FooterGrid>
        {/* About Section */}
        <FooterSection>
          <h3>About Us</h3>
          <p>OCKENS is committed to delivering the best services with professionalism and integrity.</p>
        </FooterSection>

        {/* Contact Section */}
        <FooterSection>
          <h3>Contact Us</h3>
          <p style={{marginBottom:"10px"}}><FaEnvelope /> Ockens1@yahoo.com</p>
          <p style={{marginBottom:"10px"}}><FaPhoneAlt /> +234-80-333-87270 , 070-683-90237</p>
        
        </FooterSection>

        {/* Quick Links */}
        <FooterSection>
          <h3>Quick Links</h3>
          <p><a href="/" style={{cursor:"pointer"}}>Home</a></p>
          <p><a onClick={()=>navigate('/aboutus')} style={{cursor:"pointer"}}>About Us</a></p>
          <p><a onClick={()=>navigate('/ourservices')} style={{cursor:"pointer"}}>Services</a></p>
          <p><a onClick={()=>navigate('/contactus')} style={{cursor:"pointer"}}>Contact</a></p>
        </FooterSection>

        {/* Social Media */}
        <FooterSection>
          <h3>Follow Us</h3>
          <SocialIcons>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </SocialIcons>
        </FooterSection>


        <FooterSection>
          <h3>Head Office:</h3>
          <p style={{marginBottom:"10px"}}><FaMapMarkerAlt /> SUITE1, OCK . BIZ. ARCADE, NO. 22 CHARISMATIC ROAD, 
RUMUOKWURUSI PIPELINE 
PORTHARCOURT, RIVERS  STATE.
</p>
        </FooterSection>


        <FooterSection>
          <h3>Branch Office:</h3>
          <p>BRANCH
NO. 12 IBEKU/MBAISE ROAD
OWERRI
IMO STATE
</p>
        </FooterSection>

        <FooterSection>
          <Img src={logo} alt="logo"/>
        </FooterSection>

        <FooterSection>
          <SignatureFont >OCKENS </SignatureFont>
          <h4>UNIVERSAL SERVICE LTD</h4>
        </FooterSection>
      </FooterGrid>

      <Copyright>© {new Date().getFullYear()} OCKENS. All Rights Reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
