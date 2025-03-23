
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm' : 'py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-display font-bold text-foreground flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-white">dP</span>
          dApps Protocol
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          {['Features', 'Technology', 'Security', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="px-4 py-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
          <Link 
            to="/connect" 
            className="ml-2 px-5 py-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
          >
            Connect
          </Link>
        </nav>
        
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      
      {menuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border/50 shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {['Features', 'Technology', 'Security', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/5 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Link 
              to="/connect" 
              className="px-4 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Connect
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
