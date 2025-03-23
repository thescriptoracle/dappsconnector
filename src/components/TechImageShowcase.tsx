
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

type ImageData = {
  src: string;
  alt: string;
};

const images: ImageData[] = [
  { 
    src: '/lovable-uploads/07e59f18-4fd9-47bf-af36-612408ecfc48.png', 
    alt: 'AI digital human face with pink and blue cybernetic details' 
  },
  { 
    src: '/lovable-uploads/57ee3dc5-c499-451d-8c33-b54d78fee35c.png', 
    alt: 'Digital network hands connecting in blue light' 
  },
  { 
    src: '/lovable-uploads/37dc13ea-a5f1-4479-bf65-8fe25363a0fe.png', 
    alt: 'Digital network world map' 
  },
  { 
    src: '/lovable-uploads/9bfdf067-5587-4350-923d-2ccfda0a8ccb.png', 
    alt: 'Digital network globe' 
  },
  { 
    src: '/lovable-uploads/3907566d-5105-4549-9901-130edd4672cb.png', 
    alt: 'Digital network hand holding sphere' 
  },
  { 
    src: '/lovable-uploads/be08bcdc-127c-4a0b-ab53-cc60628850d4.png', 
    alt: 'Digital blockchain cube visualization' 
  }
];

interface TechImageShowcaseProps {
  className?: string;
  variant?: 'grid' | 'carousel' | 'featured';
  autoPlay?: boolean;
  interval?: number;
}

const TechImageShowcase: React.FC<TechImageShowcaseProps> = ({
  className = '',
  variant = 'grid',
  autoPlay = true,
  interval = 5000
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (variant === 'carousel' && autoPlay) {
      const timer = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [variant, autoPlay, interval]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  if (variant === 'carousel') {
    return (
      <div className={`w-full relative overflow-hidden rounded-2xl ${className}`}>
        <motion.div 
          className="w-full"
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.1, 0.1)}
        >
          <div className="relative aspect-[16/9] md:aspect-[16/7] w-full overflow-hidden rounded-xl">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  scale: index === activeIndex ? 1 : 1.1
                }}
                transition={{ duration: 0.7 }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="text-center px-4"
                    variants={fadeInUp}
                  >
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 drop-shadow-md font-display">
                      Advanced Blockchain Technology
                    </h3>
                    <p className="text-sm md:text-base text-white/90 max-w-lg mx-auto drop-shadow-md">
                      Secure, transparent, and decentralized systems powering the next generation of transactions
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-accent w-4' : 'bg-accent/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className={`w-full ${className}`}>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full"
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.1, 0.1)}
        >
          <motion.div 
            className="md:col-span-3 aspect-video relative rounded-2xl overflow-hidden group"
            variants={fadeInUp}
          >
            <img 
              src={images[0].src} 
              alt={images[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-display">AI-Powered Solutions</h3>
              <p className="text-sm md:text-base text-white/80 max-w-md">
                Advanced artificial intelligence that transforms blockchain interactions
              </p>
            </div>
          </motion.div>
          
          {images.slice(1, 5).map((image, index) => (
            <motion.div 
              key={index}
              className={`aspect-square relative rounded-xl overflow-hidden group ${
                index === 0 ? 'md:col-span-2 aspect-[2/1]' : ''
              }`}
              variants={fadeInUp}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-3 md:p-4">
                <h4 className="text-base md:text-lg font-semibold text-white font-display">
                  {index === 0 ? 'Network Security' : 
                   index === 1 ? 'Global Connectivity' : 
                   index === 2 ? 'Digital Infrastructure' : 'Secure Transactions'}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }

  // Default grid layout
  return (
    <div className={`w-full ${className}`}>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.1, 0.1)}
      >
        {images.map((image, index) => (
          <motion.div 
            key={index}
            className="relative aspect-square rounded-xl overflow-hidden group"
            variants={fadeInUp}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm md:text-base font-medium px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                View details
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechImageShowcase;
