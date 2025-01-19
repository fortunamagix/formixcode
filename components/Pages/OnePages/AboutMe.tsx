"use client";
import CountUp from "react-countup";
import Image from "next/image";
import me from "@/public/images/about/me.jpg";

export default function AboutMe() {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title section-white-title wow fadeInUp delay-0-2s">
              <h2>Why Choose Us?</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-4 col-sm-12 about-image">
            <Image className="aboutimages" src={me} alt="" />
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="about-content-part wow fadeInUp delay-0-2s">
              <p>
              1. Expertise You Can Trust
With years of experience in web development and design, we deliver cutting-edge, customized solutions tailored to your business needs.
<br />
<br />
2. Affordable Yet Premium
We offer high-quality services at half the price of traditional agencies, ensuring you get exceptional value for your investment.
<br />
<br />
3. End-to-End Services
From website design to hosting, maintenance, and integrations, we provide a seamless experience so you can focus on what matters—your business.
<br />
<br />
4. Speed and Efficiency
We prioritize fast-paced development and deliver results quickly without compromising quality.
              </p>
            </div>
            {/* <!-- START COUNTER DESIGN AREA --> */}
            <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s">
              <div className="counter-item counter-text-wrap">
                <CountUp className="count-text plus" start={0} end={4} enableScrollSpy />
                <span className="counter-title">Years Of Experience</span>
              </div>
              <div className="counter-item counter-text-wrap">
              <CountUp className="count-text k-plus" start={0} end={200} enableScrollSpy />
                <span className="counter-title">Value Delivery</span>
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
