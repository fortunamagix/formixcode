"use client";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "@/public/images/webp_formixcode.webp";
import Image from "next/image";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".navbar") && menuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="container">
      <div className="navflex">
        <div className="logo-area">
          <div className="logo">
            <Link href="/">
              <Image className="logo-img" src={Logo} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-container">
        <button className="menu-button" onClick={toggleMenu}>
          {menuOpen ? <List size={32} /> : <List size={32} />}
        </button>
      </div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <button className="closebutton" onClick={toggleMenu}>
          {menuOpen ? <X size={32} /> : <X size={32} />}
        </button>
        <ul className="menu-list">
          <li>
            <Link className="mnav" href="#home">Home</Link>
          </li>
          <li>
            <Link className="mnav" href="#services">Services</Link>
          </li>
          <li>
            <Link className="mnav" href="#projects">Projects</Link>
          </li>
          <li>
            <Link className="mnav" href="#blog">Blog</Link>
          </li>
          <li>
            <Link className="mnav" href="#about">About</Link>
          </li>
          <li>
            <Link className="mnav" href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
}
