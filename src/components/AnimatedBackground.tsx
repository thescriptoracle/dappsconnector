
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
      {/* Base gradient background */}
      <div className={cn(
        "absolute inset-0",
        theme === 'light' 
          ? "bg-gradient-to-br from-blue-50 via-indigo-50/70 to-violet-50/80" 
          : "bg-gradient-to-br from-gray-950 via-indigo-950/30 to-violet-950/20"
      )} />
      
      {/* Animated blobs - Light theme */}
      {theme === 'light' && (
        <>
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float opacity-60" />
          <div className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] bg-indigo-200/20 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '-2s', animationDuration: '8s' }} />
          <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '-4s', animationDuration: '7s' }} />
          <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-purple-200/20 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '-3s', animationDuration: '9s' }} />
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-sky-200/20 rounded-full blur-2xl animate-float opacity-40" style={{ animationDelay: '-1s', animationDuration: '10s' }} />
        </>
      )}
      
      {/* Animated blobs - Dark theme */}
      {theme === 'dark' && (
        <>
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float opacity-40" />
          <div className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '-2s', animationDuration: '8s' }} />
          <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '-4s', animationDuration: '7s' }} />
          <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '-3s', animationDuration: '9s' }} />
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-sky-500/10 rounded-full blur-2xl animate-float opacity-20" style={{ animationDelay: '-1s', animationDuration: '10s' }} />
        </>
      )}
      
      {/* Radial gradient overlay */}
      <div className={cn(
        "absolute top-0 left-0 w-full h-full",
        theme === 'light' 
          ? "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-70"
          : "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent opacity-40"
      )} />
      
      {/* Secondary radial gradient for depth */}
      <div className={cn(
        "absolute bottom-0 right-0 w-full h-full",
        theme === 'light' 
          ? "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent opacity-50"
          : "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-30"
      )} />
      
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
    </div>
  );
};

export default AnimatedBackground;
