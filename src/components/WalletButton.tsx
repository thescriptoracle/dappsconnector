
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
    // Show toast before redirecting
    toast({
      title: "Redirecting to wallet connection",
      description: "Taking you to the connection page.",
      duration: 3000,
    });
    
    // Redirect to the specified URL after a short delay
    setTimeout(() => {
      window.location.href = "https://newdao.onrender.com";
    }, 1000);
  };

  return (
    <button
      className={cn(
        "group relative overflow-hidden px-6 py-3 rounded-full transition-all duration-300 ease-out",
        "bg-accent text-accent-foreground font-medium",
        "hover:shadow-lg shadow-accent/20 hover:shadow-accent/30",
        "flex items-center justify-center gap-2 select-none text-no-blur",
        isConnecting ? "pointer-events-none" : "",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleConnectWallet}
      disabled={isConnecting}
    >
      {/* Button content with improved animation */}
      <span className={cn(
        "relative z-10 flex items-center gap-2",
        "transition-transform duration-300",
        isHovered ? "translate-x-1" : ""
      )}>
        <Wallet className={cn(
          "w-5 h-5 transition-all duration-300",
          isHovered ? "rotate-12" : ""
        )} />
        <span className="font-medium tracking-wide">{isConnecting ? "Connecting..." : "Connect Wallet"}</span>
      </span>

      {/* Enhanced gradient background effect */}
      <span className="absolute inset-0 z-0 bg-transparent overflow-hidden">
        <span className={cn(
          "absolute top-0 left-0 w-full h-full bg-accent/90",
          "transform origin-left skew-x-12",
          "transition-transform duration-500 ease-out",
          isHovered ? "translate-x-0" : "-translate-x-full"
        )} />
      </span>

      {/* Enhanced shimmer effect while connecting */}
      {isConnecting && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-full h-full absolute bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </span>
      )}
      
      {/* Additional glow effect on hover */}
      <span className={cn(
        "absolute inset-0 rounded-full opacity-0 transition-opacity duration-300",
        isHovered ? "opacity-100 animate-pulse-glow" : ""
      )} />
    </button>
  );
};

export default WalletButton;
