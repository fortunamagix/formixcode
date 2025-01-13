'use client';
// import {CaretUp} from '@phosphor-icons/react';
import { useEffect, useRef } from 'react';



export default function ScrollTopUp() {

    const progressRef = useRef<SVGPathElement | null>(null);
  const offset = 150;

  useEffect(() => {
    const progressPath = progressRef.current;

    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();

    // Set up path length properties
    progressPath.style.transition = progressPath.style.webkitTransition  = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength.toString();

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress.toString();
    };

    const handleScroll = () => {
      updateProgress();

      const progressWrap = document.querySelector<HTMLDivElement>('.progress-wrap');
      if (progressWrap) {
        if (window.scrollY > offset) {
          progressWrap.classList.add('active-progress');
        } else {
          progressWrap.classList.remove('active-progress');
        }
      }
    };

    // Initialize progress
    updateProgress();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="progress-wrap cursor-pointer" onClick={scrollToTop}>
      <span className='topupicon'>Up</span>
      {/* <CaretUp className="topupicon" size={32} /> */}
      {/* <i className="ph ph-sliders-horizontal topupicon"></i> */}
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          ref={progressRef}
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        />
      </svg>
    </div>
  )
}
