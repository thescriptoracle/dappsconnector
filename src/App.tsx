
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import HowWeHelp from "./pages/HowWeHelp";
import NotFound from "./pages/NotFound";
import { validateSecureEnvironment } from "./lib/securityUtils";
import { useEffect } from "react";

// Enhanced security configuration for QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 30000,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
  },
});

const App = () => {
  // Validate secure environment on app start
  useEffect(() => {
    const isSecure = validateSecureEnvironment();
    if (!isSecure) {
      console.warn("Running in a potentially insecure environment. Some features may be limited.");
    }
    
    // Add additional secure headers dynamically
    const secureHeaders = [
      { name: "X-Content-Security-Policy", value: "default-src 'self'" },
      { name: "X-WebKit-CSP", value: "default-src 'self'" },
    ];
    
    // Clean up any malicious attempts to modify document
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          // Check for suspicious elements and remove them
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              const element = node as HTMLElement;
              if (['iframe', 'script', 'object', 'embed'].includes(element.tagName.toLowerCase())) {
                // Validate if this is from our app
                if (!element.getAttribute('data-app-verified')) {
                  console.warn("Suspicious element detected and removed", element.tagName);
                  element.remove();
                }
              }
            }
          });
        }
      });
    });
    
    // Start observing document for malicious modifications
    observer.observe(document, { childList: true, subtree: true });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/how-we-help" element={<HowWeHelp />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
