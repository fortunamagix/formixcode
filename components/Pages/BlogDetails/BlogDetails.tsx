"use client";
import {
  CaretRight,
  ChatsCircle,
  Clock,
  FacebookLogo,
  LinkedinLogo,
  TwitterLogo,
  User,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import blog1 from "@/public/images/blog/blog1.jpg";
import blog2 from "@/public/images/blog/blog2.jpg";
import author from "@/public/images/blog/author.jpg";
import vh01 from "@/public/images/avatar/01.jpg";
import vh02 from "@/public/images/avatar/02.jpg";
import blogsm1 from "@/public/images/blog/blog-sm-1.jpg";
import blogsm2 from "@/public/images/blog/blog-sm-2.jpg";
import blogsm3 from "@/public/images/blog/blog-sm-3.jpg";

export default function BlogDetails() {
  return (
    <>
      <section className="single-page-hero-area">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-lg-12">
              <h2>Create a Landing Page That Performs Great</h2>
              <div className="breadcrumb__list">
                <span>
                  <Link href="/hometwo">Home</Link>
                </span>
                <span className="dvdr">
                  <CaretRight size={18} />
                </span>
                <span>Blog</span>
                <span className="dvdr">
                  <CaretRight size={18} />
                </span>
                <span>Create a Landing Page That Performs Great</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="postbox__area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="postbox__wrappers">
                <div className="postbox__mains">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="postbox__main-wrapper">
                        <div className="postbox__thumb w-img mb-30">
                          <Link href="/blogdetails">
                            <Image className="imgauto" src={blog2} alt="" />
                          </Link>
                        </div>
                        <div className="postbox__meta">
                          <span>
                            <Link href="">
                            <User size={18} />Tanvir Hossain
                            </Link>
                          </span>
                          <span>
                            <Link href="">
                            <Clock size={18} />January 22,
                              2022
                            </Link>
                          </span>
                          <span>
                            <Link href="">
                            <ChatsCircle size={18} />35
                            </Link>
                          </span>
                        </div>
                        <div className="postbox__details-content-wrapper">
                          <h3 className="postbox__details-title">
                            As influential as runways are, trends not solely{" "}
                            <br /> born them. There was a clear direction coming
                            their social media platform.
                          </h3>
                          <p>
                            One morning, when Gregor Samsa woke from troubled
                            dreams, he found himself transformed in his bed into
                            a horrible vermin. He lay on his armour-like back,
                            and if he lifted his head a little he could see his
                            brown belly, slightly domed and divided by arches
                            into stiff sections. The bedding was hardly able to
                            cover it and seemed ready to slide off any moment.
                          </p>
                          <p>
                            I should be incapable of drawing a single stroke at
                            the present moment; and yet I feel that never was a
                            greater artist than now.
                          </p>
                          <div className="postbox__img m-img mt-50 mb-45">
                            <Image className="imgauto" src={blog1} alt="" />
                            <h5 className="postbox__img-caption">
                              Image by <Link href="#">@example01</Link>
                            </h5>
                          </div>
                          <p>
                            His many legs, pitifully thin compared with the size
                            of the rest of him, waved about helplessly as he
                            looked. What&apos;s happened to me? he thought. It
                            wasn&apos;t a dream. His room, a proper human room
                            although a little too small, lay peacefully between
                            its four familiar walls. A collection of textile
                            samples lay spread out on the table - Samsa was a
                            travelling salesman - and above it there hung a
                            picture that he had recently cut out of an
                            illustrated magazine.
                          </p>
                          <div className="postbox__quote">
                            <blockquote>
                              <div className="postbox__quote-icon">
                                <span>
                                  <svg
                                    width="34"
                                    height="28"
                                    viewBox="0 0 34 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M25.6645 0C27.2731 0 28.5892 0.329033 29.6129 0.987098C30.6366 1.64516 31.4774 2.48602 32.1355 3.50968C32.9398 4.67957 33.4516 5.95915 33.671 7.34839C33.8903 8.73764 34 9.87097 34 10.7484C34 14.3312 33.086 17.585 31.2581 20.5097C29.4301 23.4344 26.5785 25.8108 22.7032 27.6387L21.7161 25.6645C23.9828 24.714 25.9204 23.2151 27.529 21.1677C29.2108 19.1204 30.0516 17.0366 30.0516 14.9161C30.0516 14.0387 29.9419 13.271 29.7226 12.6129C28.5527 13.5634 27.2 14.0387 25.6645 14.0387C23.7634 14.0387 22.1183 13.4172 20.729 12.1742C19.3398 10.9312 18.6452 9.21291 18.6452 7.01936C18.6452 4.97205 19.3398 3.29033 20.729 1.9742C22.1183 0.658065 23.7634 0 25.6645 0ZM7.01936 0C8.62796 0 9.94409 0.329033 10.9677 0.987098C11.9914 1.64516 12.8323 2.48602 13.4903 3.50968C14.2946 4.67957 14.8065 5.95915 15.0258 7.34839C15.2452 8.73764 15.3548 9.87097 15.3548 10.7484C15.3548 14.3312 14.4409 17.585 12.6129 20.5097C10.7849 23.4344 7.93333 25.8108 4.05806 27.6387L3.07097 25.6645C5.33763 24.714 7.27527 23.2151 8.88387 21.1677C10.5656 19.1204 11.4065 17.0366 11.4065 14.9161C11.4065 14.0387 11.2968 13.271 11.0774 12.6129C9.90753 13.5634 8.55484 14.0387 7.01936 14.0387C5.11828 14.0387 3.47312 13.4172 2.08387 12.1742C0.694624 10.9312 0 9.21291 0 7.01936C0 4.97205 0.694624 3.29033 2.08387 1.9742C3.47312 0.658065 5.11828 0 7.01936 0Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                              </div>
                              <p>
                                “I try as much as possible to give you a great
                                basic product and what comes out, I feel, is
                                really amazing.”
                              </p>
                            </blockquote>
                          </div>
                          <div className="postbox__features">
                            <h4 className="postbox__features-title">
                              Learning from failure
                            </h4>
                            <p>
                              The European languages are members of the same
                              family. Their separate existence is a myth. For
                              science europe uses the same vocabulary.{" "}
                            </p>
                            <ul>
                              <li>Get yourself comfortable.</li>
                              <li>
                                Manage your workspace and organize your desk.
                              </li>
                              <li>Keep In touch with your co-workers.</li>
                            </ul>
                          </div>
                          <p>
                            The new common language will be more simple and
                            regular than the existing European languages. It
                            will be as simple as Occidental; in fact, it will be
                            Occidental. To an English person, it will seem like
                            simplified English, as a skeptical Cambridge friend
                            of mine told me what Occidental is. The European
                            languages are members of the same family.
                          </p>
                        </div>
                        <div className="postbox__share-wrapper mb-60">
                          <div className="row align-items-center">
                            <div className="col-xl-7">
                              <div className="tagcloud tagcloud-sm">
                                <span>Tags:</span>
                                <Link href="#">Blog</Link>
                                <Link href="#">Creative</Link>
                                <Link href="#">Portfoilo</Link>
                                <Link href="#">Harry</Link>
                              </div>
                            </div>
                            <div className="col-xl-5">
                              <div className="postbox__share text-xl-end">
                                <span>Share On:</span>
                                <Link href="#">
                                <LinkedinLogo size={24} />
                                </Link>
                                <Link href="#">
                                <TwitterLogo size={24} />
                                </Link>
                                <Link href="#">
                                <FacebookLogo size={24} />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="postbox__comment-wrapper">
                          <div className="postbox__comment mb-95">
                            <h3 className="postbox__comment-title">
                              Comments (2)
                            </h3>
                            <ul>
                              <li>
                                <div className="postbox__comment-box d-sm-flex align-items-start">
                                  <div className="postbox__comment-info">
                                    <div className="postbox__comment-avater">
                                      <Image
                                        className="imgauto"
                                        src={vh01}
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="postbox__comment-text ">
                                    <div className="postbox__comment-name">
                                      <span className="post-meta">
                                        {" "}
                                        July 14, 2022
                                      </span>
                                      <h5>
                                        <Link href="#">Eleanor Fant</Link>
                                      </h5>
                                    </div>
                                    <p>
                                      One’s of the best template out of there.
                                      design, code quality, updates etc
                                      everything you needs guys, buy it you
                                      won’t regret it!
                                    </p>
                                    <div className="postbox__comment-reply">
                                      <Link href="#">Reply</Link>
                                    </div>
                                  </div>
                                </div>
                                <ul className="children">
                                  <li>
                                    <div className="postbox__comment-box d-sm-flex align-items-start">
                                      <div className="postbox__comment-info">
                                        <div className="postbox__comment-avater">
                                          <Image
                                            className="imgauto"
                                            src={vh02}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="postbox__comment-text ">
                                        <div className="postbox__comment-name">
                                          <span className="post-meta">
                                            {" "}
                                            July 14, 2022
                                          </span>
                                          <h5>
                                            <Link href="#">
                                              Alexander Ljung
                                            </Link>
                                          </h5>
                                        </div>
                                        <p>
                                          This theme is super awesome! But I had
                                          one small issue with link option in
                                          parallax portfolio. The other day!{" "}
                                        </p>
                                        <div className="postbox__comment-reply">
                                          <Link href="#">Reply</Link>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <div className="postbox__comment-box d-sm-flex align-items-start">
                                  <div className="postbox__comment-info">
                                    <div className="postbox__comment-avater">
                                      <Image
                                        className="imgauto"
                                        src={vh01}
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="postbox__comment-text ">
                                    <div className="postbox__comment-name">
                                      <span className="post-meta">
                                        {" "}
                                        July 14, 2022
                                      </span>
                                      <h5>
                                        <Link href="#">Tanvir Hossain</Link>
                                      </h5>
                                    </div>
                                    <p>
                                      His many legs, pitifully thin compared
                                      with the size of the rest of him, waved
                                      about helplessly as he looked
                                    </p>
                                    <div className="postbox__comment-reply">
                                      <Link href="#">Reply</Link>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="postbox__comment-form">
                            <h3 className="postbox__comment-form-title">
                              Leave A Reply
                            </h3>
                            <p>
                              Your email address will not be published. Required
                              fields are marked *
                            </p>
                            <form action="#">
                              <div className="row">
                                <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                                  <div className="postbox__comment-input">
                                    <input type="text" placeholder="Name*" />
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                                  <div className="postbox__comment-input">
                                    <input type="email" placeholder="Email" />
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-12">
                                  <div className="postbox__comment-input">
                                    <input type="text" placeholder="Website" />
                                  </div>
                                </div>
                                <div className="col-xxl-12">
                                  <div className="postbox__comment-input">
                                    <textarea placeholder="Your Comment Here..."></textarea>
                                  </div>
                                </div>
                                <div className="col-xxl-12">
                                  <div className="postbox__comment-agree d-flex align-items-start mb-25">
                                    <input
                                      className="e-check-input"
                                      type="checkbox"
                                      id="e-agree"
                                    />
                                    <label className="e-check-label">
                                      Save my name, email, and website in this
                                      browser for the next time I comment.
                                    </label>
                                  </div>
                                </div>
                                <div className="col-xxl-12">
                                  <div className="postbox__comment-btn">
                                    <button type="submit" className="theme-btn">
                                      Submit Comment
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
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
                                <Image
                                  className="imgauto"
                                  src={author}
                                  alt=""
                                />
                              </div>
                              <div className="sidebar__author-content">
                                <h3 className="sidebar__author-title">
                                  Colene Landin
                                </h3>
                                <p>
                                  Lorem ipsum dolor ametare elit consectetur
                                  adipiscing Aenean pellentesque.
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
                                    <Image
                                      className="imgauto"
                                      src={blogsm1}
                                      alt=""
                                    />
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
                                    <Image
                                      className="imgauto"
                                      src={blogsm2}
                                      alt=""
                                    />
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
                                    <Image
                                      className="imgauto"
                                      src={blogsm3}
                                      alt=""
                                    />
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
