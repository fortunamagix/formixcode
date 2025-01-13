"use client";
import { CaretDown, List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "@/public/images/logo.png";
import Image from "next/image";

export default function MobileMenuTwo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenTwo, setDropdownOpenTwo] = useState(false);
  const [dropdownOpenThree, setDropdownOpenThree] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleDropdownTwo = () => setDropdownOpenTwo(!dropdownOpenTwo);
  const toggleDropdownThree = () => setDropdownOpenThree(!dropdownOpenThree);
  const closeDropdown = () => setDropdownOpen(false);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.navbar') && menuOpen) {
        closeMenu();
        closeDropdown();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
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
          <li className="dropdown">
            <button className="dropdown-button smnavtext d-flex align-items-center" onClick={toggleDropdownTwo}>
              HOME <CaretDown className="nviconhv" size={20} />
            </button>
            <ul className={`dropdown-menu ${dropdownOpenTwo ? 'open' : ''}`}>
              <li><Link className="smnavtext" href="#web-design">OPNEPAGE VERSION</Link></li>
              <li><Link className="smnavtext" href="#seo">MULTIPAGE VERSION</Link></li>
            </ul>
          </li>
          <li>
            <Link className="mnav smnavtext" href="#projects">SERVICES</Link>
          </li>
          <li className="dropdown">
            <button className="dropdown-button smnavtext d-flex align-items-center" onClick={toggleDropdown}>
              PROJECTS <CaretDown className="nviconhv" size={20} />
            </button>
            <ul className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
              <li><Link className="smnavtext" href="#web-design">TWO COLUMN</Link></li>
              <li><Link className="smnavtext" href="#seo">THREE COLUMN</Link></li>
              <li><Link className="smnavtext" href="#digital-marketing">SINGLE PROJECTS</Link></li>
            </ul>
          </li>
          <li>
            <Link className="mnav smnavtext" href="#projects">ABOUT</Link>
          </li>
          <li>
            <Link className="mnav smnavtext" href="#blog">CONATACT</Link>
          </li>
          <li className="dropdown">
            <button className="dropdown-button smnavtext d-flex align-items-center" onClick={toggleDropdownThree}>
              PAGES <CaretDown className="nviconhv" size={20} />
            </button>
            <ul className={`dropdown-menu ${dropdownOpenThree ? 'open' : ''}`}>
              <li><Link className="smnavtext" href="#web-design">BLOG</Link></li>
              <li><Link className="smnavtext" href="#seo">SINGLE BLOG</Link></li>
              <li><Link className="smnavtext" href="#digital-marketing">TERMS & CONDITIONS</Link></li>
              <li><Link className="smnavtext" href="#digital-marketing">PRIVACY POLICY</Link></li>
              <li><Link className="smnavtext" href="#digital-marketing">404</Link></li>
            </ul>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
}
