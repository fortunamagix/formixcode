"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function MagicCursor() {

    const cursorBallRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const cursorBall = cursorBallRef.current;
      if (!cursorBall) return;
  
      const handleMouseMove = (e: MouseEvent) => {
        gsap.to(cursorBall, {
          duration: 0.3,
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          ease: 'power2.out',
        });
      };
  
      const handleMouseEnter = () => {
        gsap.to(cursorBall, {
          duration: 0.3,
          scale: 2,
          opacity: 0,
          ease: 'power2.out',
        });
        cursorBall.classList.add('hovered');
      };
  
      const handleMouseLeave = () => {
        gsap.to(cursorBall, {
          duration: 0.3,
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
        });
        cursorBall.classList.remove('hovered');
      };
  
      // Add mousemove listener
      document.addEventListener('mousemove', handleMouseMove);
  
      // Add hover listeners to anchor elements
      const hoverElements = document.querySelectorAll('a');
      hoverElements.forEach((element) => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      });
  
      // Cleanup event listeners
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        hoverElements.forEach((element) => {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }, []);

  return (
    <div id="magic-cursor">
      <div
        ref={cursorBallRef}
        id="ball"
      ></div>
    </div>
  )
}
