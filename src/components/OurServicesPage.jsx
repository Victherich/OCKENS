import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaMapMarkedAlt,
  FaWater,
  FaLeaf,
  FaGlobe,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";
import serviceImg1 from "../Images/ONSHORE/onshore7b.jpg";
import serviceImg2 from "../Images/ONSHORE/onshore2.JPG";
import serviceImg3 from "../Images/OFFSHORE/offshore9.jpg";
import bg from '../Images/724.jpg'
import offshore3 from '../Images/OFFSHORE/offshore3.jpg'

// 🔹 Page Component
const OurServicesPage = () => {
  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <h1>Our Services</h1>
          <p>Over 20 years of expertise in Surveys, Hydrographics & Environmental Services.</p>
        </HeroContent>
      </HeroSection>

      {/* Services Sections */}
      <ServiceContainer>
        <ServiceCard>
          <IconWrapper>
            <FaMapMarkedAlt />
          </IconWrapper>
          <TextContent>
  <h2>Ground Surveys & GPS</h2>
  <Image src={serviceImg1} alt="Ground Surveys" />
  <p>
    With over 20 years of industry experience, we provide high-precision surveying solutions tailored for 
    pipeline projects, construction, geotechnical analysis, and environmental management. 
    Our team utilizes cutting-edge technology, including GPS, drones, and GIS mapping, to deliver the 
    most accurate and reliable survey data for clients across multiple industries.
  </p>

  <ul>
    <li>📍 <strong>Pipeline Surveys:</strong> PI, Full Prep, and general construction surveys.</li>
    <li>📏 <strong>As-Built Surveys:</strong> Ensuring accurate documentation of existing structures.</li>
    <li>🚧 <strong>Route Investigation Surveys:</strong> For roads, pipelines, and utility layouts.</li>
    <li>🌎 <strong>Seismic Surveys:</strong> Data collection for underground exploration.</li>
    <li>🗺️ <strong>Cartographic Services:</strong> Mapping and visualization solutions.</li>
    <li>🔌 <strong>Utility Surveys:</strong> High-tension routes, underground water pipelines.</li>
    <li>🔬 <strong>Geotechnical Investigation:</strong> Soil testing and site stability analysis.</li>
    <li>🏗️ <strong>Construction Site Surveys:</strong> Precise land assessments for building projects.</li>
    <li>🚁 <strong>Photogrammetric Mapping:</strong> Aerial mapping using drones.</li>
    <li>🖥️ <strong>Geographic Information Systems (GIS):</strong> Advanced spatial analysis and mapping.</li>
    <li>🏛️ <strong>Cadastral Surveying:</strong> Land boundary and property surveys.</li>
    <li>⛏️ <strong>Mining Surveys:</strong> Subsidence monitoring and resource assessments.</li>
    <li>🌿 <strong>Environmental Planning & Protection:</strong> Pollution monitoring, impact assessments.</li>
    <li>🎯 <strong>Precision Setting Out:</strong> High-accuracy layout positioning for construction.</li>
    <li>🛣️ <strong>Route (Road) Survey & Mass Computations:</strong> Efficient road planning and design.</li>
    <li>📡 <strong>Geodetic Surveys:</strong> High-precision earth measurements for mapping and positioning.</li>
    <li>🛰️ <strong>Precision Control Surveys by Satellite (GPS):</strong> Advanced positioning for infrastructure projects.</li>
  </ul>
</TextContent>


          
        </ServiceCard>

        <ServiceCard >
          <IconWrapper>
            <FaWater />
          </IconWrapper>
          <TextContent>
  <h2>Hydrographic & Hydrodynamic Surveys</h2>
  <Image src={serviceImg2} alt="Hydrographic Surveys" />
  <p>
    Our Hydrographic & Hydrodynamic Surveying services provide critical insights for offshore, 
    coastal, and underwater projects. We use state-of-the-art sonar, GPS, and oceanographic sensors 
    to deliver precise marine mapping, seabed profiling, and hydrodynamic analysis.
  </p>

  <ul>
    <li>🌊 <strong>Debris Survey:</strong> Identification & removal of underwater obstacles.</li>
    <li>🚢 <strong>Pre & Post Dredge Surveys:</strong> Volume computations for dredging projects.</li>
    <li>📍 <strong>Site & Pipeline Survey:</strong> Offshore & onshore infrastructure assessments.</li>
    <li>📡 <strong>Bathymetric Surveys:</strong> Mapping underwater terrain using sonar technology.</li>
    <li>🛰️ <strong>Offshore Positioning:</strong> Precise GPS tracking for maritime operations.</li>
    <li>🔎 <strong>Pipeline Detection & Monitoring:</strong> Ensuring pipeline integrity and safety.</li>
    <li>🌊 <strong>Sea-bed Profiling:</strong> Mapping underwater geology for engineering projects.</li>
    <li>📸 <strong>Side Scanning:</strong> High-resolution sonar imaging for seabed exploration.</li>
    <li>🌊 <strong>Siltation Studies:</strong> Analyzing sediment transport and deposition.</li>
    <li>📊 <strong>Hydro-Informatics:</strong> Data modeling for marine and coastal projects.</li>
    <li>⚓ <strong>Anchor Handling:</strong> Safe and efficient anchorage positioning.</li>
    <li>🌊 <strong>Tidal Observation & Analysis:</strong> Monitoring water levels and tides.</li>
    <li>🌊 <strong>Tidal Predictions & Currents:</strong> Forecasting water movements for navigation.</li>
    <li>🌊 <strong>Wave Observations & Analysis:</strong> Studying wave patterns for marine safety.</li>
    <li>💧 <strong>Discharge Measurements:</strong> Assessing water flow rates and quality.</li>
    <li>⚡ <strong>Velocity Measurements:</strong> Analyzing water movement for engineering applications.</li>
    <li>🏗️ <strong>Coastal Engineering:</strong> Design and protection of coastal structures.</li>
    <li>🚢 <strong>Harbor Development & Maintenance Surveys:</strong> Optimizing port infrastructure.</li>
  </ul>
</TextContent>

          
        </ServiceCard>

        <ServiceCard>
          <IconWrapper>
            <FaLeaf />
          </IconWrapper>
          <TextContent>
  <h2>Environmental Services</h2>
  <Image src={serviceImg3} alt="Environmental Services" />
  <p>
    Our Environmental Services focus on sustainability, pollution control, and environmental 
    impact analysis. We use cutting-edge monitoring techniques to ensure environmental protection, 
    compliance, and long-term ecological balance.
  </p>

  <ul>
    <li>🌿 <strong>Pollution Monitoring:</strong> Assessing air, water, and soil quality.</li>
    <li>🛢️ <strong>Oil Spill Controls:</strong> Rapid response and cleanup solutions.</li>
    <li>📊 <strong>Environmental Impact Assessment Studies:</strong> Evaluating project impacts on nature.</li>
    <li>📋 <strong>Base Line Data Acquisition & Analysis:</strong> Collecting essential environmental data.</li>
    <li>🔬 <strong>Modeling:</strong> Simulating environmental scenarios for better planning.</li>
    <li>📑 <strong>Post Impact Assessment Studies:</strong> Reviewing environmental recovery and mitigation.</li>
    <li>✅ <strong>Environmental Audit & Monitoring:</strong> Ensuring compliance with regulations.</li>
    <li>💦 <strong>Affluent Analysis & Monitoring:</strong> Studying industrial waste discharge.</li>
    <li>🏗️ <strong>Environmental Planning, Development & Protection:</strong> Sustainable development strategies.</li>
    <li>🌊 <strong>Environmental Evaluation for Erosion, Flooding & Subsidence:</strong> Preventive measures for land stability.</li>
    <li>🏝️ <strong>Coastal Zone Management:</strong> Protecting marine and coastal environments.</li>
    <li>💧 <strong>Groundwater Resource Survey & Development:</strong> Identifying and managing water sources.</li>
  </ul>
</TextContent>

          
        </ServiceCard>
      </ServiceContainer>
    </Container>
  );
};

export default OurServicesPage;

// 🔹 Styled Components
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
//   background: white;
//   font-family: "Arial", sans-serif;
  color: #333;
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
      opacity: 0.1; /* Adjust opacity if you want a transparent overlay */
    }
`;

// Hero Section
const HeroSection = styled.div`
  height: 60vh;
  background: url(${bg}) no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  color: white;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    z-index: -1;
  }
`;

const HeroContent = styled.div`
  animation: ${fadeIn} 1s ease;

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    margin-bottom: 10px;
    color: white;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  }

  p {
    font-size: 1.2rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  }
`;

// Services Section
const ServiceContainer = styled.div`
  padding: 50px 10%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  position:relative;


  @media(max-width:428px){
    padding:50px 10px;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
//   background: #f9f9f9;
background:rgba(255,255,255,0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 884px) {
    // flex-direction: column-reverse;
    flex-direction:column;
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #0092cf;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContent = styled.div`
  flex: 1;
  
  h2 {
    font-size: 2rem;
    color: #0092cf;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    margin-bottom:30px;
    
  }

  li{
    margin-bottom:10px;
    text-align:left;
    margin-left:10px;
  }
`;

const Image = styled.img`
  width: 350px;
  height: 230px;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
