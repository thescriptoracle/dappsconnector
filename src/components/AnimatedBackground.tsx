
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ThemeProvider';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className }) => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      
      // Calculate mouse position relative to the container
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate percentage position
      const xPercent = x / rect.width;
      const yPercent = y / rect.height;
      
      // Update the gradient positions with more pronounced movement
      const bubbles = el.querySelectorAll('.gradient-bubble');
      bubbles.forEach((bubble: Element, i) => {
        const htmlBubble = bubble as HTMLElement;
        const baseTransform = htmlBubble.dataset.baseTransform || '0px, 0px';
        const [baseX, baseY] = baseTransform.split(',').map(val => parseInt(val));
        
        // Enhanced movement (10-25px) based on mouse position and bubble index
        const moveFactorX = (i % 2 === 0 ? 1 : -1) * (10 + (i % 3) * 8);
        const moveFactorY = (i % 3 === 0 ? 1 : -1) * (10 + (i % 2) * 8);
        
        const newX = baseX + (xPercent - 0.5) * moveFactorX;
        const newY = baseY + (yPercent - 0.5) * moveFactorY;
        
        htmlBubble.style.transform = `translate(${newX}px, ${newY}px)`;
      });
    };
    
    // Store base transform values for each bubble
    const bubbles = containerRef.current.querySelectorAll('.gradient-bubble');
    bubbles.forEach((bubble: Element) => {
      const htmlBubble = bubble as HTMLElement;
      const style = window.getComputedStyle(htmlBubble);
      const transform = style.transform;
      
      // Extract translate values or default to "0px, 0px"
      let baseTransform = "0px, 0px";
      const match = transform.match(/translate\(([^)]+)\)/);
      if (match && match[1]) {
        baseTransform = match[1];
      }
      
      htmlBubble.dataset.baseTransform = baseTransform;
    });
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className={cn("fixed inset-0 -z-10 overflow-hidden", className)}
    >
      {/* Base background gradient with enhanced animation */}
      <div className={cn(
        "absolute inset-0 transition-all duration-1000 bg-gradient-animated",
        theme === 'light' 
          ? "bg-gradient-to-br from-[#f0f4f8] via-[#eef1f5] to-[#e7f0fd]" 
          : "bg-gradient-to-br from-[#1a1f2c] via-[#222836] to-[#151a24]"
      )} />
      
      {/* Light theme elements with enhanced animations */}
      {theme === 'light' && (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-40 animate-pulse-glow" />
          
          <div className="gradient-bubble absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-br from-[#e0f2fe] to-[#c7d2fe] rounded-full blur-3xl animate-float-enhanced opacity-70" />
          
          <div className="gradient-bubble absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#dbeafe] to-[#bfdbfe] rounded-full blur-3xl opacity-60 animate-float-enhanced" 
               style={{ animationDelay: '-2s' }} />
          
          <div className="gradient-bubble absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-tr from-[#f0fdf4] to-[#dcfce7] rounded-full blur-3xl opacity-50 animate-float-enhanced" 
               style={{ animationDelay: '-4s' }} />
          
          <div className="gradient-bubble absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-bl from-[#f8fafc] to-[#dbeafe] rounded-full blur-3xl opacity-40 animate-float-enhanced" 
               style={{ animationDelay: '-3s' }} />
          
          <div className="gradient-bubble absolute top-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-[#ede9fe] to-[#ddd6fe] rounded-full blur-3xl opacity-35 animate-float-enhanced" 
               style={{ animationDelay: '-1s' }} />
               
          {/* Additional gradient bubbles for more movement */}
          <div className="gradient-bubble absolute top-2/3 left-1/4 w-56 h-56 bg-gradient-to-tr from-[#fae8ff] to-[#e9d5ff] rounded-full blur-3xl opacity-40 animate-float-enhanced" 
               style={{ animationDelay: '-2.5s' }} />
               
          <div className="gradient-bubble absolute top-1/5 right-1/4 w-40 h-40 bg-gradient-to-bl from-[#dbeafe] to-[#93c5fd] rounded-full blur-3xl opacity-30 animate-float-enhanced" 
               style={{ animationDelay: '-3.5s' }} />
        </>
      )}
      
      {/* Dark theme elements with enhanced animations */}
      {theme === 'dark' && (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/30 via-transparent to-transparent opacity-50 animate-pulse-glow" />
          
          <div className="gradient-bubble absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-br from-[#4338ca]/40 to-[#3b82f6]/30 rounded-full blur-3xl animate-float-enhanced opacity-70" />
          
          <div className="gradient-bubble absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#7c3aed]/40 to-[#6366f1]/30 rounded-full blur-3xl opacity-60 animate-float-enhanced" 
               style={{ animationDelay: '-2s' }} />
          
          <div className="gradient-bubble absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-tr from-[#2563eb]/30 to-[#3b82f6]/20 rounded-full blur-3xl opacity-50 animate-float-enhanced" 
               style={{ animationDelay: '-4s' }} />
          
          <div className="gradient-bubble absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-bl from-[#4f46e5]/35 to-[#6366f1]/25 rounded-full blur-3xl opacity-40 animate-float-enhanced" 
               style={{ animationDelay: '-3s' }} />
          
          <div className="gradient-bubble absolute top-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-[#7c3aed]/30 to-[#8b5cf6]/20 rounded-full blur-3xl opacity-35 animate-float-enhanced" 
               style={{ animationDelay: '-1s' }} />
               
          {/* Additional gradient bubbles for more movement */}
          <div className="gradient-bubble absolute top-2/3 left-1/4 w-56 h-56 bg-gradient-to-tr from-[#4c1d95]/30 to-[#6d28d9]/20 rounded-full blur-3xl opacity-40 animate-float-enhanced" 
               style={{ animationDelay: '-2.5s' }} />
               
          <div className="gradient-bubble absolute top-1/5 right-1/4 w-40 h-40 bg-gradient-to-bl from-[#1e40af]/40 to-[#3b82f6]/30 rounded-full blur-3xl opacity-30 animate-float-enhanced" 
               style={{ animationDelay: '-3.5s' }} />
        </>
      )}
      
      {/* Foreground subtle noise texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMjAwdjIwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      
      {/* Enhanced light effects with pulsing animations */}
      <div className={cn(
        "absolute top-0 left-1/4 w-1/2 h-1/3 rounded-full blur-3xl transition-opacity duration-1000",
        theme === 'light' 
          ? "bg-gradient-to-b from-[#dbeafe]/50 to-transparent opacity-50 animate-pulse-slow" 
          : "bg-gradient-to-b from-[#3b82f6]/20 to-transparent opacity-30 animate-pulse-slow"
      )} />
      
      {/* Dynamic shimmer effect across the background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shimmer-effect opacity-30" />
    </div>
  );
};

export default AnimatedBackground;
