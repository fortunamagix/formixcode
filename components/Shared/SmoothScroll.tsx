"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const tick = (time: number) => {
      lenis.raf(time * 500);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
    };
  }, []);

  return null;
};

export default SmoothScroll;
