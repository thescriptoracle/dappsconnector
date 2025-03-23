
import React, { useEffect, useRef } from 'react';
import WalletButton from './WalletButton';
import { motion } from 'framer-motion';
import { fadeInUp, slideInFromLeft, slideInFromRight, staggerContainer, pulseAnimation } from '@/lib/animations';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const btn = btnRef.current;

    if (hero && title && subtitle && btn) {
      title.classList.add('animate-fade-in');
      setTimeout(() => {
        subtitle.classList.add('animate-fade-in');
      }, 300);
      setTimeout(() => {
        btn.classList.add('animate-fade-in');
      }, 600);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!hero || isMobile) return;
      
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const offsetX = (x - centerX) / centerX;
      const offsetY = (y - centerY) / centerY;
      
      if (title) {
        title.style.transform = `translate(${offsetX * -5}px, ${offsetY * -5}px)`;
      }
      
      if (subtitle) {
        subtitle.style.transform = `translate(${offsetX * -3}px, ${offsetY * -3}px)`;
      }
    };

    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isMobile]);

  return (
    <motion.section 
      ref={heroRef}
      className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
      initial="hidden"
      animate="show"
      variants={staggerContainer(0.2, 0.1)}
      style={{
        backgroundImage: `url('/lovable-uploads/36256cb0-c2b2-45a8-bb10-cbf10f5a1d8c.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Semi-transparent overlay to improve text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 backdrop-blur-sm"></div>
      
      <div className="section-container relative z-10 text-center flex flex-col items-center px-4 md:px-6">
        <motion.div 
          className="mb-4 opacity-0 transform translate-y-4" 
          ref={titleRef}
          variants={fadeInUp}
        >
          <motion.span 
            className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-teal-500/20 text-teal-200 mb-4 md:mb-6 transition-all duration-300 hover:bg-teal-500/30 border border-teal-400/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Blockchain Transaction Troubleshooting
          </motion.span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4 md:mb-6 transition-all duration-300 text-white">
            <span className="bg-gradient-to-r from-teal-300 via-white to-amber-300 bg-clip-text text-transparent animate-background-pan bg-[length:200%]">Secure. Fast. Seamless.</span>
            <br className="hidden md:block" />
            <span className="relative whitespace-nowrap">
              <span className="flex flex-row justify-center items-center gap-2 text-white">
                dApps Protocol
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-teal-500/0 via-teal-400/80 to-teal-500/0 animate-pulse-slow"></div>
            </span>
          </h1>
        </motion.div>
        
        <motion.p 
          ref={subtitleRef}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto mb-6 md:mb-8 opacity-0 transform translate-y-4 transition-all duration-300 px-2"
          variants={fadeInUp}
        >
          Open protocol to communicate securely between Wallets and Dapps. The protocol establishes a remote connection using bridge server to fix blockchain transaction issues in real time.
        </motion.p>
        
        <motion.div 
          ref={btnRef}
          className="flex flex-col sm:flex-row items-center gap-4 opacity-0 transform translate-y-4 transition-all duration-300 w-full sm:w-auto"
          variants={fadeInUp}
        >
          <WalletButton className="w-full sm:w-auto" />
          <motion.div
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              to="/how-we-help" 
              className="group px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full border border-teal-500/30 hover:border-teal-400/60 text-gray-200 hover:text-white transition-all duration-300 hover:shadow-md w-full sm:w-auto text-center flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                How We Help
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="mt-12 md:mt-16 w-full max-w-4xl"
          variants={fadeInUp}
        >
          <img 
            src="/lovable-uploads/07e59f18-4fd9-47bf-af36-612408ecfc48.png" 
            alt="AI digital human face with technological enhancements"
            className="w-full h-auto rounded-xl shadow-lg mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
        variants={pulseAnimation}
      >
        <Link to="/how-we-help" className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white transition-colors">
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            animate={{ y: [0, 5, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </motion.svg>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
