"use client";
import CountUp from "react-countup";
import Image from "next/image";
import me2 from "@/public/images/about/me2.jpg";

export default function AboutTwo() {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title section-white-title wow fadeInUp delay-0-2s">
              <h2>About Me</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-4 col-sm-12 about-image">
            <Image className="aboutimages" src={me2} alt="" />
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="about-content-part wow fadeInUp delay-0-2s">
              <p>
                I’m Noir Walker, a seasoned UX designer with over 8 years of
                experience in crafting intuitive and engaging digital
                experiences. My journey began with a background in graphic
                design, where I discovered my passion for understanding user
                behavior and translating it into seamless interactions.
              </p>
            </div>
            {/* <!-- START COUNTER DESIGN AREA --> */}
            <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s">
              <div className="counter-item counter-text-wrap">
                <CountUp className="count-text plus" start={0} end={8} enableScrollSpy />
                <span className="counter-title">Years Of Experience</span>
              </div>
              <div className="counter-item counter-text-wrap">
              <CountUp className="count-text k-plus" start={0} end={1} enableScrollSpy />
                <span className="counter-title">Complete Projects</span>
              </div>
              <div className="counter-item counter-text-wrap">
              <CountUp className="count-text percent" start={0} end={90} enableScrollSpy />
                <span className="counter-title">Client Satisfactions</span>
              </div>
            </div>
            {/* <!-- / END COUNTER DESIGN AREA --> */}
          </div>
          {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
}
