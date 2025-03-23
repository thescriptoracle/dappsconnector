
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
      
      <div className="mb-6 inline-flex items-center justify-center">
        <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-accent/10 text-accent">
          <Icon className="w-6 h-6" />
          <span className="absolute inset-0 rounded-xl bg-accent/5 animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
      
      <h3 className="text-xl font-display font-semibold mb-3 text-card-foreground group-hover:text-accent transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      
      <div className="absolute bottom-0 left-0 h-1 bg-accent/80 w-0 group-hover:w-full transition-all duration-500 ease-out" />
    </div>
  );
};

export default FeatureCard;
