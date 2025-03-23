
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
      
      // Update the gradient positions with smoother movement
      const bubbles = el.querySelectorAll('.gradient-bubble');
      bubbles.forEach((bubble: Element, i) => {
        const htmlBubble = bubble as HTMLElement;
        const baseTransform = htmlBubble.dataset.baseTransform || '0px, 0px';
        const [baseX, baseY] = baseTransform.split(',').map(val => parseInt(val));
        
        // Enhanced movement (8-20px) based on mouse position and bubble index for more pop
        const moveFactorX = (i % 2 === 0 ? 1 : -1) * (8 + (i % 3) * 8);
        const moveFactorY = (i % 3 === 0 ? 1 : -1) * (8 + (i % 2) * 8);
        
        const newX = baseX + (xPercent - 0.5) * moveFactorX;
        const newY = baseY + (yPercent - 0.5) * moveFactorY;
        
        // Apply smooth transition
        htmlBubble.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
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
      {/* Enhanced background gradient */}
      <div className={cn(
        "absolute inset-0 transition-all duration-1000 gradient-transition",
        theme === 'light' 
          ? "bg-gradient-to-br from-[#f3f6fa] via-[#f0f4fa] to-[#e9f3fd]" 
          : "bg-gradient-to-br from-[#1c2234] via-[#24293d] to-[#18202e]"
      )} />
      
      {/* Light theme elements with enhanced opacity and size */}
      {theme === 'light' && (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent opacity-40" />
          
          <div className="gradient-bubble absolute top-1/4 -left-10 w-80 h-80 bg-gradient-to-br from-[#e5f3ff] to-[#d2e0fe] rounded-full blur-3xl animate-float opacity-70" />
          
          <div className="gradient-bubble absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#e0f0ff] to-[#c6dbff] rounded-full blur-3xl opacity-60" 
               style={{ animationDelay: '-2s' }} />
          
          <div className="gradient-bubble absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-tr from-[#f5fff9] to-[#e5fced] rounded-full blur-3xl opacity-50" 
               style={{ animationDelay: '-4s' }} />
          
          <div className="gradient-bubble absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-bl from-[#fbfcff] to-[#e0f0ff] rounded-full blur-3xl opacity-40" 
               style={{ animationDelay: '-3s' }} />
          
          <div className="gradient-bubble absolute top-1/3 left-1/3 w-56 h-56 bg-gradient-to-r from-[#f0ecff] to-[#e5dfff] rounded-full blur-3xl opacity-35" 
               style={{ animationDelay: '-1s' }} />
        </>
      )}
      
      {/* Dark theme elements with enhanced glow and opacity */}
      {theme === 'dark' && (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/40 via-transparent to-transparent opacity-50" />
          
          <div className="gradient-bubble absolute top-1/4 -left-10 w-80 h-80 bg-gradient-to-br from-[#4338ca]/40 to-[#3b82f6]/30 rounded-full blur-3xl animate-float opacity-70" />
          
          <div className="gradient-bubble absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#7c3aed]/40 to-[#6366f1]/30 rounded-full blur-3xl opacity-60" 
               style={{ animationDelay: '-2s' }} />
          
          <div className="gradient-bubble absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-tr from-[#2563eb]/30 to-[#3b82f6]/20 rounded-full blur-3xl opacity-50" 
               style={{ animationDelay: '-4s' }} />
          
          <div className="gradient-bubble absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-bl from-[#4f46e5]/35 to-[#6366f1]/25 rounded-full blur-3xl opacity-40" 
               style={{ animationDelay: '-3s' }} />
          
          <div className="gradient-bubble absolute top-1/3 left-1/3 w-56 h-56 bg-gradient-to-r from-[#7c3aed]/30 to-[#8b5cf6]/20 rounded-full blur-3xl opacity-35" 
               style={{ animationDelay: '-1s' }} />
        </>
      )}
      
      {/* Reduced noise texture for better text legibility */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMjAwdjIwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDMiLz48L3N2Zz4=')] opacity-80" />
      
      {/* Enhanced light effects */}
      <div className={cn(
        "absolute top-0 left-1/4 w-1/2 h-1/3 rounded-full blur-3xl transition-opacity duration-1000",
        theme === 'light' 
          ? "bg-gradient-to-b from-[#dbeafe]/40 to-transparent opacity-40" 
          : "bg-gradient-to-b from-[#3b82f6]/15 to-transparent opacity-30"
      )} />
    </div>
  );
};

export default AnimatedBackground;
