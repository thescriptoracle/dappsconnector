
import React, { useEffect, useRef } from 'react';
import WalletButton from './WalletButton';

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
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="section-container relative z-10 text-center flex flex-col items-center">
        <div className="mb-4 opacity-0 transform translate-y-4" ref={titleRef}>
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-accent/10 text-accent mb-6 transition-all duration-300 hover:bg-accent/20">
            The Next Generation Blockchain Interface
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6 transition-all duration-300">
            Seamless Access to <br className="hidden md:block" />
            <span className="text-gradient">Decentralized Future</span>
          </h1>
        </div>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 transform translate-y-4 transition-all duration-300"
        >
          Connect your wallet and experience the most intuitive blockchain interface. 
          Securely manage assets, interact with dApps, and explore the Web3 ecosystem.
        </p>
        
        <div 
          ref={btnRef}
          className="flex flex-col sm:flex-row items-center gap-4 opacity-0 transform translate-y-4 transition-all duration-300"
        >
          <WalletButton className="w-full sm:w-auto" />
          <a 
            href="#features" 
            className="px-6 py-3 rounded-full border border-border hover:border-accent/50 text-foreground/80 hover:text-foreground transition-all duration-300 hover:shadow-md w-full sm:w-auto text-center"
          >
            Explore Features
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#features" className="w-10 h-10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
