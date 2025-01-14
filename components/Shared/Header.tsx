"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo.png";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import NavItem from "./NavItem";

export default function Header() {
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY;
      setIsFixed(scrollTop >= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`main-header ${isFixed ? "fixed-header" : ""}`}>
      <div className="header-upper">
        <div className="container">
          <div className="header-inner">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-2 col-6 col-sm-3">
                <div className="logo-area">
                  <div className="logo">
                    <Link 
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        gsap.to(window, {
                          duration: 1,
                          scrollTo: { y: 0, autoKill: false },
                          ease: "power2.inOut",
                          onComplete: () => {
                            window.history.pushState({}, '', '/');
                          }
                        });
                      }}
                      className="aws-gradient-text"
                    >
                      <Image className="logo-img" src={Logo} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-10 col-6 col-sm-9">
                <NavItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
