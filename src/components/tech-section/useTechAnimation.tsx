
import { useRef, useEffect } from 'react';
import { useInView, useAnimation } from 'framer-motion';

export const useTechAnimation = () => {
  // Animation refs and controls
  const techSectionRef = useRef(null);
  const techInView = useInView(techSectionRef, { once: true, amount: 0.2 });
  const techControls = useAnimation();

  // Animate sections when they come into view
  useEffect(() => {
    if (techInView) {
      techControls.start('visible');
    }
  }, [techInView, techControls]);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1
      }
    }
  };

  const techItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Pulse animation for interactive elements
  const pulseVariants = {
    pulse: {
      scale: [1, 1.03, 1],
      opacity: [0.9, 1, 0.9],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return {
    techSectionRef,
    techControls,
    sectionVariants,
    techItemVariants,
    pulseVariants
  };
};
