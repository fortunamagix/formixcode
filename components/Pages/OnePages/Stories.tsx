import Image from 'next/image'
import Link from 'next/link'
import blog2 from '@/public/images/blog/webp_Coming_soon.webp'
import blog3 from '@/public/images/blog/webp_Coming_soon.webp'
import blog1 from '@/public/images/blog/webp_Coming_soon.webp'

export default function Stories() {
  return (
    <section id="blog" className="blog-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-title section-white-title wow fadeInUp delay-0-2s">
                        <h2>Demo</h2>
                    </div>
                </div>
            </div>
            {/* <!-- START SINGLE VLOG DESIGN AREA --> */}
            <div className="row ">
                <div className="col-md-6 col-lg-4">
                    <div className="blog-post-box">
                        <div className="blog-post-img">
                            <Link href="#">
                                <Image className='bimages' src={blog1} alt="" />
                            </Link>
                            <div className="blog-post-category">
                                <Link href="#">Soon</Link>
                            </div>
                        </div>
                        <div className="blog-post-caption ">
                            {/* <h3>Posted on Aug 28</h3> */}
                            <h2><Link className="link-decoration d-flex justify-content-center d-md-block" href="#">Real Estate Listing</Link></h2>
                            <div className="d-flex justify-content-center d-md-block">
                                <Link className="theme-btn" href="#">SOON! <i className="ri-arrow-right-line"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
               <div className="col-md-6 col-lg-4">
                    <div className="blog-post-box">
                        <div className="blog-post-img">
                            <Link href="#">
                                <Image className='bimages' src={blog2} alt="" />
                            </Link>
                            <div className="blog-post-category">
                                <Link href="#">Soon</Link>
                            </div>
                        </div>
                        {/* <div className="blog-post-caption">
                            <h3>Posted on Aug 28</h3>
                            <h2><Link className="link-decoration" href="#">E-COMMERCE</Link></h2>
                            <Link className="theme-btn" href="#">SOON!<i className="ri-arrow-right-line"></i></Link>
                        </div>  */}
                        <div className="blog-post-caption">
    {/* <h3>Posted on Aug 28</h3> */}
    <h2><Link className="link-decoration d-flex justify-content-center d-md-block" href="#">E-COMMERCE</Link></h2>
    <div className="d-flex justify-content-center d-md-block">
        <Link className="theme-btn" href="#">SOON!<i className="ri-arrow-right-line"></i></Link>
    </div>
</div>
                       
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="blog-post-box">
                        <div className="blog-post-img">
                            <Link href="#">
                                <Image className='bimages' src={blog3} alt="" />
                            </Link>
                            <div className="blog-post-category">
                                
                                <Link href="#">Soon</Link>
                            </div>
                        </div>
                        <div className="blog-post-caption">
                            {/* <h3>Posted on Aug 28</h3> */}
                            <h2><Link className="link-decoration d-flex justify-content-center d-md-block" href="#">MORE!</Link></h2>
                            <div className="d-flex justify-content-center d-md-block">
                                <Link className="theme-btn" href="#">SOON!<i className="ri-arrow-right-line"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- // END SINGLE VLOG DESIGN AREA --> */}
        </div>
    </section>
  )
}
