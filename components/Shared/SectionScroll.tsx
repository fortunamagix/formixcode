"use client";
import { useEffect } from "react";

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    const anchors: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href")?.substring(1);
      if (!targetId) return;

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener("click", handleClick));
    };
  }, []);

  return null; // এই কম্পোনেন্ট কোনো UI রেন্ডার করবে না, শুধুমাত্র স্ক্রল হ্যান্ডেল করবে।
};

export default SmoothScroll;
