"use client";
import Image from 'next/image'
import me from '@/public/images/about/webp_why-choose-us.webp'
import Link from 'next/link'
import { EnvelopeSimple, FacebookLogo, GithubLogo, LinkedinLogo, User, XLogo } from '@phosphor-icons/react'

export default function Contact() {
  return (
    <section id="contact" className="contact-area">
        <div className="container">
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
                        <Image className='contactimg mx-auto' src={me} alt="" />
                        <p className="text-center mb-3"> Are you ready?</p>
                        <h2 className="text-center text-2xl md:text-3xl font-bold mb-4">ELEVATE YOUR ONLINE PRESENCE TO THE NEXT LEVEL</h2>
                        <p className="text-center mb-6">Hi, I'm a dedicated professional helping businesses thrive with stunning websites, seamless hosting, and reliable maintenance services. Let's create a digital experience that stands out.</p>
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
                                        <div className="d-flex justify-content-center d-md-block">
                                            <button type="submit" className="theme-btn">
                                                Send Me Message <i className="ri-mail-line"></i>
                                            </button>
                                        </div>
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
  )
}
