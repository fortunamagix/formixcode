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
              Crafting unique digital identities <br />that captivate and resonate<br /> with your audience.
              </p>
            </div>
          </div>
          {/* <!-- / END SINGLE SERVICE DESIGN AREA --> */}
          {/* <!-- START SINGLE SERVICE DESIGN AREA --> */}
          <div className="col-lg-4 col-md-5">
            <div className="service-item wow fadeInUp delay-0-4s">
              <ArrowUpRight className="icopos" />
              <h5>02</h5>
              <h4>UI/UX Design</h4>
              <p>
              Delivering seamless, intuitive, and delightful user experiences for web and mobile platforms.
              </p>
            </div>
          </div>
          {/* <!-- / END SINGLE SERVICE DESIGN AREA --> */}
          {/* <!-- START SINGLE SERVICE DESIGN AREA --> */}
          <div className="col-lg-4 col-md-5">
            <div className="service-item wow fadeInUp delay-0-6s">
              <ArrowUpRight className="icopos" />
              <h5>03</h5>
              <h4>Consultation & Deployment</h4>
              <p>
              From strategy to deployment, we provide tailored consultations and scalable solutions.
              </p>
            </div>
          </div>
          {/* <!-- / END SINGLE SERVICE DESIGN AREA --> */}
          {/* <!-- START SINGLE SERVICE DESIGN AREA --> */}
          <div className="col-lg-8 col-md-7">
            <div className="service-item wow fadeInUp delay-0-8s">
              <ArrowUpRight className="icopos" />
              <h5>04</h5>
              <h4>Afterservice and<br />Monthly Support</h4>
              <p>
              Ongoing monthly services to ensure your projects<br/> stay optimized and up-to-date.
              </p>
            </div>
          </div>
          {/* <!-- / END SINGLE SERVICE DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
}
