import Image from "next/image";
import author1 from "@/public/images/testimonials/webp_M.webp";
import author2 from "@/public/images/testimonials/webp_C.webp";
import author3 from "@/public/images/testimonials/webp_L.webp";
import author4 from "@/public/images/testimonials/webp_H.webp";
import author5 from "@/public/images/testimonials/webp_P.webp";

export default function Testimonials() {
  return (
    <section className="testimonials-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                        <h2>Testinomials</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    {/* <!-- START SINGLE TESTIMONIALS DESIGN AREA --> */}
                    <div className="testimonial-item wow fadeInUp delay-0-2s">
                        <div className="text">
                        I couldn't be happier with the website delivered. The design is stunning,
                         and the performance is outstanding. It's everything I wanted and more.
                        </div>
                        <div className="author">
                            <Image src={author1} alt="Author" />
                        </div>
                        <div className="testi-des">
                            <h5>METHAIL DEV</h5>
                            {/* <span>CEO & Founder X</span> */}
                        </div>
                    </div>
                    {/* <!-- / END SINGLE TESTIMONIALS DESIGN AREA --> */}
                </div>
                <div className="col-lg-6 col-md-6">
                    {/* <!-- START SINGLE TESTIMONIALS DESIGN AREA --> */}
                    <div className="testimonial-item wow fadeInUp delay-0-4s">
                        <div className="text">
                        The website exceeded all my expectations! The design is sleek and professional, 
                        and the performance is top-notch. It's been a game-changer for my business.
                        </div>
                        <div className="author">
                            <Image src={author2} alt="Author" />
                        </div>
                        <div className="testi-des">
                            <h5>CASSANDRA JAMES</h5>
                            {/* <span>CEO & Founder Google</span> */}
                        </div>
                    </div>
                    {/* <!-- / END SINGLE TESTIMONIALS DESIGN AREA --> */}
                </div>
                <div className="col-lg-4 col-md-6">
                    {/* <!-- START SINGLE TESTIMONIALS DESIGN AREA --> */}
                    <div className="testimonial-item wow fadeInUp delay-0-6s">
                        <div className="text">
                        This is by far the best website experience I've had. 
                        The attention to detail in the design and the smooth performance are exceptional.
                        </div>
                        <div className="author">
                            <Image src={author3} alt="Author" />
                        </div>
                        <div className="testi-des">
                            <h5>LUCAS EVANS</h5>
                            {/* <span>Managing Director - Paydesk</span> */}
                        </div>
                    </div>
                    {/* <!-- / END SINGLE TESTIMONIALS DESIGN AREA --> */}
                </div>
                <div className="col-lg-4 col-md-6">
                    {/* <!-- START SINGLE TESTIMONIALS DESIGN AREA --> */}
                    <div className="testimonial-item wow fadeInUp delay-0-8s">
                        <div className="text">
                        The website is perfect! The design truly captures my brand, 
                        and the performance is fast and seamless. I'm so impressed with the results.
                        </div>
                        <div className="author">
                            <Image src={author4} alt="Author" />
                        </div>
                        <div className="testi-des">
                            <h5>HENRY CLOUD</h5>
                            {/* <span>CEO & Founder Tesla</span> */}
                        </div>
                    </div>
                    {/* <!-- / END SINGLE TESTIMONIALS DESIGN AREA --> */}
                </div>
                <div className="col-lg-4 col-md-6">
                    {/* <!-- START SINGLE TESTIMONIALS DESIGN AREA --> */}
                    <div className="testimonial-item wow fadeInUp delay-0-9s">
                        <div className="text">
                        I absolutely love my new website! It's visually stunning, 
                        incredibly fast, and exactly what I was looking for. Highly recommended!
                        </div>
                        <div className="author">
                            <Image src={author5} alt="Author" />
                        </div>
                        <div className="testi-des">
                            <h5>Peter Clark</h5>
                            {/* <span>Founder Oxyzen</span> */}
                        </div>
                    </div>
                    {/* <!-- / END SINGLE TESTIMONIALS DESIGN AREA --> */}
                </div>
            </div>
        </div>
    </section>
  )
}
