import Image from "next/image";
import Link from "next/link";
import work1 from "@/public/images/projects/webp_recent-01-reso.webp";
import work2 from "@/public/images/projects/webp_recent-02-cappa.webp";
import work3 from "@/public/images/projects/webp_recent-03-ecomus.webp";
import work4 from "@/public/images/projects/webp_recent-04-modave.webp";
import work5 from "@/public/images/projects/work5.jpg";
import work6 from "@/public/images/projects/work6.jpg";

export default function RecentWork() {
  return (
    <div className="projects-area" id="projects">
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="section-title section-white-title wow fadeInUp delay-0-2s text-center">
            <h2>Customize templates</h2>
            <h3>OR</h3>
            <h4>Any templates you like </h4>
            <br />
            <p>I provide tailored solutions,<br /> whether you need WordPress for ease of use or <br />cutting-edge frameworks like Next.js for performance and scalability.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row g-4 portfolio-grid">
          {/* <!-- START SINGLE PORTFOLIO DESIGN AREA --> */}
          <div className="col-md-6 col-xl-6 portfolio-item category-1">
            <Link href="https://resonance-next-app.vercel.app/" target="_blank" className="work-popup">
              <div className="portfolio-box">
                {/* <!-- Image --> */}
                <Image className="workimges" src={work1} alt="" data-rjs="2" />
                {/* <!-- Category --> */}
                <span className="portfolio-category">Design</span>
                {/* <!-- Caption --> */}
                <div className="portfolio-caption">
                  <h1>RESO</h1>
                </div>
              </div>
            </Link>
          </div>
          {/* <!-- // END SINGLE PORTFOLIO DESIGN AREA --> */}
          {/* <!-- START SINGLE PORTFOLIO DESIGN AREA --> */}
          <div className="col-md-6 col-xl-6 portfolio-item category-2">
            <Link href="https://duruthemes.com/demo/html/cappa/" target="_blank" className="work-popup">
              <div className="portfolio-box">
                {/* <!-- Image --> */}
                <Image className="workimges" src={work2} alt="" data-rjs="2" />
                {/* <!-- Category --> */}
                <span className="portfolio-category">luxury</span>
                {/* <!-- Caption --> */}
                <div className="portfolio-caption">
                  <h1>Cappa</h1>
                </div>
              </div>
            </Link>
          </div>
          {/* <!-- // END SINGLE PORTFOLIO DESIGN AREA --> */}
          {/* <!-- START SINGLE PORTFOLIO DESIGN AREA --> */}
          <div className="col-md-6 col-xl-6 portfolio-item category-2">
            <Link href="https://ecomusnext-themesflat.vercel.app/home-multi-brand" target="_blank" className="popup-youtube">
              <div className="portfolio-box">
                {/* <!-- Image --> */}
                <Image className="workimges" src={work3} alt="" data-rjs="2" />
                {/* <!-- Category --> */}
                <span className="portfolio-category">E-commerse</span>
                {/* <!-- Caption --> */}
                <div className="portfolio-caption">
                  <h1>Ecomus</h1>
                </div>
              </div>
            </Link>
          </div>
          {/* <!-- // END SINGLE PORTFOLIO DESIGN AREA --> */}
          {/* <!-- START SINGLE PORTFOLIO DESIGN AREA --> */}
          <div className="col-md-6 col-xl-6 portfolio-item category-1">
            <Link href="https://modavenextjs.vercel.app/" className="work-popup" target="_blank">
              <div className="portfolio-box">
                {/* <!-- Image --> */}
                <Image className="workimges" src={work4} alt="" data-rjs="2" />
                {/* <!-- Category --> */}
                <span className="portfolio-category">Branding</span>
                {/* <!-- Caption --> */}
                <div className="portfolio-caption">
                  <h1>modave</h1>
                </div>
              </div>
            </Link>
          </div>
          {/* <!-- // END SINGLE PORTFOLIO DESIGN AREA --> */}
          {/* <!-- START SINGLE PORTFOLIO DESIGN AREA --> */}
          <div className="col-md-6 col-xl-6 portfolio-item category-2">
            <Link href="/singleproject" className="work-popup">
              <div className="portfolio-box">
                {/* <!-- Image --> */}
                <Image className="workimges" src={work5} alt="" data-rjs="2" />
                {/* <!-- Category --> */}
                <span className="portfolio-category">Mockup</span>
                {/* <!-- Caption --> */}
                <div className="portfolio-caption">
                  <h1>Orange Rose Flower</h1>
                </div>
              </div>
            </Link>
          </div>
          {/* <!-- // END SINGLE PORTFOLIO DESIGN AREA --> */}
          {/* <!-- START SINGLE PORTFOLIO DESIGN AREA --> */}
          <div className="col-md-6 col-xl-6 portfolio-item category-2">
            <Link href="/singleproject" className="work-popup">
              <div className="portfolio-box">
                {/* <!-- Image --> */}
                <Image className="workimges" src={work6} alt="" data-rjs="2" />
                {/* <!-- Category --> */}
                <span className="portfolio-category">logo</span>
                {/* <!-- Caption --> */}
                <div className="portfolio-caption">
                  <h1>Rose Flower</h1>
                </div>
              </div>
            </Link>
          </div>
          {/* <!-- // END SINGLE PORTFOLIO DESIGN AREA --> */}
        </div>
      </div>
    </div>
  );
}
