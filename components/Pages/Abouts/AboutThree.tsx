"use client";
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import AboutTwo from "../HomeTwo/AboutTwo";

export default function AboutThree() {
  return (
    <>
      <section className="single-page-hero-area">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-lg-12">
              <h2>About Me</h2>
              <div className="breadcrumb__list">
                <span>
                  <Link href="/hometwo">Home</Link>
                </span>
                <span className="dvdr">
                  <CaretRight size={18} />
                </span>
                <span>About</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutTwo />
    </>
  );
}
