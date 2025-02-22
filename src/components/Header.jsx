// import React, { useContext, useRef, useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { FaEnvelope, FaPhoneAlt, FaBars, FaWindowClose } from 'react-icons/fa';
// import { NavLink, useNavigate, useLocation } from 'react-router-dom';
// import logo from '../Images/logo.png'

// const HeaderWrap = styled.div`
//   width: 100%;
//   display: ${({ hide }) => (hide ? 'none' : 'flex')};
//   flex-direction: column;
//   align-items: center;
//   background-color: white;
//   position: fixed;
//   top: 0;
//   z-index: 9999;
//   font-family: Arial, Helvetica, sans-serif;
// `;

// const HeaderUp = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 90%;
//   padding: 10px 0;
//   @media (max-width: 884px) {
//     flex-direction: column;
//     justify-content:center;
//     gap: 10px;
//   }
// `;

// const HeaderUpLeft = styled.h2`
//   color: #0092CF;
//   font-weight: bolder;
//   font-size: 1.5rem;
//   display:flex;
//   justify-content:center;
//   align-items:center;
//   flex-direction:column;
// `;

// const HeaderUpRight = styled.div`
//   display: flex;
//   gap: 20px;
//   color: #0092CF;
//   @media(max-width:768px){
//     flex-direction:column;
//     gap:5px;
//     align-items:center;

//   }

//   p{
//     color:gray;
//   }
// `;

// const HeaderUpRightItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 5px;
// `;

// const HeaderDown = styled.nav`
//   width: 100%;
//   display: ${({ mobile }) => (mobile ? 'none' : 'flex')};
//   justify-content: center;
//   gap: 20px;
//   align-items: center;
//   padding: 20px 0;
//   background-color: #0092CF;
//   @media (max-width: 884px) {
//     display: none;
//   }
// `;

// const MobileMenuIcon = styled.div`
//   display: none;
//   cursor: pointer;
//   font-size: 1.5rem;
//   @media (max-width: 884px) {
//     display: block;
//     position:absolute;
//     top:20px;
//     right:20px;
//   }
// `;

// const MobileMenu = styled.div`
//   display: ${({ open }) => (open ? 'flex' : 'none')};
//   flex-direction: column;
//   background-color: #0092CF;
//   width: 100%;
//   padding: 20px;
//   z-index: 1000;
// `;

// const MenuItem = styled(NavLink)`
//   text-decoration: none;
//   color: white;
//   font-weight: bold;
//   padding: 10px;
//   border-radius:5px;
//   &:hover {

//   }
//   &.active {
//     background-color: rgba(255,255,255,0.9);
//     color: #0092CF;
//   }

//   @media(min-width:768px){
//   font-size:0.8rem;
//   padding: 5px;
//   }
// `;





// const Img = styled.img`
//   width: 50px;
//   height: auto;
//   position: relative;
//   animation: moveLogo 5s infinite alternate ease-in-out;

//   @keyframes moveLogo {
//     0% {
//       transform: translateX(-50px);
//     }
//     50% {
//       transform: translateX(50px); /* Adjust the value based on the container width */
//     }
//   }
// `;





// const H2 = styled.h2`
//     font-size:1.5rem;
// `

// const Header = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const menuRef = useRef();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMobileMenuOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const hideHeader = ['/userlogin', '/usersignup', '/forgotpassword'].some(path => location.pathname.includes(path));

//   return (
//     <HeaderWrap hide={hideHeader}>
//       <HeaderUp>
        
//         <HeaderUpLeft>
//             <Img src={logo} alt='logo'/>
//             <H2>OCKENS</H2>
//         </HeaderUpLeft>
//         <HeaderUpRight>
//           <HeaderUpRightItem>
//             <FaEnvelope /><p>Ockens1@yahoo.com</p>
//           </HeaderUpRightItem>
//           <HeaderUpRightItem>
//             <FaPhoneAlt /><p>+234-80-333-87270, +234-70-683-90237</p>
//           </HeaderUpRightItem>
//           {!mobileMenuOpen&&<MobileMenuIcon onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//           <FaBars />
//         </MobileMenuIcon>}
//         {mobileMenuOpen&&<MobileMenuIcon onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//           <FaWindowClose />
//         </MobileMenuIcon>}
//         </HeaderUpRight>
        
//       </HeaderUp>
//       <HeaderDown>
//         <MenuItem to='/home'>HOME</MenuItem>
//         <MenuItem to='/aboutus'>ABOUT US</MenuItem>
//         <MenuItem to='/services'>SERVICES</MenuItem>
//         <MenuItem to='/clientsector'>CLIENT SECTOR</MenuItem>
//         <MenuItem to='/news'>NEWS</MenuItem>
//         <MenuItem to='/recentjobs'>RECENT JOBS</MenuItem>
//         <MenuItem to='/nigeriancontent'>NIGERIAN CONTENT</MenuItem>
//         <MenuItem to='/contactus'>CONTACT US</MenuItem>
//       </HeaderDown>
//       <MobileMenu ref={menuRef} open={mobileMenuOpen}>
//         <MenuItem to='/home' onClick={() => setMobileMenuOpen(false)}>HOME</MenuItem>
//         <MenuItem to='/aboutus' onClick={() => setMobileMenuOpen(false)}>ABOUT US</MenuItem>
//         <MenuItem to='/services' onClick={() => setMobileMenuOpen(false)}>SERVICES</MenuItem>
//         <MenuItem to='/clientsector' onClick={() => setMobileMenuOpen(false)}>CLIENT SECTOR</MenuItem>
//         <MenuItem to='/news' onClick={() => setMobileMenuOpen(false)}>NEWS</MenuItem>
//         <MenuItem to='/recentjobs' onClick={() => setMobileMenuOpen(false)}>RECENT JOBS</MenuItem>
//         <MenuItem to='/nigeriancontent' onClick={() => setMobileMenuOpen(false)}>NIGERIAN CONTENT</MenuItem>
//         <MenuItem to='/contactus' onClick={() => setMobileMenuOpen(false)}>CONTACT US</MenuItem>
//       </MobileMenu>
//     </HeaderWrap>
//   );
// };

