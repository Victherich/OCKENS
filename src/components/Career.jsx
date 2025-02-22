// import React from "react";
// import styled, { keyframes } from "styled-components";
// import {
//   FaBoxOpen,
//   FaSteamSquare,
//   FaBox,
//   FaIdCard,
//   FaDirections,
//   FaHeart,
// } from "react-icons/fa";
// import Swal from "sweetalert2";

// // Handle alert for job applications
// const handleAlert = () => {
//   Swal.fire({ icon: "success", text: "Coming soon..." });
// };

// // 🔹 Animations
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const slideUp = keyframes`
//   from { opacity: 0; transform: translateY(50px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// // 🔹 Styled Components
// const CareerWrapper = styled.div`
//   font-family: "Arial", sans-serif;
//   color: #fff;
//   background: #0a192f;
// `;

// const HeroSection = styled.section`
//   height: 60vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   background: url("/Images/hero-career.jpg") no-repeat center center/cover;
//   position: relative;
//   color: white;
//   z-index: 1;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.6);
//     z-index: -1;
//   }
// `;

// const HeroContent = styled.div`
//   animation: ${fadeIn} 1s ease;
  
//   h1 {
//     font-size: 3rem;
//     text-transform: uppercase;
//     margin-bottom: 10px;
//     color: #fbbf24;
//   }

//   p {
//     font-size: 1.2rem;
//     margin-bottom: 20px;
//   }

//   a {
//     display: inline-block;
//     padding: 10px 20px;
//     font-size: 1rem;
//     color: white;
//     background: #fbbf24;
//     border-radius: 5px;
//     text-decoration: none;
//     transition: 0.3s;

//     &:hover {
//       background: #e67e22;
//     }
//   }
// `;

// const Section = styled.section`
//   padding: 50px 10%;
//   text-align: center;

//   h1 {
//     font-size: 2.5rem;
//     color: #fbbf24;
//     margin-bottom: 30px;
//   }
// `;

// const GridContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 20px;
// `;

// const Card = styled.div`
//   background: #112240;
//   padding: 20px;
//   border-radius: 8px;
//   display: flex;
//   align-items: center;
//   animation: ${slideUp} 0.8s ease-in-out;
//   box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
//   transition: transform 0.3s;

//   &:hover {
//     transform: scale(1.05);
//   }

//   svg {
//     font-size: 2rem;
//     margin-right: 15px;
//     color: #fbbf24;
//   }

//   div {
//     text-align: left;

//     h3 {
//       font-size: 1.5rem;
//       margin-bottom: 5px;
//       color: #e67e22;
//     }

//     p {
//       font-size: 1rem;
//       color: #cbd5e1;
//     }
//   }
// `;

// const JobCard = styled.div`
//   background: #1c2b4a;
//   padding: 20px;
//   border-radius: 8px;
//   animation: ${slideUp} 0.8s ease-in-out;
//   transition: transform 0.3s;
//   text-align: left;
//   box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);

//   &:hover {
//     transform: scale(1.05);
//   }

//   h3 {
//     font-size: 1.5rem;
//     color: #fbbf24;
//   }

//   p {
//     font-size: 1rem;
//     color: #cbd5e1;
//     margin-bottom: 15px;
//   }

//   button {
//     background: #e67e22;
//     border: none;
//     padding: 10px 20px;
//     font-size: 1rem;
//     color: white;
//     cursor: pointer;
//     border-radius: 5px;
//     transition: 0.3s;

//     &:hover {
//       background: #fbbf24;
//     }
//   }
// `;

// // 🔹 Career Page Component
// const Career = () => {
//   return (
//     <CareerWrapper>
//       {/* Hero Section */}
//       <HeroSection>
//         <HeroContent>
//           <h1>Work With Us</h1>
//           <p>Join our team and make a real impact in the world.</p>
//           <a href="#jobs">View Jobs</a>
//         </HeroContent>
//       </HeroSection>

//       {/* About Working Here Section */}
//       <Section>
//         <h1>Why Work With Us?</h1>
//         <GridContainer>
//           <Card>
//             <FaBoxOpen />
//             <div>
//               <h3>Diverse Opportunities</h3>
//               <p>Join a team offering dynamic roles in oil & surveying.</p>
//             </div>
//           </Card>
//           <Card>
//             <FaSteamSquare />
//             <div>
//               <h3>Commitment to Sustainability</h3>
//               <p>Work on projects that shape a cleaner future.</p>
//             </div>
//           </Card>
//           <Card>
//             <FaBox />
//             <div>
//               <h3>Professional Growth</h3>
//               <p>Advance your career with training & mentorship.</p>
//             </div>
//           </Card>
//           <Card>
//             <FaIdCard />
//             <div>
//               <h3>Collaborative Environment</h3>
//               <p>We foster teamwork and inclusivity for all.</p>
//             </div>
//           </Card>
//           <Card>
//             <FaDirections />
//             <div>
//               <h3>Industry Leadership</h3>
//               <p>Work on groundbreaking projects in oil & surveying.</p>
//             </div>
//           </Card>
//           <Card>
//             <FaHeart />
//             <div>
//               <h3>Employee Well-being</h3>
//               <p>We prioritize work-life balance and wellness.</p>
//             </div>
//           </Card>
//         </GridContainer>
//       </Section>

