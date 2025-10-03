import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import PropertySearch from './components/PropertySearch/PropertySearch';
import About from './components/About/About';
import AboutPage from './components/About/AboutPage'; 
import Projects from './components/Projects/Projects';
import BoardOfDirectors from './components/BoardDirector/BoardOfDirectors';
import LatestSliderProject from './components/LatestSliderProject/LatestSliderProject';
import Testimonial from './components/TestimonialVideo/Testimonial';
import Footer from './components/Footer/Footer';
import Residential from './components/Residential/Residential';
import Commercial from './components/Commercial/Commercial';
import Brands from './components/Brands/Brands';

function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <PropertySearch />
      <About />
      <Projects/>
      <BoardOfDirectors/>
     
      <LatestSliderProject/>
      <Testimonial/>
      <Brands/>
      <Footer/>
    </>
    
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/residential" element={<Residential />} />
           <Route path="/commercial" element={<Commercial />} />
      </Routes>
    </Router>
  );
}

export default App;
