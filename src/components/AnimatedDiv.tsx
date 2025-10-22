"use client";

import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

type AnimatedDivProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedDiv({ children, className, delay = 0 }: AnimatedDivProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
