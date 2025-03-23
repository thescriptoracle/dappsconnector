
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { 
  ArrowRightLeft, 
  AlertTriangle, 
  Clock, 
  RefreshCw, 
  Shield, 
  FileText, 
  CheckCircle2, 
  Zap,
  ChevronsRight,
  PieChart,
  Database,
  Lock
} from 'lucide-react';

const HowWeHelp = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      
      <main className="pt-20 pb-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-accent/20 to-primary/10 blur-3xl opacity-60" />
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl opacity-60" />
          </div>
          
          <motion.div 
            className="section-container relative z-10 text-center"
            initial="hidden"
            animate="show"
            variants={staggerContainer(0.1, 0.1)}
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-accent/10 text-accent mb-4">
                Our Solutions
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
                How We Help With Your
                <span className="block bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-background-pan bg-[length:200%]">
                  Blockchain Transactions
                </span>
              </h1>
            </motion.div>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Our comprehensive suite of tools and services is designed to diagnose, fix, and optimize
              your blockchain transactions with unparalleled security and efficiency.
            </motion.p>
          </motion.div>
        </section>
        
        {/* Core Features Overview */}
        <section className="py-16 relative">
          <div className="section-container">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {coreFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  index={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  accentColor={feature.accentColor}
                />
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Detailed Feature Sections */}
        <section className="py-16 bg-muted/30 relative">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-accent/10 text-accent mb-4">
                In-Depth Features
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Detailed Feature Breakdown
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore the advanced capabilities of our platform and how we address specific blockchain transaction challenges.
              </p>
            </div>
            
            {detailedFeatures.map((feature, index) => (
              <DetailedFeatureSection 
                key={index}
                title={feature.title}
                description={feature.description}
                points={feature.points}
                icon={feature.icon}
                reverse={index % 2 !== 0}
                accentColor={feature.accentColor}
              />
            ))}
          </div>
        </section>
        
        {/* Security Commitment */}
        <section className="py-16 relative">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-accent/10 text-accent mb-4">
                Security First
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our Security Commitment
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Security is foundational to everything we do. Our multi-layered approach ensures your 
                assets and data remain protected at all times.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="bg-card border border-border/50 transition-all duration-300 hover:shadow-md hover:border-accent/20 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardContent className="p-6">
                    <div className="mb-4 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      {React.createElement(feature.icon, { size: 24 })}
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-card border border-accent/20 rounded-lg p-6 animate-fade-in">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Shield size={32} />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-display font-semibold mb-3">
                    Your Security Is Guaranteed
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our commitment to your security is unwavering. We employ industry-leading security measures 
                    and best practices to ensure your assets remain safe:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Non-custodial architecture - we never have access to your funds',
                      'Client-side encryption of all sensitive data',
                      'Open-source code for community verification',
                      'Regular security audits and bug bounty programs',
                      'Secure wallet communication protocols',
                      'Zero knowledge proofs for transaction verification'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-accent/20 to-primary/10 blur-3xl opacity-60" />
            <div className="absolute bottom-1/2 left-1/3 w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl opacity-60" />
          </div>
          
          <div className="section-container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Resolve Your Transaction Issues?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Connect your wallet to experience our comprehensive blockchain transaction solutions with unmatched security and performance.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/" className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:shadow-lg shadow-accent/30 hover:shadow-accent/40 transition-all duration-300 w-full sm:w-auto">
                  Connect Wallet
                </a>
                <a href="/" className="group px-6 py-3 rounded-full border border-border hover:border-accent/50 text-foreground/80 hover:text-foreground transition-all duration-300 hover:shadow-md w-full sm:w-auto flex items-center justify-center gap-2">
                  <span>Learn More</span>
                  <ChevronsRight size={18} className="transform transition-transform duration-300 group-hover:translate-x-1" />
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

// Feature Card Component
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
  accentColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  index,
  accentColor = "from-accent/20 to-accent/5"
}) => {
  return (
    <motion.div 
      className="group relative rounded-2xl overflow-hidden bg-card p-6 border border-border/50 shadow-sm transition-all duration-500 ease-out hover:shadow-md hover:border-accent/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className="mb-6 inline-flex">
          <div className="relative w-14 h-14 rounded-xl flex items-center justify-center bg-accent/10 text-accent overflow-hidden group-hover:scale-110 transition-transform duration-500">
            <Icon className="w-6 h-6 relative z-10" />
          </div>
        </div>
        
        <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-accent transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
      
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent/0 via-accent/80 to-accent/0 w-0 group-hover:w-full transition-all duration-500 ease-out" />
    </motion.div>
  );
};

// Detailed Feature Section Component
interface DetailedFeatureSectionProps {
  title: string;
  description: string;
  points: string[];
  icon: React.ElementType;
  reverse?: boolean;
  accentColor?: string;
}

