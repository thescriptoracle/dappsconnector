
export const staggerContainer = (staggerChildren?: number, delayChildren?: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerChildren || 0.1,
      delayChildren: delayChildren || 0,
    },
  },
});

export const fadeInUp = {
  hidden: { 
    y: 20, 
    opacity: 0 
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const scaleIn = {
  hidden: { 
    scale: 0.9, 
    opacity: 0 
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
    },
  },
};

export const slideInFromLeft = {
  hidden: { 
    x: -100, 
    opacity: 0 
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 200,
    },
  },
};

export const slideInFromRight = {
  hidden: { 
    x: 100, 
    opacity: 0 
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 200,
    },
  },
};

export const pulseAnimation = {
  hidden: {
    scale: 1,
    opacity: 0.8,
  },
  show: {
    scale: [1, 1.02, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const buttonTapAnimation = {
  scale: 0.95,
  transition: {
    duration: 0.1,
  },
};
