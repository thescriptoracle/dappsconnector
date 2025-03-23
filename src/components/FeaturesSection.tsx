import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { AlertTriangle, ArrowRightLeft, Clock, RefreshCw, Shield, FileText } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Transaction Diagnosis',
      description: 'Advanced algorithms analyze your failed or stuck transactions to identify the root cause of the issue.',
      icon: AlertTriangle
    },
    {
      title: 'Gas Fee Optimization',
      description: 'Intelligent fee suggestions help you save on transaction costs while ensuring timely confirmations.',
      icon: ArrowRightLeft
    },
    {
      title: 'Real-time Monitoring',
      description: 'Track your transactions across multiple blockchains with live status updates and notifications.',
      icon: Clock
    },
    {
      title: 'Transaction Acceleration',
      description: 'Speed up stuck transactions with our acceleration tools that properly adjust gas prices.',
      icon: RefreshCw
    },
    {
      title: 'Enhanced Security',
      description: 'Triple-layered security protocols ensure your private keys never leave your device while we diagnose issues.',
      icon: Shield
    },
    {
      title: 'Transaction History',
      description: 'Comprehensive transaction logs with detailed analytics and exportable reports for your records.',
      icon: FileText
    }
  ];

  // Animation refs and controls
  const featuresSectionRef = useRef(null);
  const featuresInView = useInView(featuresSectionRef, { once: true, amount: 0.1 });
  const featuresControls = useAnimation();

  // Animate sections when they come into view
  useEffect(() => {
    if (featuresInView) {
      featuresControls.start('visible');
    }
  }, [featuresInView, featuresControls]);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.section 
      id="features" 
      className="py-20 md:py-32 relative"
      ref={featuresSectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={featuresControls}
    >
      <div className="section-container">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          variants={itemVariants}
        >
          <motion.span 
            className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-accent/10 text-accent mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ 
              backgroundColor: "rgba(var(--accent), 0.2)", 
              scale: 1.05,
              transition: { duration: 0.2 } 
            }}
          >
            Transaction Solutions
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            variants={itemVariants}
          >
            Advanced Tools for Transaction Issues
          </motion.h2>
          <motion.p 
            className="text-muted-foreground"
            variants={itemVariants}
          >
            Our comprehensive suite of tools helps diagnose, fix, and prevent common blockchain transaction problems.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={sectionVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