//       {/* Open Positions */}
//       <Section id="jobs">
//         <h1>Open Positions</h1>
//         <GridContainer>
//           <JobCard>
//             <h3>Survey Engineer</h3>
//             <p>Analyze offshore & land-based projects for optimal efficiency.</p>
//             <button onClick={handleAlert}>Apply</button>
//           </JobCard>
//           <JobCard>
//             <h3>Oil & Gas Technician</h3>
//             <p>Maintain and optimize oil field operations.</p>
//             <button onClick={handleAlert}>Apply</button>
//           </JobCard>
//           <JobCard>
//             <h3>Project Manager</h3>
//             <p>Oversee large-scale oil & surveying projects.</p>
//             <button onClick={handleAlert}>Apply</button>
//           </JobCard>
//         </GridContainer>
//       </Section>
//     </CareerWrapper>
//   );
// };

// export default Career;




import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaBoxOpen,
  FaSteamSquare,
  FaBox,
  FaIdCard,
  FaDirections,
  FaHeart,
} from "react-icons/fa";
import Swal from "sweetalert2";
import careerimg from '../Images/careerimg.jpg'

// Handle alert for job applications
const handleAlert = () => {
  Swal.fire({ icon: "success", text: "Coming soon..." });
};

// 🔹 Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
`;

// 🔹 Styled Components
const CareerWrapper = styled.div`
  font-family: "Arial", sans-serif;
  background: white;
  color: black;
`;

const HeroSection = styled.section`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url(${careerimg}) no-repeat center center/cover;
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
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  a {
    display: inline-block;
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    background: #0092cf;
    border-radius: 5px;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      background: #007bb5;
    }
  }

  @media(max-width:428px){
    h1{
      font-size:2rem;
    }
  }
  
`;

const Section = styled.section`
  padding: 50px 10%;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: #0092cf;
    margin-bottom: 30px;
  }

   @media(max-width:428px){
    h1{
      font-size:2rem;
    }
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: #f0f8ff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  animation: ${slideUp} 0.8s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    font-size: 2rem;
    margin-right: 15px;
    color: #0092cf;
  }

  div {
    text-align: left;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 5px;
      color: #007bb5;
    }

    p {
      font-size: 1rem;
      color: #555;
    }
  }
`;

const JobCard = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  animation: ${slideUp} 0.8s ease-in-out;
  transition: transform 0.3s;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.5rem;
    color: #0092cf;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 15px;
  }

  button {
    background: #0092cf;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
      background: #007bb5;
    }
  }
`;

// 🔹 Career Page Component
const Career = () => {
  return (
    <CareerWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <h1>Work With Us</h1>
          <p>Join our team and make a real impact in the world.</p>
          <a href="#jobs">View Jobs</a>
        </HeroContent>
      </HeroSection>

      {/* About Working Here Section */}
      <Section>
        <h1>Why Work With Us?</h1>
        <GridContainer>
          <Card>
            <FaBoxOpen />
            <div>
              <h3>Diverse Opportunities</h3>
              <p>Join a team offering dynamic roles in oil & surveying.</p>
            </div>
          </Card>
          <Card>
            <FaSteamSquare />
            <div>
              <h3>Commitment to Sustainability</h3>
              <p>Work on projects that shape a cleaner future.</p>
            </div>
          </Card>
          <Card>
            <FaBox />
            <div>
              <h3>Professional Growth</h3>
              <p>Advance your career with training & mentorship.</p>
            </div>
          </Card>
          <Card>
            <FaIdCard />
            <div>
              <h3>Collaborative Environment</h3>
              <p>We foster teamwork and inclusivity for all.</p>
            </div>
          </Card>
          <Card>
            <FaDirections />
            <div>
              <h3>Industry Leadership</h3>
              <p>Work on groundbreaking projects in oil & surveying.</p>
            </div>
          </Card>
          <Card>
            <FaHeart />
            <div>
              <h3>Employee Well-being</h3>
              <p>We prioritize work-life balance and wellness.</p>
            </div>
          </Card>
        </GridContainer>
      </Section>

      {/* Open Positions */}
      <Section id="jobs">
        <h1>Open Positions</h1>
        <GridContainer>
          <JobCard>
            <h3>Survey Engineer</h3>
            <p>Analyze offshore & land-based projects for optimal efficiency.</p>
            <button onClick={handleAlert}>Apply</button>
          </JobCard>
          <JobCard>
            <h3>Oil & Gas Technician</h3>
            <p>Maintain and optimize oil field operations.</p>
            <button onClick={handleAlert}>Apply</button>
          </JobCard>
          <JobCard>
            <h3>Project Manager</h3>
            <p>Oversee large-scale oil & surveying projects.</p>
            <button onClick={handleAlert}>Apply</button>
          </JobCard>
        </GridContainer>
      </Section>
    </CareerWrapper>
  );
};

export default Career;

