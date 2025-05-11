import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx'

import Hero from './components/Hero.jsx';
import Hero2 from './Hero2.jsx';
import CTA from './Cta.jsx';
import Features from './Features.jsx';
import Features1 from './Features1.jsx';
import Footer from './Footer.jsx';
import Testi from './Testi.jsx';


// eslint-disable-next-line react-refresh/only-export-components
const HomePage = () => (
  <>
   <App />
    <Hero />
    <Features />
    <Features1 />
    <Hero2 />
  <Testi/>
    <CTA />
    <Footer />
  </>
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  </StrictMode>
);

