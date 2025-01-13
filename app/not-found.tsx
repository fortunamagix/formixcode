import Image from "next/image";
import ErrorImg from "@/public/images/custom/404-error-img.png";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="error-area">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 offset-lg-3 text-center">
                <Image src={ErrorImg} alt="" />
                <h2>Something Went Wrong.</h2>
                <p>We apologize, but it seems like there`&apos;`s been an error. Our team has been notified, and we are working diligently to resolve the issue.</p>
                <p><Link className="theme-btn" href="/">Back to Home <i className="ri-arrow-right-up-line"></i></Link></p>
            </div>
        </div>
    </div>
</section>
  )
}
