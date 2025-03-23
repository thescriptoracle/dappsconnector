import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
        <section className="py-20 section-container">
          <motion.div variants={fadeInUp} className="text-center">
            <h1 className="text-4xl font-bold mb-4">How We Help</h1>
            <p className="text-lg text-muted-foreground">
              Learn how our protocol can assist in resolving blockchain transaction issues.
            </p>
          </motion.div>
        </section>
        
        {/* Feature sections */}
        <section className="py-12 section-container">
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Real-Time Troubleshooting</h2>
              <p className="text-muted-foreground">
                Our protocol allows for real-time analysis and resolution of transaction issues.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Secure Communication</h2>
              <p className="text-muted-foreground">
                Ensuring secure communication between wallets and dApps is our top priority.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Bridge Server Technology</h2>
              <p className="text-muted-foreground">
                Utilizing bridge servers to establish reliable remote connections.
              </p>
            </div>
          </motion.div>
        </section>
        
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default HowWeHelp;
