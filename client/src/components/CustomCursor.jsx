import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Hide custom cursor on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electricIndigo mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.15,
        }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-electricIndigo/50 mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'tween',
          ease: 'easeOut',
          duration: 0.5,
        }}
      />
    </>
  );
};

export default CustomCursor;


