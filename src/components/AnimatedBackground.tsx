
import React, { useEffect, useRef, memo } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ThemeProvider';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className }) => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const bubblePositionsRef = useRef<{[key: string]: {baseX: number, baseY: number}}>({});
  
  // Throttle mousemove event
  useEffect(() => {
    if (!containerRef.current) return;
    
    let ticking = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (ticking) return;
      
      ticking = true;
      requestAnimationFrame(() => {
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
          const id = htmlBubble.dataset.id || `bubble-${i}`;
          
          if (!bubblePositionsRef.current[id]) {
            const baseTransform = htmlBubble.dataset.baseTransform || '0px, 0px';
            const [baseX, baseY] = baseTransform.split(',').map(val => parseInt(val));
            bubblePositionsRef.current[id] = { baseX, baseY };
          }
          
          const { baseX, baseY } = bubblePositionsRef.current[id];
          
          // Reduced movement factors for better performance
          const moveFactorX = (i % 2 === 0 ? 1 : -1) * (5 + (i % 3) * 5);
          const moveFactorY = (i % 3 === 0 ? 1 : -1) * (5 + (i % 2) * 5);
          
          const newX = baseX + (xPercent - 0.5) * moveFactorX;
          const newY = baseY + (yPercent - 0.5) * moveFactorY;
          
          // Apply transform directly, without transition for better performance
          htmlBubble.style.transform = `translate(${newX}px, ${newY}px)`;
        });
        
        ticking = false;
      });
    };
    
    // Store base transform values for each bubble
    const bubbles = containerRef.current.querySelectorAll('.gradient-bubble');
    bubbles.forEach((bubble: Element, i) => {
      const htmlBubble = bubble as HTMLElement;
      const id = `bubble-${i}`;
      htmlBubble.dataset.id = id;
      
      const style = window.getComputedStyle(htmlBubble);
      const transform = style.transform;
      
      // Extract translate values or default to "0px, 0px"
      let baseTransform = "0px, 0px";
      const match = transform.match(/translate\(([^)]+)\)/);
      if (match && match[1]) {
        baseTransform = match[1];
      }
      
      htmlBubble.dataset.baseTransform = baseTransform;
      const [baseX, baseY] = baseTransform.split(',').map(val => parseInt(val));
      bubblePositionsRef.current[id] = { baseX, baseY };
    });
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className={cn("fixed inset-0 -z-10 overflow-hidden", className)}
      aria-hidden="true"
    >
      {/* Enhanced background gradient with reduced complexity */}
      <div className={cn(
        "absolute inset-0 transition-colors duration-1000",
        theme === 'light' 
          ? "bg-gradient-to-br from-[#f3f6fa] via-[#f0f4fa] to-[#e9f3fd]" 
          : "bg-gradient-to-br from-[#1c2234] via-[#24293d] to-[#18202e]"
      )} />
      
      {/* Reduced number of elements for light theme */}
      {theme === 'light' && (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent opacity-40" />
          
          <div className="gradient-bubble absolute top-1/4 -left-10 w-80 h-80 bg-gradient-to-br from-[#e5f3ff] to-[#d2e0fe] rounded-full blur-3xl opacity-70" />
          
          <div className="gradient-bubble absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#e0f0ff] to-[#c6dbff] rounded-full blur-3xl opacity-60" />
          
          <div className="gradient-bubble absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-tr from-[#f5fff9] to-[#e5fced] rounded-full blur-3xl opacity-50" />
        </>
      )}
      
      {/* Reduced number of elements for dark theme */}
      {theme === 'dark' && (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/40 via-transparent to-transparent opacity-50" />
          
          <div className="gradient-bubble absolute top-1/4 -left-10 w-80 h-80 bg-gradient-to-br from-[#4338ca]/40 to-[#3b82f6]/30 rounded-full blur-3xl opacity-70" />
          
          <div className="gradient-bubble absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#7c3aed]/40 to-[#6366f1]/30 rounded-full blur-3xl opacity-60" />
          
          <div className="gradient-bubble absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-tr from-[#2563eb]/30 to-[#3b82f6]/20 rounded-full blur-3xl opacity-50" />
        </>
      )}
      
      {/* Reduced opacity noise texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMjAwdjIwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDMiLz48L3N2Zz4=')] opacity-50" />
    </div>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(AnimatedBackground);
