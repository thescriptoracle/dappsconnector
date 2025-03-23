import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Shield, Clock, AlertTriangle, RefreshCw, FileText, ArrowRightLeft } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Index = () => {
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
  
  const techSectionRef = useRef(null);
  const techInView = useInView(techSectionRef, { once: true, amount: 0.2 });
  const techControls = useAnimation();
  
  const ctaSectionRef = useRef(null);
  const ctaInView = useInView(ctaSectionRef, { once: true, amount: 0.3 });
  const ctaControls = useAnimation();

  // Animate sections when they come into view
  useEffect(() => {
    if (featuresInView) {
      featuresControls.start('visible');
    }
    
    if (techInView) {
      techControls.start('visible');
    }
    
    if (ctaInView) {
      ctaControls.start('visible');
    }
  }, [featuresInView, techInView, ctaInView, featuresControls, techControls, ctaControls]);

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

  const ctaButtonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Section 1: Features with enhanced animations */}
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
                whileInView={{ 
                  backgroundSize: ["100% 100%", "200% 100%"],
                  backgroundPosition: ["0% 0%", "100% 0%"],
                  transition: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "linear" }
                }}
                style={{
                  backgroundImage: "linear-gradient(90deg, rgba(var(--accent), 1), #ffffff, rgba(var(--accent), 1))",
                  backgroundSize: "200% 100%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent"
                }}
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
        
        {/* Section 2: Technology with enhanced animations */}
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
                
                <motion.ul 
                  className="space-y-4"
                  variants={sectionVariants}
                >
                  {[
                    'Zero-knowledge technology keeps your data private',
                    'Non-custodial design - we never hold your keys or assets',
                    'Regular security audits by leading blockchain firms',
                    'Transparent, open-source transaction analysis tools'
                  ].map((item, index) => (
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
              </motion.div>
              
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
            </motion.div>
          </div>
        </motion.section>
        
        {/* Section 3: Call to Action with enhanced animations */}
        <motion.section 
          id="cta" 
          className="py-20 md:py-32 relative"
          ref={ctaSectionRef}
          variants={sectionVariants}
          initial="hidden"
          animate={ctaControls}
        >
          <div className="section-container">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              variants={sectionVariants}
            >
              <motion.span 
                className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-accent/10 text-accent mb-4"
                whileHover={{ 
                  backgroundColor: "rgba(var(--accent), 0.2)", 
                  scale: 1.05,
                  transition: { duration: 0.2 } 
                }}
                variants={itemVariants}
              >
                Get Started Today
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-display font-bold mb-6"
                variants={itemVariants}
                whileInView={{ 
                  backgroundSize: ["100% 100%", "200% 100%"],
                  backgroundPosition: ["0% 0%", "100% 0%"],
                  transition: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "linear" }
                }}
                style={{
                  backgroundImage: "linear-gradient(90deg, rgba(var(--accent), 1), #ffffff, rgba(var(--accent), 1))",
                  backgroundSize: "200% 100%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent"
                }}
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
                >
                  Connect Wallet
                </motion.a>
                <motion.a 
                  href="#features" 
                  className="px-6 py-3 rounded-full border border-border hover:border-accent/50 text-foreground/80 hover:text-foreground transition-all duration-300 hover:shadow-md w-full sm:w-auto"
                  variants={ctaButtonVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
