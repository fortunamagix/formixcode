"use client";
import {
  CaretLeft,
  CaretRight,
  ChatsCircle,
  Clock,
  FacebookLogo,
  LinkedinLogo,
  Play,
  TwitterLogo,
  User,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import blog1 from "@/public/images/blog/blog1.jpg";
import blog2 from "@/public/images/blog/blog2.jpg";
import blog3 from "@/public/images/blog/blog3.jpg";
import author from "@/public/images/blog/author.jpg";
import blogsm1 from "@/public/images/blog/blog-sm-1.jpg";
import blogsm2 from "@/public/images/blog/blog-sm-2.jpg";
import blogsm3 from "@/public/images/blog/blog-sm-3.jpg";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

export default function Blog() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="single-page-hero-area">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-lg-12">
              <h2>Blogs</h2>
              <div className="breadcrumb__list">
                <span>
                  <Link href="/hometwo">Home</Link>
                </span>
                <span className="dvdr">
                  <CaretRight size={18} />
                </span>
                <span>Blog</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-page-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="postbox__wrapper">
                <article className="postbox__item format-image mb-50 transition-3">
                  <div className="postbox__thumb w-img">
                    <Link href="/blogdetails">
                      <Image className="imgauto" src={blog1} alt="" />
                    </Link>
                  </div>
                  <div className="postbox__content">
                    <div className="postbox__meta">
                      <span>
                        <Link href="">
                          <User size={18} />
                          Tanvir Hossain
                        </Link>
                      </span>
                      <span>
                        <Link href="">
                          <Clock size={18} />
                          January 22, 2022
                        </Link>
                      </span>
                      <span>
                        <Link href="">
                          <ChatsCircle size={18} />
                          35
                        </Link>
                      </span>
                    </div>
                    <h3 className="postbox__title">
                      <Link href="/blogdetails">
                        Create a Landing Page That Performs Great
                      </Link>
                    </h3>
                    <div className="postbox__text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat […]
                      </p>
                    </div>
                    <div className="postbox__read-more">
                      <Link href="/blogdetails" className="theme-btn">
                        Read more
                      </Link>
                    </div>
                  </div>
                </article>
                <article className="postbox__item format-video mb-50 transition-3">
                  <div className="postbox__thumb postbox__video w-img p-relative">
                    <Link href="/blogdetails">
                      <Image className="imgauto" src={blog2} alt="" />
                    </Link>
                    <span
                      onClick={() => setOpen(true)}
                      className="play-btn pulse-btn popup-video video">
                      <Play size={24} weight="fill" />
                    </span>
                  </div>
                  <div className="">
                    <ModalVideo
                      channel="youtube"
                      youtube={{ mute: 0, autoplay: 0 }}
                      isOpen={isOpen}
                      videoId="L61p2uyiMSo"
                      onClose={() => setOpen(false)}
                    />
                  </div>
                  <div className="postbox__content">
                    <div className="postbox__meta">
                      <span>
                        <Link href="">
                          <User size={18} />
                          Tanvir Hossain
                        </Link>
                      </span>
                      <span>
                        <Link href="">
                          <Clock size={18} />
                          January 22, 2022
                        </Link>
                      </span>
                      <span>
                        <Link href="">
                          <ChatsCircle size={18} />
                          35
                        </Link>
                      </span>
                    </div>
                    <h3 className="postbox__title">
                      <Link href="/blogdetails">
                        Starting and Growing a Career in Web Design
                      </Link>
                    </h3>
                    <div className="postbox__text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat […]
                      </p>
                    </div>
                    <div className="postbox__read-more">
                      <Link href="/blogdetails" className="theme-btn">
                        Read more
                      </Link>
                    </div>
                  </div>
                </article>
                <article className="postbox__item format-audio mb-50 transition-3">
                  <div className="postbox__thumb postbox__audio w-img p-relative">
                    <iframe
                      allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316547873&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                  </div>
                  <div className="postbox__content">
                    <div className="postbox__meta">
                      <span>
                        <Link href="">
                          <User size={18} />
                          Tanvir Hossain
                        </Link>
                      </span>
                      <span>
                        <Link href="">
                          <Clock size={18} />
                          January 22, 2022
                        </Link>
                      </span>
                      <span>
                        <Link href="">
                          <ChatsCircle size={18} />
                          35
                        </Link>
                      </span>
                    </div>
                    <h3 className="postbox__title">
                      <Link href="/blogdetails">
                        How Can Designers Prepare for the Future?
                      </Link>
                    </h3>
                    <div className="postbox__text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat […]
                      </p>
                    </div>
                    <div className="postbox__read-more">
                      <Link href="/blogdetails" className="theme-btn">
                        Read more
                      </Link>
                    </div>
                  </div>
                </article>
                <article className="postbox__item format-image mb-50 transition-3">
                  <div className="postbox__thumb postbox__slider swiper-container w-img p-relative">
                    <Swiper
                      className="swiper-wrapper"
                      loop
                      slidesPerView={1}
                      modules={[Navigation, Autoplay]}
                      spaceBetween={0}
                      autoplay={{
                        delay: 3000,
                      }}
                      // Navigation arrows
                      navigation={{
                        nextEl: ".postbox-slider-button-next",
                        prevEl: ".postbox-slider-button-prev",
                      }}
                      breakpoints={{
                        "1200": {
                          slidesPerView: 1,
                        },
                        "992": {
                          slidesPerView: 1,
                        },
                        "768": {
                          slidesPerView: 1,
                        },
                        "576": {
                          slidesPerView: 1,
                        },
                        "0": {
                          slidesPerView: 1,
                        },
                      }}>
                      <SwiperSlide className="postbox__slider-item swiper-slide">
                        <Image className="imgauto" src={blog1} alt="" />
                      </SwiperSlide>
                      <SwiperSlide className="postbox__slider-item swiper-slide">
                        <Image className="imgauto" src={blog3} alt="" />
                      </SwiperSlide>
                      <SwiperSlide className="postbox__slider-item swiper-slide">
                        <Image className="imgauto" src={blog3} alt="" />
                      </SwiperSlide>
                    </Swiper>
                    <div className="postbox__nav">
                      <button aria-label="Slide Prev" className="postbox-slider-button-next">
                        <CaretRight size={32} />
                      </button>
                      <button aria-label="Slide Next" className="postbox-slider-button-prev">
                        <CaretLeft size={32} />
                      </button>
                    </div>
                  </div>
                  <div className="postbox__content">
                    <div className="postbox__meta">
                      <span>
                        <Link href="">
                          <User size={18} />
                          Tanvir Hossain
                        </Link>
                      </span>
                      <span>
                        <Link href="">
                          <Clock size={18} />
                          January 22, 2022
                        </Link>
                      </span>
                      <span>
                        <Link href="">
                          <ChatsCircle size={18} />
                          35
                        </Link>
                      </span>
                    </div>
                    <h3 className="postbox__title">
                      <Link href="/blogdetails">
                        Visiting the Ads of the World blog is like visiting
                        museum
                      </Link>
                    </h3>
                    <div className="postbox__text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat […]
                      </p>
                    </div>
                    <div className="postbox__read-more">
                      <Link href="/blogdetails" className="theme-btn">
                        Read more
                      </Link>
                    </div>
                  </div>
                </article>
                {/* <!-- START PAGINATION DESIGN AREA--> */}
                <div className="tp-pagination mt-20">
                  <nav>
                    <ul>
                      <li>
                        <Link
                          href="/blog"
                          className="tp-pagination-prev prev page-numbers">
                          <svg
                            width="16"
                            height="11"
                            viewBox="0 0 16 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M6.17749 10.105L1.62499 5.55248L6.17749 0.999981"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M14.3767 5.55249L1.75421 5.55249"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Prev
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">1</Link>
                      </li>
                      <li>
                        <span className="current">2</span>
                      </li>
                      <li>
                        <Link href="/blog">3</Link>
                      </li>
                      <li>
                        <Link href="/blog" className="next page-numbers">
                          Next
                          <svg
                            width="16"
                            height="11"
                            viewBox="0 0 16 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9.82422 1L14.3767 5.5525L9.82422 10.105"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M1.625 5.55249H14.2475"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* <!-- // END PAGINATION DESIGN AREA--> */}
              </div>
            </div>
            <div className="col-xxl-4 col-lg-4">
              <div className="blog_sidebar__wrapper pl-40">
                <div className="sidebar__widget mb-20">
                  <div className="sidebar__widget-content">
                    <div className="sidebar__search">
                      <form action="#">
                        <div className="sidebar__search-input">
                          <input
                            type="text"
                            placeholder="Enter your keywords..."
                          />
                          <button type="submit">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M19.0002 19.0002L17.2002 17.2002"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="sidebar__widget mb-45">
                  <div className="sidebar__widget-content">
                    <div className="sidebar__author">
                      <div className="sidebar__author-thumb">
                        <Image className="imgauto" src={author} alt="" />
                      </div>
                      <div className="sidebar__author-content">
                        <h3 className="sidebar__author-title">Colene Landin</h3>
                        <p>
                          Lorem ipsum dolor ametare elit consectetur adipiscing
                          Aenean pellentesque.
                        </p>
                        <div className="sidebar__author-social d-flex align-items-center justify-content-center">
                          <Link
                            className="d-flex align-items-center justify-content-center"
                            href="#">
                            <FacebookLogo size={28} />
                          </Link>
                          <Link
                            className="d-flex align-items-center justify-content-center"
                            href="#">
                            <TwitterLogo size={28} />
                          </Link>
                          <Link
                            className="d-flex align-items-center justify-content-center"
                            href="#">
                            <LinkedinLogo size={28} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar__widget mb-45">
                  <h3 className="sidebar__widget-title">Recent Post</h3>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__post">
                      <div className="rc__post d-flex align-items-center">
                        <div className="rc__post-thumb">
                          <Link href="/blogdetails">
                            <Image src={blogsm1} alt="" />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <h3 className="rc__post-title">
                            <Link href="/blogdetails">
                              Business meeting 2021 in San Francisco
                            </Link>
                          </h3>
                          <div className="rc__meta">
                            <span>
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.5 3.59961V7.49961L10.1 8.79961"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              July 21, 2022
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="rc__post d-flex align-items-center">
                        <div className="rc__post-thumb">
                          <Link href="/blogdetails">
                            <Image src={blogsm2} alt="" />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <h3 className="rc__post-title">
                            <Link href="/blogdetails">
                              Developing privacy user-centric apps
                            </Link>
                          </h3>
                          <div className="rc__meta">
                            <span>
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.5 3.59961V7.49961L10.1 8.79961"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              July 21, 2022
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="rc__post d-flex align-items-center">
                        <div className="rc__post-thumb">
                          <Link href="/blogdetails">
                            <Image src={blogsm3} alt="" />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <h3 className="rc__post-title">
                            <Link href="/blogdetails">
                              Starting and Growing Web Design in 2022
                            </Link>
                          </h3>
                          <div className="rc__meta">
                            <span>
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7.5 3.59961V7.49961L10.1 8.79961"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              July 21, 2022
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar__widget mb-45">
                  <h3 className="sidebar__widget-title">Category</h3>
                  <div className="sidebar__widget-content">
                    <ul>
                      <li>
                        <Link href="/blog">
                          Design Media <span>10</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          Figma Design <span>08</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          Web Design <span>24</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          Wix Development <span>37</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          Framer Website <span>103</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar__widget mb-40">
                  <h3 className="sidebar__widget-title">Tags</h3>
                  <div className="sidebar__widget-content">
                    <div className="tagcloud">
                      <Link href="#">Creative</Link>
                      <Link href="#">Design</Link>
                      <Link href="#">Branding</Link>
                      <Link href="#">Life Style</Link>
                      <Link href="#">Technology</Link>
                      <Link href="#">Figma</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
