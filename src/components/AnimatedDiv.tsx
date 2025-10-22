"use client";

import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

type AnimatedDivProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  amount?: number;
};

export function AnimatedDiv({ children, className, delay = 0, direction = 'up', amount = 50 }: AnimatedDivProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const getInitialState = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: amount };
      case 'down':
        return { opacity: 0, y: -amount };
      case 'left':
        return { opacity: 0, x: amount };
      case 'right':
        return { opacity: 0, x: -amount };
      default:
        return { opacity: 0 };
    }
  };

  const getAnimateState = () => {
    if (!isInView) return getInitialState();
    switch (direction) {
        case 'up':
            return { opacity: 1, y: 0 };
        case 'down':
            return { opacity: 1, y: 0 };
        case 'left':
            return { opacity: 1, x: 0 };
        case 'right':
            return { opacity: 1, x: 0 };
        default:
            return { opacity: 1 };
    }
  };


  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialState()}
      animate={getAnimateState()}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
