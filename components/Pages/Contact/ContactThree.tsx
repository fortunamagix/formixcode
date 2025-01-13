"use client";
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import Image from 'next/image'
import me2 from '@/public/images/about/me2.jpg'
import { EnvelopeSimple, FacebookLogo, GithubLogo, LinkedinLogo, User, XLogo } from '@phosphor-icons/react';

export default function ContactThree() {
  return (
    <>
      <section className="single-page-hero-area">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-lg-12">
              <h2>Contact Me</h2>
              <div className="breadcrumb__list">
                <span>
                  <Link href="/hometwo">Home</Link>
                </span>
                <span className="dvdr">
                  <CaretRight size={18} />
                </span>
                <span>Contact Me</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="contact-content-part wow fadeInUp delay-0-2s">
                        <Image className='contactimg' src={me2} alt="" />
                        <p> Are you ready?</p>
                        <h2> Elevate Your Brand experience to the next level</h2>
                        <p>Hi, I’m Walker, a passionate UX Designer dedicated to creating user-friendly digital experiences.</p>
                        {/* <!-- START CONTACT SINGLEDESIGN AREA --> */}
                        <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                            <div className="about-social">
                                <ul>
                                    <li><Link className='socaillink' href="#"><FacebookLogo /></Link></li>
                                    <li><Link className='socaillink' href="#"><XLogo /></Link></li>
                                    <li><Link className='socaillink' href="#"><LinkedinLogo /></Link></li>
                                    <li><Link className='socaillink' href="#"><GithubLogo /></Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- / END CONTACT SINGLEDESIGN AREA --> */}
                    </div>
                </div>
                {/* <!-- START CONTACT FORM DESIGN AREA --> */}
                <div className="col-lg-6">
                    <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                        <form id="contactForm" className="contact-form" action="#" method="post">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" className="form-control" value="" placeholder="Steve Milner" data-error="Please enter your Name" />
                                        <label htmlFor="name" className="for-icon">
                                            <User />
                                        </label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" className="form-control" value="" placeholder="hello@websitename.com" data-error="Please enter your Email" />
                                        <label htmlFor="email" className="for-icon"><EnvelopeSimple /></label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="name">Subject</label>
                                        <input type="text" id="subject" className="form-control" value="" placeholder="Your Subject" data-error="Please enter your Name" />
                                        <label htmlFor="name" className="for-icon"><User /></label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="message">Your Message</label>
                                        <textarea name="message" id="message" className="form-control" rows={4} placeholder="Write Your message" data-error="Please Write your Message"></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group mb-0">
                                        <button type="submit" className="theme-btn">
                                            Send Me Message <i className="ri-mail-line"></i>
                                        </button>
                                        <div id="msgSubmit" className="hidden"></div>
                                    </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <p className="input-success">We have received your mail, We will get back to you soon!</p>
                                    <p className="input-error">Sorry, Message could not send! Please try again.</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <!-- / END CONTACT FORM DESIGN AREA --> */}
            </div>
        </div>
    </section>
    </>
  );
}
