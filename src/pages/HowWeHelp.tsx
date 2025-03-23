
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, MessageSquare, Server } from 'lucide-react';

const HowWeHelp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <motion.main 
        className="flex-1"
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.1, 0.1)}
      >
        {/* Hero section */}
        <section className="py-12 md:py-20 section-container">
          <motion.div variants={fadeInUp} className="text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-accent/10 text-accent mb-4">
              Solutions
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display">How We Help</h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Our protocol assists in resolving blockchain transaction issues through innovative solutions and secure technology.
            </p>
          </motion.div>
        </section>
        
        {/* Feature cards - enhanced with icons and better spacing */}
        <section className="py-8 md:py-12 section-container">
          <motion.div variants={fadeInUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-border/50 bg-card shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <MessageSquare size={22} />
                </div>
                <h2 className="text-xl font-semibold mb-2 font-display">Real-Time Troubleshooting</h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Our protocol enables instant analysis of transaction issues, with AI-powered solutions delivered in seconds.
                </p>
              </div>
              
              <div className="p-6 rounded-xl border border-border/50 bg-card shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Shield size={22} />
                </div>
                <h2 className="text-xl font-semibold mb-2 font-display">Secure Communication</h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  End-to-end encrypted channels between wallets and dApps ensure your private keys never leave your device.
                </p>
              </div>
              
              <div className="p-6 rounded-xl border border-border/50 bg-card shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Server size={22} />
                </div>
                <h2 className="text-xl font-semibold mb-2 font-display">Bridge Server Technology</h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Our proprietary bridge servers establish reliable remote connections for seamless transaction repair.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* Advanced features section */}
        <section className="py-8 md:py-12 section-container bg-muted/50">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <motion.div 
              variants={fadeInUp}
              className="md:w-1/2"
            >
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-accent/10 text-accent mb-4">
                Advanced Features
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">Comprehensive Solution Suite</h2>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                Our platform offers a complete toolkit for diagnosing and resolving transaction issues across multiple blockchains.
              </p>
              
              <ul className="space-y-3">
                {[
                  'Gas fee optimization to reduce transaction costs',
                  'Stuck transaction acceleration and recovery',
                  'Smart contract interaction error diagnosis',
                  'Cross-chain transaction monitoring',
                  'Custom alert creation for transaction statuses'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1 text-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5l10 -10"></path>
                      </svg>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="md:w-1/2"
            >
              <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4 font-display">How Our Protocol Works</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-medium text-sm">1</div>
                    <div>
                      <h4 className="font-medium mb-1">Secure Connection</h4>
                      <p className="text-sm text-muted-foreground">Connect your wallet through our encrypted bridge technology.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-medium text-sm">2</div>
                    <div>
                      <h4 className="font-medium mb-1">Transaction Analysis</h4>
                      <p className="text-sm text-muted-foreground">Our AI scans the transaction to identify specific issues.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-medium text-sm">3</div>
                    <div>
                      <h4 className="font-medium mb-1">Resolution Options</h4>
                      <p className="text-sm text-muted-foreground">Choose from recommended solutions to fix your transaction.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-medium text-sm">4</div>
                    <div>
                      <h4 className="font-medium mb-1">Implementation</h4>
                      <p className="text-sm text-muted-foreground">Apply the fix directly through our secure interface.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-12 md:py-20 section-container">
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">Ready to Solve Transaction Issues?</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-8">
              Connect your wallet today and experience hassle-free blockchain transactions with our secure protocol.
            </p>
            <button className="px-6 py-3 bg-accent text-accent-foreground rounded-full hover:shadow-lg transition-all duration-300">
              Connect Wallet
            </button>
          </motion.div>
        </section>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default HowWeHelp;
