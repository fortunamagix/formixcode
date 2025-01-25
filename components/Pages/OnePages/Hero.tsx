"use client";
import Image from "next/image";
// import me from "@/public/images/about/me.jpg";
import React, { useEffect } from "react";
import styles from "@/styles/OrangeGradient.module.css";
import partner1 from "@/public/images/hero-partner-icons/aws-svgrepo-com.svg";
import partner2 from "@/public/images/hero-partner-icons/docker-svgrepo-com.svg";
import partner3 from "@/public/images/hero-partner-icons/nextjs-2.svg";
import partner4 from "@/public/images/hero-partner-icons/shopify-logo-svgrepo-com.svg";
import partner5 from "@/public/images/hero-partner-icons/spline.svg";
import partner6 from "@/public/images/hero-partner-icons/vercel-2.svg";
import partner7 from "@/public/images/hero-partner-icons/wordpress.svg";
import Link from "next/link";
import Spline from "@splinetool/react-spline";

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
              {/* <Image className="profile-img" src={me} alt="Profile" /> */}
              <h2>
                Turn Your <span className="ideas-gradient-text">Ideas</span>
                <br /> to Business <br />
                <span className={styles.awsOrangeGradient}>with AWS</span>
              </h2>
              {/* still working on the quote */}

              <div className="flex inline-block text-center mt-4">
                <Image
                  src="/images/hero-quote-open.svg"
                  alt="Open quote"
                  width={10}
                  height={10}
                />
                <p className="text-gray-800 mt-4">
                  Leave the coding and deployment to us—focus on growing your
                  business.
                </p>
                <Image
                  src="/images/hero-quote-close.svg"
                  alt="Close quote"
                  width={10}
                  height={10}
                  className=""
                />
              </div>
              {/* end of the quote */}
              <div className="center-button-container">
                <Link className="theme-btn" href="#contact">
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>
                  <div id="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                  <div className="get-in-touch-btn">Get In touch</div>
                </Link>
              </div>
              <div className="mt-2">
                <div className="spline-container" style={{ height: "30vh" }}>
                  <Spline scene="https://prod.spline.design/kM2TZb0O3LyaLS6Q/scene.splinecode" />
                </div>
              </div>
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
