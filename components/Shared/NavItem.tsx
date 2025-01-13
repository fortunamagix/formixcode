import Link from "next/link";

export default function NavItem() {
  return (
    <div className="main-menu">
      <nav id="mobile-menu">
        <ul className="onepage">
          <li>
            <Link href="/hometwo" className="">
              Home
            </Link>
          </li>
          <li>
            <Link href="#services" className="linkstyle">
              services
            </Link>
          </li>
          <li>
            <Link href="#projects" className="linkstyle">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#blog" className="linkstyle">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#about" className="linkstyle">
              about
            </Link>
          </li>
          <li>
            <Link href="#contact" className="linkstyle">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
