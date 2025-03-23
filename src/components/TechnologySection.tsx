
import React from 'react';
import { motion } from 'framer-motion';
import { useTechAnimation } from './tech-section/useTechAnimation';
import TechInfoContent from './tech-section/TechInfoContent';
import TechVisualContent from './tech-section/TechVisualContent';

const TechnologySection: React.FC = () => {
  const { 
    techSectionRef, 
    techControls, 
    sectionVariants, 
    techItemVariants 
  } = useTechAnimation();

  return (
    <motion.section 
      id="technology" 
      className="py-20 md:py-32 bg-muted/50 relative"
      ref={techSectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={techControls}
    >
      <div className="section-container">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          variants={sectionVariants}
        >
          <TechInfoContent 
            sectionVariants={sectionVariants} 
            techItemVariants={techItemVariants} 
          />
          
          <TechVisualContent 
            sectionVariants={sectionVariants} 
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechnologySection;
