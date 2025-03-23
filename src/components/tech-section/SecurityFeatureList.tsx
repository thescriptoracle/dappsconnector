
import React from 'react';
import { motion } from 'framer-motion';

type SecurityFeatureListProps = {
  features: string[];
  techItemVariants: any;
};

const SecurityFeatureList: React.FC<SecurityFeatureListProps> = ({ 
  features, 
  techItemVariants 
}) => {
  return (
    <motion.ul className="space-y-4">
      {features.map((item, index) => (
        <motion.li 
          key={index} 
          className="flex items-start gap-3"
          variants={techItemVariants}
          custom={index}
          whileHover={{ x: 5, transition: { duration: 0.2 } }}
        >
          <motion.div 
            className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center mt-0.5"
            whileHover={{ 
              scale: 1.2, 
              backgroundColor: "rgba(var(--accent), 0.3)",
              transition: { duration: 0.2 } 
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </motion.div>
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SecurityFeatureList;
