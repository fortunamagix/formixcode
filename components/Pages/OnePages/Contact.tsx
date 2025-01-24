"use client";
import { useEffect } from "react";
import Image from "next/image";
import me from "@/public/images/about/webp_why-choose-us.webp";
import Link from "next/link";
import {
  EnvelopeSimple,
  FacebookLogo,
  GithubLogo,
  LinkedinLogo,
  User,
  XLogo,
} from "@phosphor-icons/react";

export default function Contact() {
  useEffect(() => {
    const d = document;
    const w = "https://tally.so/widgets/embed.js";
    const v = function () {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(
          function (e: any) {
            e.src = e.dataset.tallySrc;
          }
        );
      }
    };

    if (typeof (window as any).Tally !== "undefined") {
      v();
    } else if (d.querySelector('script[src="' + w + '"]') === null) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    }
  }, []);

  return (
    <section id="contact" className="contact-area">
      <div
        className="container"
        style={{ maxWidth: "1320px", margin: "0 auto" }}
      >
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title section-black-title wow fadeInUp delay-0-2s">
              <h2>Contact Me</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-content-part wow fadeInUp delay-0-2s text-center px-4 md:px-6">
              <Image className="contactimg mx-auto" src={me} alt="" />
              <p className="text-center mb-3"> Are you ready?</p>
              <h2 className="text-center text-2xl md:text-3xl font-bold mb-4">
                ELEVATE YOUR ONLINE PRESENCE TO THE NEXT LEVEL
              </h2>
              <p className="text-center mb-6">
                Hi, I'm a dedicated professional helping businesses thrive with
                stunning websites, seamless hosting, and reliable maintenance
                services. Let's create a digital experience that stands out.
              </p>
              {/* <!-- START CONTACT SINGLEDESIGN AREA --> */}
              <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                <div className="about-social">
                  <ul>
                    <li>
                      <Link className="socaillink" href="#">
                        <FacebookLogo />
                      </Link>
                    </li>
                    <li>
                      <Link className="socaillink" href="#">
                        <XLogo />
                      </Link>
                    </li>
                    <li>
                      <Link className="socaillink" href="#">
                        <LinkedinLogo />
                      </Link>
                    </li>
                    <li>
                      <Link className="socaillink" href="#">
                        <GithubLogo />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- / END CONTACT SINGLEDESIGN AREA --> */}
            </div>
          </div>
          {/* <!-- START CONTACT FORM DESIGN AREA --> */}
          <div className="col-lg-6">
            <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
              <iframe
                data-tally-src="https://tally.so/embed/3Ev9vl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="620"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="formixcode-contact"
                style={{
                  background: "transparent",
                  border: "none",
                }}
              ></iframe>
            </div>
          </div>
          {/* <!-- / END CONTACT FORM DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
}