const DetailedFeatureSection: React.FC<DetailedFeatureSectionProps> = ({
  title,
  description,
  points,
  icon: Icon,
  reverse = false,
  accentColor = "from-accent/20 to-accent/5"
}) => {
  return (
    <motion.div 
      className="flex flex-col lg:flex-row items-center gap-10 py-10 first:pt-0 last:pb-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {reverse && <div className="lg:w-1/2 order-1 lg:order-2"></div>}
      
      <div className={`lg:w-1/2 ${reverse ? 'order-2 lg:order-1' : 'order-1'}`}>
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${accentColor} text-accent`}>
            <Icon size={24} />
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold">{title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{description}</p>
        
        <ul className="space-y-4">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1">
                <CheckCircle2 size={18} className="text-accent" />
              </div>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={`lg:w-1/2 ${reverse ? 'order-1 lg:order-2' : 'order-2'}`}>
        <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-md bg-card p-6 md:p-10">
          <div className={`absolute inset-0 bg-gradient-to-br ${accentColor} opacity-10`}></div>
          
          <div className="relative z-10 flex items-center justify-center min-h-60">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center animate-bounce-slow">
              <Icon size={36} className="text-accent" />
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-accent/20 rounded-full animate-ping-slow opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-accent/10 rounded-full animate-ping-slow opacity-40" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
      
      {!reverse && <div className="lg:w-1/2 order-2"></div>}
      
      {/* Separator */}
      <div className="w-full pt-10">
        <Separator className="bg-border/50" />
      </div>
    </motion.div>
  );
};

// Core Features Data
const coreFeatures = [
  {
    title: 'Transaction Diagnosis',
    description: 'Advanced algorithms analyze your failed or stuck transactions to identify the root cause of the issue quickly and accurately.',
    icon: AlertTriangle,
    accentColor: 'from-yellow-500/20 to-yellow-500/5'
  },
  {
    title: 'Gas Fee Optimization',
    description: 'Intelligent fee suggestions help you save on transaction costs while ensuring timely confirmations across multiple blockchains.',
    icon: ArrowRightLeft,
    accentColor: 'from-blue-500/20 to-blue-500/5'
  },
  {
    title: 'Real-time Monitoring',
    description: 'Track your transactions across multiple blockchains with live status updates and instant notifications.',
    icon: Clock,
    accentColor: 'from-purple-500/20 to-purple-500/5'
  },
  {
    title: 'Transaction Acceleration',
    description: 'Speed up stuck transactions with our acceleration tools that properly adjust gas prices and rebroadcast transactions.',
    icon: RefreshCw,
    accentColor: 'from-green-500/20 to-green-500/5'
  },
  {
    title: 'Enhanced Security',
    description: 'Triple-layered security protocols ensure your private keys never leave your device while we diagnose and fix issues.',
    icon: Shield,
    accentColor: 'from-red-500/20 to-red-500/5'
  },
  {
    title: 'Transaction History',
    description: 'Comprehensive transaction logs with detailed analytics and exportable reports for your records and accounting.',
    icon: FileText,
    accentColor: 'from-amber-500/20 to-amber-500/5'
  }
];

// Detailed Features Data
const detailedFeatures = [
  {
    title: 'Smart Transaction Analysis',
    description: 'Our advanced transaction analysis engine helps identify and resolve transaction issues in seconds with minimal input required from you.',
    icon: PieChart,
    accentColor: 'from-blue-500/20 to-blue-500/5',
    points: [
      'Real-time transaction status monitoring across multiple blockchains',
      'AI-powered issue detection identifies the root cause of failed transactions',
      'Automatic gas price recommendations based on network conditions',
      'Transaction simulation before sending to prevent potential failures',
      'Support for complex smart contract interactions and debugging'
    ]
  },
  {
    title: 'Performance Optimization',
    description: 'Optimize your blockchain interactions for speed, cost, and reliability with our suite of performance tools.',
    icon: Zap,
    accentColor: 'from-yellow-500/20 to-yellow-500/5',
    points: [
      'Transaction acceleration with optimal gas price recalculation',
      'Mempool monitoring to track your transaction\'s position',
      'BatchSend technology to group multiple transactions for gas savings',
      'Priority transaction routing through optimized nodes',
      'Cross-chain bridge performance comparisons to find the best rates'
    ]
  },
  {
    title: 'Comprehensive Data Management',
    description: 'Keep track of all your transactions with detailed analytics and reporting tools designed for both individuals and businesses.',
    icon: Database,
    accentColor: 'from-purple-500/20 to-purple-500/5',
    points: [
      'Historical transaction analysis across all connected wallets',
      'Custom reports for accounting and tax purposes',
      'Portfolio tracking with performance metrics',
      'Gas fee spending analysis with optimization suggestions',
      'Transaction tags and notes for better organization'
    ]
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Our security-first approach ensures your assets and data remain protected with the highest industry standards.',
    icon: Lock,
    accentColor: 'from-red-500/20 to-red-500/5',
    points: [
      'Non-custodial architecture - we never have access to your funds',
      'End-to-end encryption for all transaction data',
      'Multi-factor authentication and hardware wallet support',
      'Regular security audits by leading blockchain security firms',
      'SOC 2 compliance for enterprise users'
    ]
  }
];

// Security Features Data
const securityFeatures = [
  {
    title: 'Non-Custodial Architecture',
    description: 'Your private keys never leave your device. We diagnose and fix issues without ever having access to your funds.',
    icon: Lock
  },
  {
    title: 'End-to-End Encryption',
    description: 'All data transmitted between your wallet and our services is fully encrypted using industry-standard protocols.',
    icon: Shield
  },
  {
    title: 'Transparent Codebase',
    description: 'Our core security components are open source and community-verified for maximum transparency and trust.',
    icon: FileText
  }
];

export default HowWeHelp;