// export default Header;



import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaEnvelope, FaPhoneAlt, FaBars, FaWindowClose } from 'react-icons/fa';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import logo from '../Images/logo.png';

const floatingAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const sparkleAnimation = keyframes`
  0% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0.2; transform: scale(1); }
`;

const HeaderWrap = styled.div`
  width: 100%;
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  background-color: white;
//   position: fixed;
  top: 0;
  z-index: 9999;
//   font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const HeaderUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 10px 0;
  position: relative;
  @media (max-width: 884px) {
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;

const HeaderUpLeft = styled.h2`
  color: #0092CF;
  font-weight: bolder;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeaderUpRight = styled.div`
  display: flex;
  gap: 20px;
  color: #0092CF;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }
  p {
    color: gray;
  }
`;

const HeaderUpRightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  text-align:center;
`;

const HeaderDown = styled.nav`
  width: 100%;
  display: ${({ mobile }) => (mobile ? 'none' : 'flex')};
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding: 10px 0;
  background-color: #0092CF;
  @media (max-width: 884px) {
    display: none;
  }
`;






const slideDown = keyframes`
  from {
    transform: translateY(-200px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 884px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    
  }
`;

// const MobileMenuIcon = styled.div`
//   display: none;
//   cursor: pointer;
//   font-size: 1.5rem;
//   @media (max-width: 884px) {
//     display: block;
//     position: absolute;
//     top: 20px;
//     right: 20px;
//   }
// `;

const MobileMenu = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  background-color: #0092CF;
  width: 100%;
  padding: 20px;
  z-index: 1000;
  animation: ${slideDown} 2s ease-out; /* Apply the animation */
`;

const MenuItem = styled(NavLink)`
  text-decoration: none;
  color: white;
//   font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  font-size:0.8rem;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.9);
    color: #0092CF;
  }
  @media (min-width: 768px) {
    font-size: 0.8rem;
    padding: 5px;
  }
`;

const Img = styled.img`
  width: 50px;
  height: auto;
  position: relative;
  animation: moveLogo 5s infinite alternate ease-in-out, floatingAnimation 3s infinite ease-in-out;

  @keyframes moveLogo {
    0% { transform: translateX(-50px); }
    50% { transform: translateX(50px); }
  }
`;

const Sparkles = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 10px;
  height: 10px;
  background-color: yellow;
  border-radius: 50%;
  animation: sparkleAnimation 1s infinite;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const hideHeader = ['/userlogin', '/usersignup', '/forgotpassword'].some(path => location.pathname.includes(path));

  return (
    <HeaderWrap hide={hideHeader}>
      <HeaderUp>
        <HeaderUpLeft>
          <Img src={logo} alt='logo'/>
          <H2>OCKENS </H2>
        </HeaderUpLeft>
        <HeaderUpRight>
          <HeaderUpRightItem>
            <FaEnvelope /><p>Ockens1@yahoo.com</p>
          </HeaderUpRightItem>
          <HeaderUpRightItem>
            <FaPhoneAlt /><p>+234-80-333-87270, +234-70-683-90237</p>
          </HeaderUpRightItem>
          {!mobileMenuOpen && <MobileMenuIcon onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><FaBars /></MobileMenuIcon>}
          {mobileMenuOpen && <MobileMenuIcon onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><FaWindowClose /></MobileMenuIcon>}
        </HeaderUpRight>
      </HeaderUp>
          <HeaderDown>
        <Sparkles />
        <MenuItem to='/'>HOME</MenuItem>
        <MenuItem to='/aboutus'>ABOUT US</MenuItem>
        <MenuItem to='/ourservices'>OUR SERVICES</MenuItem>
        {/* <MenuItem to='/clientsector'>CLIENT SECTOR</MenuItem> */}
        <MenuItem to='/news'>NEWS</MenuItem>
        <MenuItem to='/recentjobs'>RECENT JOBS</MenuItem>
        {/* <MenuItem to='/nigeriancontent'>NIGERIAN CONTENT</MenuItem> */}
        <MenuItem to='/contactus'>CONTACT US</MenuItem>
      </HeaderDown>
      <MobileMenu ref={menuRef} open={mobileMenuOpen}>
         <MenuItem to='/' onClick={() => setMobileMenuOpen(false)}>HOME</MenuItem>
         <MenuItem to='/aboutus' onClick={() => setMobileMenuOpen(false)}>ABOUT US</MenuItem>
         <MenuItem to='/ourservices' onClick={() => setMobileMenuOpen(false)}>SERVICES</MenuItem>
         {/* <MenuItem to='/clientsector' onClick={() => setMobileMenuOpen(false)}>CLIENT SECTOR</MenuItem> */}
         <MenuItem to='/news' onClick={() => setMobileMenuOpen(false)}>NEWS</MenuItem>
         <MenuItem to='/recentjobs' onClick={() => setMobileMenuOpen(false)}>RECENT JOBS</MenuItem>
         {/* <MenuItem to='/nigeriancontent' onClick={() => setMobileMenuOpen(false)}>NIGERIAN CONTENT</MenuItem> */}
         <MenuItem to='/contactus' onClick={() => setMobileMenuOpen(false)}>CONTACT US</MenuItem>
       </MobileMenu>
    </HeaderWrap>
  );
};

export default Header;

