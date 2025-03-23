
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Shield, Zap, Lock, RefreshCw, Database, Globe } from 'lucide-react';

const Index = () => {
  const features = [
    {
      title: 'Multi-Chain Support',
      description: 'Connect seamlessly with multiple blockchains including Ethereum, Solana, Polygon, and more from a single interface.',
      icon: Globe
    },
    {
      title: 'Lightning Fast',
      description: 'Experience near-instant transactions with our optimized connection protocols and state-of-the-art infrastructure.',
      icon: Zap
    },
    {
      title: 'Enhanced Security',
      description: 'Industry-leading security measures protect your assets and data with advanced encryption and secure authentication.',
      icon: Shield
    },
    {
      title: 'Real-time Updates',
      description: 'Stay informed with real-time transaction updates, price alerts, and network status notifications.',
      icon: RefreshCw
    },
    {
      title: 'Advanced Privacy',
      description: 'Full control over your data with customizable privacy settings and zero knowledge proof implementations.',
      icon: Lock
    },
    {
      title: 'Smart Contract Integration',
      description: 'Interact with smart contracts directly through our intuitive interface with built-in verification features.',
      icon: Database
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      
      <main>
        <HeroSection />
        
        <section id="features" className="py-20 md:py-32 relative">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-accent/10 text-accent mb-4">
                Core Features
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Redefining Blockchain Interaction
              </h2>
              <p className="text-muted-foreground">
                Our platform combines cutting-edge technology with intuitive design to deliver a seamless blockchain experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  index={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section id="technology" className="py-20 md:py-32 bg-muted/50 relative">
          <div className="section-container">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 order-2 lg:order-1 animate-fade-in">
                <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-accent/10 text-accent mb-4">
                  Advanced Technology
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Built for the Future of Web3
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our architecture is designed with scalability and future-proofing in mind, ensuring compatibility with emerging blockchain standards and protocols.
                </p>
                
                <ul className="space-y-4">
                  {[
                    'Zero-knowledge proofs for enhanced privacy',
                    'Layer 2 integration for reduced gas fees',
                    'Cross-chain asset transfers and swaps',
                    'Decentralized identity management'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <a href="#" className="inline-flex items-center text-accent font-medium gap-1 group">
                    Learn more about our technology
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-accent/10 to-primary/5 flex items-center justify-center backdrop-blur-sm glassmorphism border border-white/10 animate-fade-in">
                    <div className="w-full h-full p-6 md:p-10 flex items-center justify-center">
                      <div className="w-full max-w-xs aspect-square relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-primary/40 animate-pulse-slow opacity-70" />
                        <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                          <div className="text-center">
                            <div className="font-display font-bold text-4xl md:text-5xl mb-2 text-gradient">Nexus</div>
                            <div className="text-xs md:text-sm text-muted-foreground">Blockchain Interface</div>
                          </div>
                        </div>
                        <div className="absolute inset-0 rounded-full border border-accent/20 animate-pulse-slow opacity-50" style={{ animationDelay: "1s" }} />
                        <div className="absolute inset-[-15px] rounded-full border border-accent/10 animate-pulse-slow opacity-30" style={{ animationDelay: "1.5s" }} />
                        <div className="absolute inset-[-30px] rounded-full border border-accent/5 animate-pulse-slow opacity-20" style={{ animationDelay: "2s" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="security" className="py-20 md:py-32 relative">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-accent/10 text-accent mb-4">
                Security First
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Your Assets, Protected
              </h2>
              <p className="text-muted-foreground">
                We implement the highest standards of security to ensure your digital assets remain safe and under your control.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Non-Custodial',
                  description: 'Your private keys never leave your device. We use secure local encryption to protect your wallets.',
                  icon: '🔒'
                },
                {
                  title: 'Regular Audits',
                  description: 'Our code is regularly audited by leading security firms in the blockchain industry.',
                  icon: '🛡️'
                },
                {
                  title: 'Open Source',
                  description: 'Our core security components are open source, allowing for community review and verification.',
                  icon: '👁️'
                }
              ].map((item, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <a href="#" className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:shadow-lg shadow-accent/30 hover:shadow-accent/40 transition-all duration-300">
                Security Whitepaper
              </a>
            </div>
          </div>
        </section>
        
        <section id="about" className="py-20 md:py-32 bg-muted/50 relative">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-accent/10 text-accent mb-4">
                Join Us Today
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-muted-foreground mb-8">
                Connect your wallet and join thousands of users who have already discovered the most intuitive way to interact with blockchain technology.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#" className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:shadow-lg shadow-accent/30 hover:shadow-accent/40 transition-all duration-300 w-full sm:w-auto">
                  Connect Wallet
                </a>
                <a href="#" className="px-6 py-3 rounded-full border border-border hover:border-accent/50 text-foreground/80 hover:text-foreground transition-all duration-300 hover:shadow-md w-full sm:w-auto">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
