"use client";
import Image from "next/image";
import me from "@/public/images/about/me.jpg";
import React, { useEffect } from "react";
import partner1 from "@/public/images/client-logos/partner1.png";
import partner2 from "@/public/images/client-logos/partner2.png";
import partner3 from "@/public/images/client-logos/partner3.png";
import partner4 from "@/public/images/client-logos/partner4.png";
import partner5 from "@/public/images/client-logos/partner5.png";
import partner6 from "@/public/images/client-logos/partner6.png";
import partner7 from "@/public/images/client-logos/partner7.png";
import Link from "next/link";

export default function Hero() {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  const addAnimation = () => {
    const scrollers = document.querySelectorAll<HTMLElement>(".scroller");
    scrollers.forEach((scroller) => {

      scroller.setAttribute("data-animated", "true");

      const scrollerInner =
        scroller.querySelector<HTMLElement>(".scroller__inner");
      if (scrollerInner) {

        const scrollerContent = Array.from(
          scrollerInner.children
        ) as HTMLElement[];

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    });
  };

  return (
    <section id="home" className="main-hero-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <!-- START HERO DESIGN AREA --> */}
            <div className="hero-content wow fadeInUp text-center delay-0-2s">
              <Image className="profile-img" src={me} alt="Profile" />
              <h2>
                Freelance <br /> Brand Designer
              </h2>
              <p>
                Hi, I’m Walker, a passionate UX Designer dedicated to creating
                user-friendly digital experiences.
              </p>
              <Link className="theme-btn" href="#contact">
                Get In touch
              </Link>
            </div>
            {/* <!-- / END HERO DESIGN AREA --> */}
            <div className="company-list">
              <div className="scroller" data-direction="left" data-speed="slow">
                <div className="scroller__inner">
                  <Image className="hero-slide" src={partner1} alt="Company" />
                  <Image className="hero-slide" src={partner2} alt="Company" />
                  <Image className="hero-slide" src={partner3} alt="Company" />
                  <Image className="hero-slide" src={partner4} alt="Company" />
                  <Image className="hero-slide" src={partner5} alt="Company" />
                  <Image className="hero-slide" src={partner6} alt="Company" />
                  <Image className="hero-slide" src={partner7} alt="Company" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
