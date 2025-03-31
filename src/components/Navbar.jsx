import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
      setMobileMenuOpen(false);
    }
  };

  if (location.pathname !== '/') return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 shadow-lg"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div 
            onClick={() => scrollTo('home')}
            className="text-2xl font-bold cursor-pointer"
          >
            <span className="text-white">Jakub</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Sztobryn</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <div
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative cursor-pointer text-sm font-medium transition-colors ${
                  activeSection === item ? 'text-green-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && (
                  <motion.span 
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                  />
                )}
              </div>
            ))}
            
            <button
              onClick={() => scrollTo('contact')}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-400 hover:text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 space-y-4"
          >
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <div
                key={item}
                onClick={() => scrollTo(item)}
                className={`block py-2 px-4 rounded-lg transition-colors ${
                  activeSection === item 
                    ? 'bg-gray-800 text-green-400' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;