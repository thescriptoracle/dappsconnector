
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const CtaSection: React.FC = () => {
  // Animation refs and controls
  const ctaSectionRef = useRef(null);
  const ctaInView = useInView(ctaSectionRef, { once: true, amount: 0.3 });
  const ctaControls = useAnimation();

  // Animate section when it comes into view
  useEffect(() => {
    if (ctaInView) {
      ctaControls.start('visible');
    }
  }, [ctaInView, ctaControls]);

  // Optimized animation variants with reduced complexity
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const ctaButtonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="cta" 
      className="py-16 md:py-24 relative"
      ref={ctaSectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={ctaControls}
      aria-labelledby="cta-heading"
    >
      <div className="section-container">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={sectionVariants}
        >
          <motion.span 
            className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-accent/10 text-accent mb-4"
            variants={itemVariants}
          >
            Get Started Today
          </motion.span>
          <motion.h2 
            id="cta-heading"
            className="text-3xl md:text-4xl font-display font-bold mb-6 bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent bg-[length:200%_100%]"
            variants={itemVariants}
          >
            Resolve Your Transaction Issues Now
          </motion.h2>
          <motion.p 
            className="text-muted-foreground mb-8"
            variants={itemVariants}
          >
            Connect your wallet to diagnose transaction problems, optimize gas fees, and accelerate stuck transactions – all with bank-level security and privacy.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={sectionVariants}
          >
            <motion.a 
              href="#" 
              className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:shadow-lg shadow-accent/30 hover:shadow-accent/40 transition-all duration-300 w-full sm:w-auto"
              variants={ctaButtonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              aria-label="Connect your wallet"
            >
              Connect Wallet
            </motion.a>
            <motion.a 
              href="#features" 
              className="px-6 py-3 rounded-full border border-border hover:border-accent/50 text-foreground/80 hover:text-foreground transition-all duration-300 hover:shadow-md w-full sm:w-auto"
              variants={ctaButtonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              aria-label="Learn more about our features"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CtaSection;
