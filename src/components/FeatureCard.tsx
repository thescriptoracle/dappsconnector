
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
        "bg-card p-6 md:p-8",
        "border border-border/50 shadow-sm",
        "transition-all duration-500 ease-out card-hover",
        "animate-fade-in",
        className
      )}
      style={{ 
        animationDelay: `${index * 150}ms`,
        animationFillMode: 'backwards'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-br from-transparent to-accent/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-150" />
      
      <div className="mb-6 inline-flex items-center justify-center relative z-10">
        <div className="relative w-14 h-14 rounded-xl flex items-center justify-center bg-accent/10 text-accent overflow-hidden group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-6 h-6 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -inset-1 bg-accent/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse-glow" />
        </div>
      </div>
      
      <h3 className="text-xl font-display font-semibold mb-3 text-card-foreground group-hover:text-accent transition-colors duration-300 relative z-10">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{description}</p>
      
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent/0 via-accent/80 to-accent/0 w-0 group-hover:w-full transition-all duration-500 ease-out" />
    </div>
  );
};

export default FeatureCard;
