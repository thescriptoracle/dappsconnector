
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  className,
  index
}) => {
  return (
    <div 
      className={cn(
        "group relative rounded-2xl overflow-hidden",
        "bg-card p-4 sm:p-5 md:p-6 lg:p-8",
        "border border-border/60 shadow-sm",
        "transition-all duration-500 ease-out card-hover",
        "animate-fade-in text-no-blur",
        className
      )}
      style={{ 
        animationDelay: `${index * 150}ms`,
        animationFillMode: 'backwards'
      }}
    >
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute -bottom-1 -right-1 w-24 sm:w-28 h-24 sm:h-28 bg-gradient-to-br from-transparent to-accent/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-150" />
      
      <div className="mb-4 sm:mb-6 inline-flex items-center justify-center relative z-10">
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center bg-accent/15 text-accent overflow-hidden group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -inset-1 bg-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse-glow" />
        </div>
      </div>
      
      <h3 className="text-lg sm:text-xl md:text-xl font-display font-semibold mb-3 sm:mb-4 text-card-foreground group-hover:text-accent transition-colors duration-300 relative z-10">{title}</h3>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed relative z-10">{description}</p>
      
      <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-accent/0 via-accent/80 to-accent/0 w-0 group-hover:w-full transition-all duration-500 ease-out" />
    </div>
  );
};

export default FeatureCard;
