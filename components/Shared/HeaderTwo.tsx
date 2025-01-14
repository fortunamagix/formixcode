"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo.png";
import React, { useEffect, useState, useCallback } from 'react';
import { CaretDown } from "@phosphor-icons/react";
import { gsap } from "gsap";


export default function HeaderTwo() {
    
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY; // Get the current scroll position
      setIsFixed(scrollTop >= 100); // Set fixed-header class conditionally
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    
    if (href === '/' || href === '/hometwo') {
      e.preventDefault();
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: 0, autoKill: false },
        ease: "power2.inOut"
      });
      
      // Update URL without reload
      window.history.pushState({}, '', href);
    }
  }, []);

  return (
    <header className={`main-header ${isFixed ? 'fixed-header' : ''}`}>
        <div className="header-upper">
            <div className="container">
                <div className="header-inner">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2 col-md-2 col-6 col-sm-3">
                            <div className="logo-area">
                                <div className="logo">
                                    <Link className="twonavstyle" href="/">
                                        <Image className="logo-img" src={Logo} alt="logo" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-10 col-6 col-sm-9">
                            <div className="main-menu">
                                <nav id="mobile-menu">
                                    <ul className="onepage">
                                        <li className="has-dropdown">
                                            <Link href="/hometwo" className="linkstyle twonavstyle d-flex align-items-center">Home <CaretDown className="nviconhv" size={20} /></Link>
                                            <ul className="sub-menu">
                                                <li><Link className="twonavstyle" href="/">Onepage Version</Link></li>
                                                <li><Link className="twonavstyle" href="/hometwo">Multipage Version</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/service
                                        " className="linkstyle twonavstyle">services</Link></li>
                                        <li className="has-dropdown"><Link href="/projects" className="linkstyle twonavstyle d-flex align-items-center">Projects <CaretDown className="nviconhv" size={20} /></Link>
                                            <ul className="sub-menu">
                                                <li><Link className="twonavstyle" href="/twocolumn">Two Column</Link></li>
                                                <li><Link className="twonavstyle" href="/threecolumn">Three Column</Link></li>
                                                <li><Link className="twonavstyle" href="/singleproject">Single Projects</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/about" className="linkstyle twonavstyle">about</Link></li>
                                        <li><Link href="/contact" className="linkstyle twonavstyle">Contact</Link></li>
                                        <li className="has-dropdown"><Link href="#" className="linkstyle twonavstyle d-flex align-items-center">Pages <CaretDown className="nviconhv" size={20} /></Link>
                                            <ul className="sub-menu">
                                                <li><Link className="twonavstyle" href="/blog">Blog</Link></li>
                                                <li><Link className="twonavstyle"
                                                href="/blogdetails">Single Blog</Link></li>
                                                <li><Link className="twonavstyle" href="/terms">Terms & Conditions</Link></li>
                                                <li><Link className="twonavstyle" href="/privacy">Privacy Policy</Link></li>
                                                <li><Link className="twonavstyle" href="/404">404</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
