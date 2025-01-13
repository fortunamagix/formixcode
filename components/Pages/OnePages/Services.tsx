"use client";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Services() {
  return (
    <section id="services" className="services-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title section-black-title wow fadeInUp delay-0-2s">
              <h2>Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!-- START SINGLE SERVICE DESIGN AREA --> */}
          <div className="col-lg-8 col-md-7">
            <div className="service-item wow fadeInUp delay-0-2s">
              <ArrowUpRight className="icopos" />
              <h5>01</h5>
              <h4>Brand Identity Design</h4>
              <p>
                Blend of strategic thinking and creative flair to craft a
                digital identity that resonates and captivates.kits you need to
                create a true website within minutes.
              </p>
            </div>
          </div>
          {/* <!-- / END SINGLE SERVICE DESIGN AREA --> */}
          {/* <!-- START SINGLE SERVICE DESIGN AREA --> */}
          <div className="col-lg-4 col-md-5">
            <div className="service-item wow fadeInUp delay-0-4s">
              <ArrowUpRight className="icopos" />
              <h5>02</h5>
              <h4>Visual Design</h4>
              <p>
                Blend of artistic intuition with strategic insight to craft a
                visual identity.
              </p>
            </div>
          </div>
          {/* <!-- / END SINGLE SERVICE DESIGN AREA --> */}
          {/* <!-- START SINGLE SERVICE DESIGN AREA --> */}
          <div className="col-lg-4 col-md-5">
            <div className="service-item wow fadeInUp delay-0-6s">
              <ArrowUpRight className="icopos" />
              <h5>03</h5>
              <h4>UX Research</h4>
              <p>
                Blend of functionality with aesthetics to create delightful
                experience.
              </p>
            </div>
          </div>
          {/* <!-- / END SINGLE SERVICE DESIGN AREA --> */}
          {/* <!-- START SINGLE SERVICE DESIGN AREA --> */}
          <div className="col-lg-8 col-md-7">
            <div className="service-item wow fadeInUp delay-0-8s">
              <ArrowUpRight className="icopos" />
              <h5>04</h5>
              <h4>Art Direction</h4>
              <p>
                Blend of strategic thinking and creative flair to craft a
                digital identity that resonates and captivates.kits you need to
                create a true website within minutes.
              </p>
            </div>
          </div>
          {/* <!-- / END SINGLE SERVICE DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
}
