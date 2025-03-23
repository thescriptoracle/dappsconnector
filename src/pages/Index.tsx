
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Shield, Clock, AlertTriangle, RefreshCw, FileText, ArrowRightLeft } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

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
                Transaction Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Advanced Tools for Transaction Issues
              </h2>
              <p className="text-muted-foreground">
                Our comprehensive suite of tools helps diagnose, fix, and prevent common blockchain transaction problems.
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
                  Transaction Security
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Your Security is Our Priority
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our non-custodial technology ensures your private keys and assets remain under your control at all times, even while we diagnose and fix transaction issues.
                </p>
                
                <ul className="space-y-4">
                  {[
                    'Zero-knowledge technology keeps your data private',
                    'Non-custodial design - we never hold your keys or assets',
                    'Regular security audits by leading blockchain firms',
                    'Transparent, open-source transaction analysis tools'
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
                  <a href="#security" className="inline-flex items-center text-accent font-medium gap-1 group">
                    Learn more about our security measures
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="lg:w-1/2 order-1 lg:order-2">
                <motion.div 
                  className="relative w-full max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <img 
                    src="/lovable-uploads/22d9d417-4897-49d6-966d-ca6748e5e9c4.png" 
                    alt="AI Technology Visualization" 
                    className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent/30 via-transparent to-transparent opacity-60" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="security" className="py-20 md:py-32 relative">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-accent/10 text-accent mb-4">
                Maximum Protection
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Security at Every Level
              </h2>
              <p className="text-muted-foreground">
                Our multi-layered security approach ensures your transactions and assets remain protected throughout the diagnosis and repair process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Client-Side Only',
                  description: 'All transaction analysis happens locally on your device. Your private data never touches our servers.',
                  icon: '🔒'
                },
                {
                  title: 'Regular Audits',
                  description: 'Our codebase undergoes regular security audits by leading blockchain security firms.',
                  icon: '🛡️'
                },
                {
                  title: 'Open Source',
                  description: 'Our core security components are open source and community-verified for maximum transparency.',
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
            
            <div className="mt-16 mb-16">
              <Alert className="bg-card border-accent/20 animate-fade-in">
                <AlertTitle className="text-lg font-display mb-2">Your Security is Guaranteed</AlertTitle>
                <AlertDescription>
                  <p className="mb-4">
                    Our commitment to your security is unwavering. We employ industry-leading security measures and best practices to ensure your assets remain safe:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Non-custodial architecture - we never have access to your funds</li>
                    <li>Client-side encryption of all sensitive data</li>
                    <li>Open-source code for community verification</li>
                    <li>Regular security audits and bug bounty programs</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </div>

            <motion.div 
              className="mt-8 relative overflow-hidden rounded-2xl"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <img 
                src="/lovable-uploads/75640ae6-daab-475b-a91d-bcff44665b71.png" 
                alt="Blockchain Network Visualization" 
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 drop-shadow-md">Secure Blockchain Connections</h3>
                <p className="text-sm md:text-base text-white/90 max-w-xl mx-auto drop-shadow-md">
                  Our protocol establishes secure connections between your wallet and the blockchain network
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        <section id="about" className="py-20 md:py-32 bg-muted/50 relative">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-accent/10 text-accent mb-4">
                Get Started Today
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Resolve Your Transaction Issues Now
              </h2>
              <p className="text-muted-foreground mb-8">
                Connect your wallet to diagnose transaction problems, optimize gas fees, and accelerate stuck transactions – all with bank-level security and privacy.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#" className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:shadow-lg shadow-accent/30 hover:shadow-accent/40 transition-all duration-300 w-full sm:w-auto">
                  Connect Wallet
                </a>
                <a href="#features" className="px-6 py-3 rounded-full border border-border hover:border-accent/50 text-foreground/80 hover:text-foreground transition-all duration-300 hover:shadow-md w-full sm:w-auto">
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
