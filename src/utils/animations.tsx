import React, { useEffect, useRef, ReactNode } from 'react';

interface AnimateProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  type?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom' | 'rotate' | 'bounce' | 'scale' | 'flip';
  distance?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

/**
 * Advanced animation component with multiple animation types
 * - Supports fade, slide, zoom, rotate, bounce, scale, and flip animations
 * - Lightweight and performant with GPU acceleration
 * - Stagger support for animating multiple children
 * - Customizable timing and easing
 */
const Animate: React.FC<AnimateProps> = ({
  children,
  className = '',
  style = {},
  delay = 0,
  duration = 0.6,
  type = 'fade',
  distance = 50,
  stagger = false,
  staggerDelay = 0.1,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const getInitialStyles = () => {
    const baseStyles: React.CSSProperties = {
      willChange: 'transform, opacity',
      transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
    };

    switch (type) {
      case 'fade':
        return { ...baseStyles, opacity: 0 };
      case 'slide-up':
        return { ...baseStyles, opacity: 0, transform: `translateY(${distance}px)` };
      case 'slide-down':
        return { ...baseStyles, opacity: 0, transform: `translateY(-${distance}px)` };
      case 'slide-left':
        return { ...baseStyles, opacity: 0, transform: `translateX(${distance}px)` };
      case 'slide-right':
        return { ...baseStyles, opacity: 0, transform: `translateX(-${distance}px)` };
      case 'zoom':
        return { ...baseStyles, opacity: 0, transform: 'scale(0.8)' };
      case 'rotate':
        return { ...baseStyles, opacity: 0, transform: 'rotate(-10deg) scale(0.9)' };
      case 'bounce':
        return { ...baseStyles, opacity: 0, transform: 'translateY(30px) scale(0.9)' };
      case 'scale':
        return { ...baseStyles, opacity: 0, transform: 'scale(0.5)' };
      case 'flip':
        return { ...baseStyles, opacity: 0, transform: 'rotateY(-90deg)' };
      default:
        return { ...baseStyles, opacity: 0 };
    }
  };

  const getFinalStyles = () => {
    const baseStyles: React.CSSProperties = {
      opacity: 1,
      transform: 'translateX(0) translateY(0) scale(1) rotate(0) rotateY(0)',
    };

    if (type === 'bounce') {
      return {
        ...baseStyles,
        transition: `all ${duration}s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay}s`,
      };
    }

    return baseStyles;
  };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial styles
    Object.assign(element.style, getInitialStyles());
    
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && elementRef.current) {
            if (stagger) {
              // Animate children with stagger effect
              const children = Array.from(elementRef.current.children) as HTMLElement[];
              children.forEach((child, index) => {
                setTimeout(() => {
                  Object.assign(child.style, getFinalStyles());
                }, index * staggerDelay * 1000);
              });
            } else {
              Object.assign(elementRef.current.style, getFinalStyles());
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay, duration, type, distance, stagger, staggerDelay]);

  return (
    <div 
      ref={elementRef}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
};

export default Animate;
