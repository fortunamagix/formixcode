"use client";
import { CaretRight } from "@phosphor-icons/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

export default function ServiceTwo() {
  return (
    <>
    <section className="single-page-hero-area">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-lg-12">
            <h2>My Services</h2>
            <div className="breadcrumb__list">
              <span>
                <Link href="#">Home</Link>
              </span>
              <span className="dvdr">
                <CaretRight size={18} />
              </span>
              <span>Services</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="services" className="services-area">
      <div className="container">
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
    </>
  );
}
