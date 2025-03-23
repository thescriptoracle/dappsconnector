
import React from 'react';
import { motion } from 'framer-motion';
import SecurityFeatureList from './SecurityFeatureList';

type TechInfoContentProps = {
  sectionVariants: any;
  techItemVariants: any;
};

const TechInfoContent: React.FC<TechInfoContentProps> = ({ 
  sectionVariants, 
  techItemVariants 
}) => {
  const securityFeatures = [
    'Zero-knowledge technology keeps your data private',
    'Non-custodial design - we never hold your keys or assets',
    'Regular security audits by leading blockchain firms',
    'Transparent, open-source transaction analysis tools'
  ];

  return (
    <motion.div 
      className="lg:w-1/2 order-2 lg:order-1"
      variants={sectionVariants}
    >
      <motion.span 
        className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-accent/10 text-accent mb-4"
        whileHover={{ 
          backgroundColor: "rgba(var(--accent), 0.2)", 
          scale: 1.05,
          transition: { duration: 0.2 } 
        }}
        variants={techItemVariants}
      >
        Transaction Security
      </motion.span>
      <motion.h2 
        className="text-3xl md:text-4xl font-display font-bold mb-6"
        variants={techItemVariants}
        whileInView={{ 
          textShadow: ["0px 0px 0px rgba(var(--accent), 0)", "0px 0px 8px rgba(var(--accent), 0.3)", "0px 0px 0px rgba(var(--accent), 0)"],
          transition: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
      >
        Your Security is Our Priority
      </motion.h2>
      <motion.p 
        className="text-muted-foreground mb-6"
        variants={techItemVariants}
      >
        Our non-custodial technology ensures your private keys and assets remain under your control at all times, even while we diagnose and fix transaction issues.
      </motion.p>
      
      <SecurityFeatureList 
        features={securityFeatures} 
        techItemVariants={techItemVariants} 
      />
    </motion.div>
  );
};

export default TechInfoContent;
