"use client";

import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

type AnimatedDivProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  amount?: number;
  stagger?: boolean;
};

export function AnimatedDiv({ children, className, delay = 0, direction = 'up', amount = 50, stagger = false }: AnimatedDivProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getInitialState = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: amount, scale: 0.95, filter: 'blur(4px)' };
      case 'down':
        return { opacity: 0, y: -amount, scale: 0.95, filter: 'blur(4px)' };
      case 'left':
        return { opacity: 0, x: amount, scale: 0.95, filter: 'blur(4px)' };
      case 'right':
        return { opacity: 0, x: -amount, scale: 0.95, filter: 'blur(4px)' };
      default:
        return { opacity: 0, scale: 0.95, filter: 'blur(4px)' };
    }
  };

  const getAnimateState = () => {
    if (!isInView) return getInitialState();
    switch (direction) {
        case 'up':
            return { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' };
        case 'down':
            return { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' };
        case 'left':
            return { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' };
        case 'right':
            return { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' };
        default:
            return { opacity: 1, scale: 1, filter: 'blur(0px)' };
    }
  };

  const containerVariants = stagger ? {
    hidden: getInitialState(),
    visible: {
      ...getAnimateState(),
      transition: {
        delayChildren: delay,
        staggerChildren: 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    }
  } : undefined;


  return (
    <motion.div
      ref={ref}
      className={className}
      initial={stagger ? "hidden" : getInitialState()}
      animate={stagger && isInView ? "visible" : getAnimateState()}
      variants={containerVariants}
      transition={stagger ? undefined : { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay,
        scale: {
          type: "spring",
          damping: 15,
          stiffness: 100,
        }
      }}
    >
      {children}
    </motion.div>
  );
}

