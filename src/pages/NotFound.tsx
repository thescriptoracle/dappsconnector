
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      
      <motion.main 
        className="flex items-center justify-center min-h-screen pt-20 pb-20"
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.1, 0.1)}
      >
        <div className="section-container">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto"
            variants={fadeInUp}
          >
            <div className="text-center lg:text-left">
              <span className="inline-block text-9xl font-display font-bold mb-4 text-gradient">404</span>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">Page Not Found</h1>
              <p className="text-muted-foreground mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
              
              <Link to="/" className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:shadow-lg shadow-accent/30 hover:shadow-accent/40 transition-all duration-300 inline-block">
                Return to Home
              </Link>
            </div>
            
            <div className="order-first lg:order-last mx-auto">
              <div className="relative w-full max-w-md">
                <img 
                  src="/lovable-uploads/9bfdf067-5587-4350-923d-2ccfda0a8ccb.png"
                  alt="Digital network globe"
                  className="w-full h-auto rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32">
                  <img 
                    src="/lovable-uploads/3907566d-5105-4549-9901-130edd4672cb.png"
                    alt="Network sphere in hand"
                    className="w-full h-auto rounded-xl shadow-md transform -rotate-6 hover:rotate-0 transition-transform duration-500 opacity-90 hover:opacity-100"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
