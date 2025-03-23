
import React, { useEffect, useRef } from 'react';
import WalletButton from './WalletButton';
import { motion } from 'framer-motion';
import { fadeInUp, slideInFromLeft, slideInFromRight, staggerContainer, pulseAnimation } from '@/lib/animations';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

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
      if (!hero) return;
      
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
  }, []);

  return (
    <motion.section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      initial="hidden"
      animate="show"
      variants={staggerContainer(0.2, 0.1)}
    >
      {/* Enhanced abstract shapes background with better gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-accent/30 to-accent/5 blur-3xl"
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/5 w-80 h-80 rounded-full bg-gradient-to-tl from-primary/20 to-accent/10 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-gradient-to-tr from-accent/20 to-primary/10 blur-3xl"
          animate={{
            x: [0, 25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="section-container relative z-10 text-center flex flex-col items-center">
        <motion.div 
          className="mb-4 opacity-0 transform translate-y-4" 
          ref={titleRef}
          variants={fadeInUp}
        >
          <motion.span 
            className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-gradient-to-r from-accent/20 to-accent/10 text-accent mb-6 transition-all duration-300 hover:from-accent/30 hover:to-accent/20 border border-accent/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Blockchain Transaction Troubleshooting
          </motion.span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6 transition-all duration-300">
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-background-pan bg-[length:200%]">Secure. Fast. Seamless</span>
            <br className="hidden md:block" />
            <span className="relative">
              dApps Protocol
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent/80 to-accent/0 animate-pulse-slow"></div>
            </span>
          </h1>
        </motion.div>
        
        <motion.p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 transform translate-y-4 transition-all duration-300"
          variants={fadeInUp}
        >
          Open protocol to communicate secure between Walets and Dapps (Web3 Apps). The protocol establishes a remote connection using bridge server to fix blockchains transaction issues in real time.
        </motion.p>
        
        <motion.div 
          ref={btnRef}
          className="flex flex-col sm:flex-row items-center gap-4 opacity-0 transform translate-y-4 transition-all duration-300"
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
              className="group px-6 py-3 rounded-full border border-border hover:border-accent/50 text-foreground/80 hover:text-foreground transition-all duration-300 hover:shadow-md w-full sm:w-auto text-center flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                How We Help
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={pulseAnimation}
      >
        <Link to="/how-we-help" className="w-10 h-10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors">
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
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
