
import React from 'react';
import { motion } from 'framer-motion';

type TechVisualContentProps = {
  sectionVariants: any;
};

const TechVisualContent: React.FC<TechVisualContentProps> = ({ 
  sectionVariants 
}) => {
  return (
    <motion.div 
      className="lg:w-1/2 order-1 lg:order-2"
      variants={sectionVariants}
      whileInView={{ 
        scale: [0.95, 1, 0.98, 1.02, 1],
        transition: { duration: 2, times: [0, 0.4, 0.6, 0.8, 1] }
      }}
    >
      <div className="relative w-full aspect-square max-w-md mx-auto">
        <motion.div 
          className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-accent/10 to-primary/5 flex items-center justify-center backdrop-blur-sm glassmorphism border border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: { duration: 0.8, delay: 0.2 }
          }}
          whileHover={{ 
            boxShadow: "0 0 30px rgba(var(--accent), 0.4)",
            transition: { duration: 0.5 }
          }}
        >
          <div className="w-full h-full p-6 md:p-10 flex items-center justify-center">
            <div className="w-full max-w-xs aspect-square relative">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-primary/40 opacity-70"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.9, 0.7]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute inset-2 rounded-full bg-background flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="font-display font-bold text-4xl md:text-5xl mb-2 text-gradient"
                    animate={{ 
                      textShadow: ["0px 0px 0px rgba(var(--accent), 0)", "0px 0px 10px rgba(var(--accent), 0.5)", "0px 0px 0px rgba(var(--accent), 0)"]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >
                    Dapps
                  </motion.div>
                  <div className="text-xs md:text-sm text-muted-foreground">Transaction Resolver</div>
                </div>
              </motion.div>
              <motion.div 
                className="absolute inset-0 rounded-full border border-accent/20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute inset-[-15px] rounded-full border border-accent/10"
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div 
                className="absolute inset-[-30px] rounded-full border border-accent/5"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2] 
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TechVisualContent;
