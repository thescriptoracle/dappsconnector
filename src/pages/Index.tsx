
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Shield, Clock, AlertTriangle, RefreshCw, FileText, ArrowRightLeft } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

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
        
        {/* Section 1: Features */}
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
        
        {/* Section 2: Technology */}
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
              </div>
              
              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-accent/10 to-primary/5 flex items-center justify-center backdrop-blur-sm glassmorphism border border-white/10 animate-fade-in">
                    <div className="w-full h-full p-6 md:p-10 flex items-center justify-center">
                      <div className="w-full max-w-xs aspect-square relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-primary/40 animate-pulse-slow opacity-70" />
                        <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                          <div className="text-center">
                            <div className="font-display font-bold text-4xl md:text-5xl mb-2 text-gradient">Dapps</div>
                            <div className="text-xs md:text-sm text-muted-foreground">Transaction Resolver</div>
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
        
        {/* Section 3: Call to Action */}
        <section id="cta" className="py-20 md:py-32 relative">
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
