
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import WalletButton from './WalletButton';
import { useIsMobile } from '@/hooks/use-mobile';
import { ThemeToggle } from './ThemeToggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Features', href: isHomePage ? '#features' : '/#features' },
    { name: 'Technology', href: isHomePage ? '#technology' : '/#technology' },
    { name: 'Security', href: isHomePage ? '#security' : '/#security' },
    { name: 'About', href: isHomePage ? '#about' : '/#about' },
    { name: 'How We Help', href: '/how-we-help' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "py-2 bg-background/90 backdrop-blur-lg shadow-sm" : "py-3 md:py-5 bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1 sm:gap-2 font-display font-bold text-base sm:text-lg md:text-xl">
          <span className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md bg-accent flex items-center justify-center text-white">
            <Zap size={14} className="sm:size-16 md:size-18" />
          </span>
          <span className="relative">
            DappsConnector<span className="text-accent">.</span>
          </span>
        </Link>

        <nav className={cn(
          "md:flex items-center gap-4 lg:gap-6",
          isMobile ? "hidden" : "flex"
        )}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs lg:text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className={cn(
          "flex items-center gap-2 md:gap-4",
          isMobile ? "hidden" : "flex"
        )}>
          <ThemeToggle />
          <WalletButton />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button 
            className={cn(
              "text-foreground",
              isMenuOpen ? "hidden" : "block"
            )}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu - improved */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-background z-50 md:hidden animate-fade-in">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
                  <span className="w-7 h-7 rounded-md bg-accent flex items-center justify-center text-white">
                    <Zap size={16} />
                  </span>
                  DappsConnector<span className="text-accent">.</span>
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <nav className="flex flex-col p-4 gap-2">
                  {navLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href}
                      className="text-base font-medium p-3 hover:bg-muted rounded-md transition-colors flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="p-4 border-t">
                <WalletButton className="w-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
