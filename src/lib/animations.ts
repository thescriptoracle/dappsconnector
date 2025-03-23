import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { y: 60, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const staggerContainer: Variants = (delayChildren?: number, staggerDirection?: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: delayChildren,
      staggerDirection: staggerDirection
    },
  },
});

export const slideInFromLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const slideInFromRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const pulseAnimation = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Bounce slow animation
export const bounceSlowAnimation = {
  hidden: { y: 0 },
  show: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
