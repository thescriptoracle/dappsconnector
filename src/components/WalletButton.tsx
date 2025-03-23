
import React from 'react';
import { motion } from 'framer-motion';

interface WalletButtonProps {
  className?: string;
}

const WalletButton: React.FC<WalletButtonProps> = ({ className = "" }) => {
  const handleConnect = () => {
    console.log("Wallet connection requested");
    // This would be replaced with actual wallet connection logic
  };

  return (
    <motion.button
      onClick={handleConnect}
      className={`group px-6 py-3 rounded-full bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-medium transition-all duration-300 hover:shadow-lg shadow-accent/30 hover:shadow-accent/40 relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        Connect Wallet
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <path d="M16 14V8" />
          <path d="M12 14V8" />
          <path d="M8 14V8" />
        </svg>
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-accent/80 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
    </motion.button>
  );
};

export default WalletButton;
