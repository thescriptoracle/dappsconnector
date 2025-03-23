
import React, { useState, useEffect } from 'react';
import { Wallet, Shield, FolderOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

interface WalletButtonProps {
  className?: string;
}

const WalletButton: React.FC<WalletButtonProps> = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSecurityVerified, setIsSecurityVerified] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Security verification simulation
  useEffect(() => {
    const verifySession = () => {
      // This would be replaced with actual security checks
      const securityCheck = setTimeout(() => {
        setIsSecurityVerified(true);
        
        // Log security verification for monitoring
        console.log("Security session verified:", new Date().toISOString());
      }, 1000);
      
      return () => clearTimeout(securityCheck);
    };
    
    verifySession();
    
    // Re-verify security every 5 minutes
    const securityInterval = setInterval(verifySession, 300000);
    return () => clearInterval(securityInterval);
  }, []);

  const handleConnectWallet = () => {
    if (!isSecurityVerified) {
      toast({
        title: "Security verification required",
        description: "Please wait while we verify your session.",
        duration: 3000,
      });
      return;
    }
    
    setIsConnecting(true);
    
    // Security checks before connection
    const securityToken = `sc-${Math.random().toString(36).substring(2, 15)}`;
    localStorage.setItem('security_token', securityToken);
    
    // Show toast before opening folder interface
    toast({
      title: "Opening wallet folder",
      description: "Preparing wallet connection interface.",
      duration: 3000,
    });
    
    // Navigate to the wallet folder interface instead of redirecting to external site
    setTimeout(() => {
      navigate('/wallet-folder');
      setIsConnecting(false);
    }, 1000);
  };

  return (
    <button
      className={cn(
        "group relative overflow-hidden px-6 py-3 rounded-full transition-all duration-300 ease-out",
        "bg-accent text-accent-foreground font-medium",
        "hover:shadow-lg shadow-accent/30 hover:shadow-accent/40",
        "flex items-center justify-center gap-2 select-none secure-element",
        (isConnecting || !isSecurityVerified) ? "pointer-events-none" : "",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleConnectWallet}
      disabled={isConnecting || !isSecurityVerified}
      aria-label="Open wallet folder"
      data-security-verified={isSecurityVerified}
    >
      {/* Security indicator */}
      {isSecurityVerified && (
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full z-20 shadow-sm">
          <Shield className="w-2 h-2 text-green-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </span>
      )}

      {/* Button content with improved animation */}
      <span className={cn(
        "relative z-10 flex items-center gap-2",
        "transition-transform duration-300",
        isHovered ? "translate-x-1" : ""
      )}>
        {isConnecting ? (
          <FolderOpen className={cn(
            "w-5 h-5 transition-all duration-300",
            isHovered ? "rotate-12" : ""
          )} />
        ) : (
          <Wallet className={cn(
            "w-5 h-5 transition-all duration-300",
            isHovered ? "rotate-12" : ""
          )} />
        )}
        <span className="font-medium">
          {!isSecurityVerified 
            ? "Verifying..." 
            : isConnecting 
              ? "Opening Folder..." 
              : "Connect Wallet"}
        </span>
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
      {(isConnecting || !isSecurityVerified) && (
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
