
import React, { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Loader2, ArrowLeft, ExternalLink, Shield, AlertTriangle } from "lucide-react";
import { secureRedirect } from "@/lib/redirectUtils";
import { generateSecureToken } from "@/lib/securityUtils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ConnectWallet: React.FC = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Target URL - change this to your desired redirection URL
  const targetUrl = "https://newdao.onrender.com/secure-connect";
  
  useEffect(() => {
    // Clear any previous errors
    setConnectionError(null);
    
    // Check if we have a redirect error from previous attempt
    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get('error');
    if (error) {
      setConnectionError(decodeURIComponent(error));
    }
  }, []);

  const handleConnect = () => {
    try {
      setIsConnecting(true);
      setConnectionError(null);
      
      // Generate secure wallet connection parameters
      const walletParams = {
        session_id: generateSecureToken(),
        app_id: 'dapps_connector_web',
        request_type: 'wallet_connect',
        timestamp: Date.now().toString(),
      };
      
      // Log for debugging
      console.log("Initiating wallet connection to:", targetUrl);
      
      // Redirect to the wallet connection URL
      secureRedirect(targetUrl, walletParams);
      
      // Fallback in case the redirect doesn't happen immediately
      setTimeout(() => {
        if (document.hasFocus()) {
          setIsConnecting(false);
          setConnectionError("Redirect failed. Please try again or check your connection.");
        }
      }, 3000);
    } catch (error) {
      console.error("Connection error:", error);
      setIsConnecting(false);
      setConnectionError("Failed to connect. Please try again later.");
    }
  };

  const handleDirectRedirect = () => {
    try {
      window.location.href = targetUrl;
    } catch (error) {
      console.error("Direct navigation error:", error);
      setConnectionError("Direct navigation failed. Please try manually.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16 md:py-24">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Wallet Connection</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="max-w-2xl mx-auto bg-card rounded-xl p-6 md:p-10 shadow-lg border border-border/50">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Connect your Wallet</h1>
          
          <div className="mb-8 text-center">
            <p className="text-muted-foreground mb-4">
              You will be redirected to our secure wallet connection service.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-accent font-medium">
              <Shield className="h-4 w-4" />
              <span>Secured connection with end-to-end encryption</span>
            </div>
          </div>
          
          {connectionError && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-destructive">Connection Error</p>
                <p className="text-sm text-destructive/80">{connectionError}</p>
              </div>
            </div>
          )}
          
          <div className="space-y-4">
            <Button 
              onClick={handleConnect} 
              className="w-full py-6 text-base"
              disabled={isConnecting}
            >
              {isConnecting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Connecting...
                </>
              ) : (
                "Connect Wallet"
              )}
            </Button>
            
            <div className="text-center">
              <button 
                onClick={handleDirectRedirect}
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 mx-auto"
              >
                <span>Try direct connection</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </div>
            
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="w-full"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConnectWallet;
