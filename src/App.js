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

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/recentjobs' element={<Career/>}/>
        <Route path='/news' element={<News/>}/>
        
      </Routes>
      <FloatingLogo/>
      <ManualScrollToTop/>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
