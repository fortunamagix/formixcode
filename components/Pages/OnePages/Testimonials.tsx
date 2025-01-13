import Image from "next/image";
import author1 from "@/public/images/testimonials/author1.jpg";
import author2 from "@/public/images/testimonials/author2.jpg";
import author3 from "@/public/images/testimonials/author3.jpg";
import author4 from "@/public/images/testimonials/author4.jpg";
import author5 from "@/public/images/testimonials/author5.jpg";

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
                            Financial planners help people to knowledge in about how to
                            invest and in save their moneye the most efficient way eve plan
                            ners help people tioniio know ledige in about how.
                        </div>
                        <div className="author">
                            <Image src={author1} alt="Author" />
                        </div>
                        <div className="testi-des">
                            <h5>Zonathon Doe</h5>
                            <span>CEO & Founder X</span>
                        </div>
                    </div>
                    {/* <!-- / END SINGLE TESTIMONIALS DESIGN AREA --> */}
                </div>
                <div className="col-lg-6 col-md-6">
                    {/* <!-- START SINGLE TESTIMONIALS DESIGN AREA --> */}
                    <div className="testimonial-item wow fadeInUp delay-0-4s">
                        <div className="text">
                            Asian planners help people to knowledge in about how to
                            invest and in save their moneye the most efficient way eve plan
                            ners help people tioniio know ledige in about how.
                        </div>
                        <div className="author">
                            <Image src={author2} alt="Author" />
                        </div>
                        <div className="testi-des">
                            <h5>Martin Smith</h5>
                            <span>CEO & Founder Google</span>
                        </div>
                    </div>
                    {/* <!-- / END SINGLE TESTIMONIALS DESIGN AREA --> */}
                </div>
                <div className="col-lg-4 col-md-6">
                    {/* <!-- START SINGLE TESTIMONIALS DESIGN AREA --> */}
                    <div className="testimonial-item wow fadeInUp delay-0-6s">
                        <div className="text">
                            Hello planners help people to knowledge in about how to
                            invest and in save their moneye the most efficient way eve plan
                            ners help people tioniio know ledige in about how.
                        </div>
                        <div className="author">
                            <Image src={author3} alt="Author" />
                        </div>
                        <div className="testi-des">
                            <h5>Methail Dev</h5>
                            <span>Managing Director - Paydesk</span>
                        </div>
                    </div>
                    {/* <!-- / END SINGLE TESTIMONIALS DESIGN AREA --> */}
                </div>
                <div className="col-lg-4 col-md-6">
                    {/* <!-- START SINGLE TESTIMONIALS DESIGN AREA --> */}
                    <div className="testimonial-item wow fadeInUp delay-0-8s">
                        <div className="text">
                            Financial planners help people to knowledge in about how to
                            invest and in save their moneye the most efficient way eve plan
                            ners help people tioniio know ledige in about how.
                        </div>
                        <div className="author">
                            <Image src={author4} alt="Author" />
                        </div>
                        <div className="testi-des">
                            <h5>Eliana tweet</h5>
                            <span>CEO & Founder Tesla</span>
                        </div>
                    </div>
                    {/* <!-- / END SINGLE TESTIMONIALS DESIGN AREA --> */}
                </div>
                <div className="col-lg-4 col-md-6">
                    {/* <!-- START SINGLE TESTIMONIALS DESIGN AREA --> */}
                    <div className="testimonial-item wow fadeInUp delay-0-9s">
                        <div className="text">
                            Yelp planners help people to knowledge in about how to
                            invest and in save their moneye the most efficient way eve plan
                            ners help people tioniio know ledige in about how.
                        </div>
                        <div className="author">
                            <Image src={author5} alt="Author" />
                        </div>
                        <div className="testi-des">
                            <h5>Henry Clark</h5>
                            <span>Founder Oxyzen</span>
                        </div>
                    </div>
                    {/* <!-- / END SINGLE TESTIMONIALS DESIGN AREA --> */}
                </div>
            </div>
        </div>
    </section>
  )
}
