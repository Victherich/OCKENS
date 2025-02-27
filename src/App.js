import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ScrollToTop from './components/ScrollToTop';
import Career from './components/Career';
import News from './components/News';
import FloatingLogo from './components/FloatingLogo';
import ManualScrollToTop from './components/ManualScrollToTop';
import OurServicesPage from './components/OurServicesPage';
import ContactSupport from './components/ContactPage';
import OilBubbles from './components/OilBubbles';
import OurServicesPage1 from './components/OurServicesPage1';
import OurServicesPage2 from './components/OurServicesPage2';
import OurServicesPage3 from './components/OurServicesPage3';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <OilBubbles/>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/recentjobs' element={<Career/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path="/ourservices" element={<OurServicesPage/>}/>
        <Route path="/ourservices1" element={<OurServicesPage1/>}/>
        <Route path="/ourservices2" element={<OurServicesPage2/>}/>
        <Route path="/ourservices3" element={<OurServicesPage3/>}/>
        <Route path='/contactus' element={<ContactSupport/>}/>
      </Routes>
      <FloatingLogo/>
      <ManualScrollToTop/>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
