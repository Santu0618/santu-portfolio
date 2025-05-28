import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full z-10 top-0">
      <div className="mx-auto text-center flex w-5/6 justify-between">
        
        <div className="hidden sm:flex space-x-4 items-center text-sm">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>

        {/* ✅ Fixed Link */}
        <div className="text-3xl sm:text-2xl font-extrabold">
          <Link to="/">Kavala Sai Shyam Santhosh</Link> {/* ✅ Corrected */}
        </div>

        <div className="hidden sm:flex space-x-4 items-center text-sm">
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
