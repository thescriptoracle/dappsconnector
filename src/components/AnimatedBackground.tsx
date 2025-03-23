
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-background to-background/95 opacity-70" />
      
      {/* Animated blobs */}
      <motion.div 
        className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-b from-accent/10 to-accent/0 blur-3xl opacity-30"
        animate={{
          x: [50, 0, 50],
          y: [-50, 0, -50],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full bg-gradient-to-t from-primary/10 to-primary/0 blur-3xl opacity-20"
        animate={{
          x: [-100, 0, -100],
          y: [50, 0, 50],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-accent/5 to-primary/5 blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2Mmgt
MnYtMnptLTQgMnYyaC0ydi0yaDJ6bTIgMGgydjJoLTJ2LTJ6bS0yLTJoMnYyaC0ydi0yem0tNCAydjJoLTJ2LTJoMnptMiAwaDJ2Mmgt
MnYtMnptLTItNGgydjJoLTJ2LTJ6bTIgMGgydjJoLTJ2LTJ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=')]" />
      
      {/* Grain effect */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        filter: 'contrast(190%) brightness(150%)'
      }} />
    </div>
  );
};

export default AnimatedBackground;
