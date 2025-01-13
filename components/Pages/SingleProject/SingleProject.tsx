import Image from "next/image";
import work1 from "@/public/images/projects/work1.jpg";
import work2 from "@/public/images/projects/work2.jpg";
import work3 from "@/public/images/projects/work3.jpg";
import work4 from "@/public/images/projects/work4.jpg";
import Link from "next/link";

export default function SingleProject() {
  return (
    <>
      <section className="single-page-hero-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h2>Branch with Flowers</h2>
              <p>
                Fill out the form below to get in touch with me. I&apos;m always
                excited to hear about new opportunities and I&apos;ll do my best
                to respond to your inquiry within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="single-project-page-design">
        <div className="single-project-image">
            <Image className="imgauto" src={work2} alt="image" />
        </div>
        <div className="container pt-60 pb-40">
            <div className="row">
                <div className="col-lg-4">
                    {/* <!-- START SINGLE LEFT DESIGN AREA --> */}
                    <div className="single-project-page-left wow fadeInUp delay-0-2s">
                        <div className="single-info">
                            <p>Year</p>
                            <h3>2024</h3>
                        </div>
                        <div className="single-info">
                            <p>Client</p>
                            <h3>Bento Studio</h3>
                        </div>
                        <div className="single-info">
                            <p>Services</p>
                            <h3>Web Design</h3>
                        </div>
                        <div className="single-info">
                            <p>Project</p>
                            <h3>Creative</h3>
                        </div>
                    </div>
                    {/* <!-- / END SINGLE LEFT DESIGN AREA --> */}
                </div>
                {/* <!-- START SINGLE RIGHT DESIGN AREA --> */}
                <div className="col-lg-8">
                    <div className="single-project-page-right wow fadeInUp delay-0-4s">
                        <h2>
                            Description
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo.</p>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sourc consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                    </div>
                </div>
                {/* <!-- / END SINGLE RIGHT DESIGN AREA --> */}
            </div>
            {/* <!-- START SINGLE PAGE GALLERY DESIGN AREA --> */}
            <div className="row pt-60">
                <div className="col-lg-6">
                    <Link href="assets/images/projects/work1.jpg" className="work-popup">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <Image className="imgauto" src={work1} alt="gallery" />
                        </div>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link href="assets/images/projects/work2.jpg" className="work-popup">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image className="imgauto" src={work2} alt="gallery" />
                        </div>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link href="assets/images/projects/work3.jpg" className="work-popup">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <Image className="imgauto" src={work3} alt="gallery" />
                        </div>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link href="assets/images/projects/work4.jpg" className="work-popup">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image className="imgauto" src={work4} alt="gallery" />
                        </div>
                    </Link>
                </div>
            </div>
            {/* <!--  / END SINGLE PAGE GALLERY DESIGN AREA --> */}
        </div>
    </div>
    </>
  );
}
