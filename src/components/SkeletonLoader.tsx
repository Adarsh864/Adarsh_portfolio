"use client";

import { motion } from 'framer-motion';

export function SkeletonCard() {
  return (
    <motion.div
      className="h-full flex flex-col bg-card/30 backdrop-blur-sm border border-primary/20 cyber-chamfer p-6"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="aspect-video bg-primary/10 cyber-chamfer-sm mb-4 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="space-y-3">
        <div className="h-6 bg-primary/10 cyber-chamfer-sm w-3/4 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.2 }}
          />
        </div>
        <div className="h-4 bg-primary/10 cyber-chamfer-sm w-full relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.3 }}
          />
        </div>
        <div className="h-4 bg-primary/10 cyber-chamfer-sm w-5/6 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.4 }}
          />
        </div>
      </div>
      
      <div className="flex gap-2 mt-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-6 w-16 bg-primary/10 cyber-chamfer-sm relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 + i * 0.1 }}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function SkeletonText({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-primary/10 cyber-chamfer-sm relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
