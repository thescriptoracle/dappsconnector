
import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ThemeProvider';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className }) => {
  const { theme } = useTheme();
  
  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted opacity-80" />
      
      {/* Light theme specific elements */}
      {theme === 'light' && (
        <>
          <div className="absolute top-1/4 -left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float opacity-60" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '-2s' }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '-4s' }} />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '-3s' }} />
        </>
      )}
      
      {/* Dark theme specific elements */}
      {theme === 'dark' && (
        <>
          <div className="absolute top-1/4 -left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float opacity-60" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '-2s' }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '-4s' }} />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '-3s' }} />
        </>
      )}
      
      <div className={cn(
        "absolute top-0 left-0 w-full h-full",
        theme === 'light' 
          ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent opacity-20"
          : "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-30"
      )} />
    </div>
  );
};

export default AnimatedBackground;
