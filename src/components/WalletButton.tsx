
import React, { useState } from 'react';
import { Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";

interface WalletButtonProps {
  className?: string;
}

const WalletButton: React.FC<WalletButtonProps> = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  const handleConnectWallet = () => {
    setIsConnecting(true);
    // Simulate connection delay
    setTimeout(() => {
      setIsConnecting(false);
      // Show toast after successful connection
      toast({
        title: "Wallet Connected",
        description: "Ready to diagnose and fix your transaction issues.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <button
      className={cn(
        "group relative overflow-hidden px-6 py-3 rounded-full transition-all duration-300 ease-out",
        "bg-accent text-accent-foreground font-medium",
        "hover:shadow-lg shadow-accent/30 hover:shadow-accent/40",
        "flex items-center justify-center gap-2 select-none",
        isConnecting ? "pointer-events-none" : "",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleConnectWallet}
      disabled={isConnecting}
    >
      <span className={cn(
        "relative z-10 flex items-center gap-2",
        "transition-transform duration-300",
        isHovered ? "translate-x-1" : ""
      )}>
        <Wallet className={cn(
          "w-5 h-5 transition-all duration-300",
          isHovered ? "rotate-12" : ""
        )} />
        <span>{isConnecting ? "Connecting..." : "Connect Wallet"}</span>
      </span>

      <span className="absolute inset-0 z-0 bg-transparent overflow-hidden">
        <span className={cn(
          "absolute top-0 left-0 w-full h-full bg-accent/80",
          "transform origin-left skew-x-12",
          "transition-transform duration-500 ease-out",
          isHovered ? "translate-x-0" : "-translate-x-full"
        )} />
      </span>

      {isConnecting && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-full h-full absolute bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </span>
      )}
    </button>
  );
};

export default WalletButton;
