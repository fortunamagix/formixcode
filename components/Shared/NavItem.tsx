import Link from "next/link";
import { gsap } from "gsap";

export default function NavItem() {
  return (
    <div className="main-menu">
      <nav id="mobile-menu">
        <ul className="onepage">
          <li>
            <Link 
              href="/" 
              className=""
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
            >
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
              custom
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
