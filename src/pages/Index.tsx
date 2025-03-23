
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import FeaturesSection from '@/components/FeaturesSection';
import TechnologySection from '@/components/TechnologySection';
import CtaSection from '@/components/CtaSection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  // Preload critical assets
  useEffect(() => {
    // Add any critical images here that should be preloaded
    const preloadLinks = [
      '/lovable-uploads/36256cb0-c2b2-45a8-bb10-cbf10f5a1d8c.png'
    ];
    
    preloadLinks.forEach(link => {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = link;
      document.head.appendChild(preloadLink);
    });
    
    // Clean up
    return () => {
      document.querySelectorAll('link[rel="preload"][as="image"]').forEach(el => {
        document.head.removeChild(el);
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>DappsConnector - Blockchain Transaction Troubleshooting Tool</title>
        <meta name="description" content="Fix stuck blockchain transactions, optimize gas fees, and solve transaction issues in real-time with DappsConnector." />
        <meta name="keywords" content="blockchain, transactions, gas fees, crypto, ethereum, bitcoin, wallet connector, transaction fix" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://dappsconnector.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dappsconnector.com/" />
        <meta property="og:title" content="DappsConnector - Blockchain Transaction Troubleshooting" />
        <meta property="og:description" content="Fix stuck blockchain transactions, optimize gas fees, and solve transaction issues in real-time." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://dappsconnector.com/" />
        <meta name="twitter:title" content="DappsConnector - Blockchain Transaction Troubleshooting" />
        <meta name="twitter:description" content="Fix stuck blockchain transactions, optimize gas fees, and solve transaction issues in real-time." />
      </Helmet>
      
      <div className="min-h-screen relative overflow-hidden">
        <AnimatedBackground />
        <Header />
        
        <main>
          <HeroSection />
          <FeaturesSection />
          <TechnologySection />
          <CtaSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
