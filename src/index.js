import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from "react-router-dom";  // Using HashRouter for better support
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Navbar /> {/* Navbar stays on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Footer stays on all pages */}
    </Router>
  </React.StrictMode>
);

// Measure performance
reportWebVitals();
