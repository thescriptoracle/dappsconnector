
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
    
    // Attempt to open a local folder (this has browser limitations)
    try {
      // Method 1: Try to use the file protocol to navigate to a folder
      // Note: This will be blocked by most modern browsers for security reasons
      // Replace 'C:/YourFolder' with your actual folder path
      const folderPath = 'file:///C:/YourFolder';
      
      // Open in a new tab
      window.open(folderPath, '_blank');
      
      // Method 2: Create a temporary downloadable link that hints at a folder location
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,Open this folder manually: C:/YourFolder');
      element.setAttribute('download', 'open_folder_instructions.txt');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      
      // Show toast with instructions
      toast({
        title: "Folder Navigation Attempted",
        description: "For security reasons, browsers cannot directly open local folders. Please check the downloaded instructions.",
        duration: 8000,
      });
    } catch (error) {
      console.error("Failed to navigate to folder:", error);
      toast({
        title: "Navigation Failed",
        description: "Browser security prevents direct access to local folders. Please navigate to your folder manually.",
        duration: 5000,
      });
    }
    
    // Reset connecting state
    setTimeout(() => {
      setIsConnecting(false);
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
        <span className="font-medium">{isConnecting ? "Connecting..." : "Connect Wallet"}</span>
      </span>

      {/* Gradient background effect */}
      <span className="absolute inset-0 z-0 bg-transparent overflow-hidden">
        <span className={cn(
          "absolute top-0 left-0 w-full h-full bg-accent/80",
          "transform origin-left skew-x-12",
          "transition-transform duration-500 ease-out",
          isHovered ? "translate-x-0" : "-translate-x-full"
        )} />
      </span>

      {/* Shimmer effect while connecting */}
      {isConnecting && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-full h-full absolute bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
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
