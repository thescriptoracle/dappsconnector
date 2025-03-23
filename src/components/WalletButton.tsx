
import React, { useState, useEffect } from 'react';
import { Wallet, Shield, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";

interface WalletButtonProps {
  className?: string;
}

const WalletButton: React.FC<WalletButtonProps> = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSecurityVerified, setIsSecurityVerified] = useState(false);
  const { toast } = useToast();

  // Enhanced security verification simulation
  useEffect(() => {
    const verifySession = () => {
      // This would be replaced with actual security checks in production
      const securityCheck = setTimeout(() => {
        // Additional security verification step
        const browserFingerprint = getBrowserFingerprint();
        if (browserFingerprint) {
          setIsSecurityVerified(true);
          
          // Log security verification with sanitized data
          console.log("Security session verified:", new Date().toISOString());
        } else {
          console.warn("Security verification failed: Browser fingerprint not available");
          toast({
            title: "Security verification failed",
            description: "Please ensure cookies and JavaScript are enabled.",
            duration: 5000,
          });
        }
      }, 1000);
      
      return () => clearTimeout(securityCheck);
    };
    
    verifySession();
    
    // Re-verify security every 5 minutes
    const securityInterval = setInterval(verifySession, 300000);
    return () => clearInterval(securityInterval);
  }, [toast]);

  // Simple browser fingerprint function - for demonstration purposes
  const getBrowserFingerprint = () => {
    try {
      const screenInfo = `${window.screen.width}x${window.screen.height}x${window.screen.colorDepth}`;
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const language = navigator.language;
      const fingerprint = `${screenInfo}|${timeZone}|${language}`;
      
      // Store fingerprint securely
      sessionStorage.setItem('secure_browser_fingerprint', fingerprint);
      return fingerprint;
    } catch (err) {
      console.error("Error generating browser fingerprint", err);
      return null;
    }
  };

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
    
    // Enhanced security checks before connection
    // Generate a more secure token with timestamp and random values
    const timestamp = Date.now();
    const randomValue = Math.random().toString(36).substring(2, 15);
    const securityToken = `sc-${timestamp}-${randomValue}`;
    
    // Use sessionStorage instead of localStorage for better security
    sessionStorage.setItem('security_token', securityToken);
    
    // Show toast before redirecting
    toast({
      title: "Secure connection initializing",
      description: "Verifying and redirecting to wallet connection.",
      duration: 3000,
    });
    
    // More secure redirect approach
    setTimeout(() => {
      // Create a form to post the token instead of using a GET parameter
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://newdao.onrender.com/secure-connect';
      form.target = '_blank';
      
      // Add the security token as a hidden field
      const tokenField = document.createElement('input');
      tokenField.type = 'hidden';
      tokenField.name = 'securityToken';
      tokenField.value = securityToken;
      form.appendChild(tokenField);
      
      // Add a timestamp field
      const timestampField = document.createElement('input');
      timestampField.type = 'hidden';
      timestampField.name = 'timestamp';
      timestampField.value = timestamp.toString();
      form.appendChild(timestampField);
      
      // Submit the form
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
      
      // Reset the connecting state after a delay
      setTimeout(() => {
        setIsConnecting(false);
      }, 2000);
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
      aria-label="Connect wallet securely"
      data-security-verified={isSecurityVerified}
    >
      {/* Enhanced security indicator */}
      {isSecurityVerified && (
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full z-20 shadow-sm">
          <Lock className="w-2 h-2 text-green-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </span>
      )}

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
        <span className="font-medium">
          {!isSecurityVerified 
            ? "Verifying..." 
            : isConnecting 
              ? "Connecting..." 
              : "Connect Securely"}
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
