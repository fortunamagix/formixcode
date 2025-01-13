"use client";
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <section className="single-page-hero-area">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-lg-12">
              <h2>Privacy Policy</h2>
              <div className="breadcrumb__list">
                <span>
                  <Link href="/hometwo">Home</Link>
                </span>
                <span className="dvdr">
                  <CaretRight size={18} />
                </span>
                <span>Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="privacy-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>1. Information We Collect</h2>
              <ul>
                <li>
                  Personal Information: We may collect personal information such
                  as your name, email address, phone number, and other contact
                  information when you interact with us, sign up for our
                  services, or communicate with our team.
                </li>
                <li>
                  Usage Data: We automatically collect information about how you
                  interact with our website, products, and services, including
                  your IP address, browser type, device information, and pages
                  visited.
                </li>
                <li>
                  Cookies and Similar Technologies: We may use cookies, web
                  beacons, and other tracking technologies to collect
                  information about your browsing behavior and preferences on
                  our website.
                </li>
              </ul>
              <h2>2. How We Use Your Information</h2>
              <p>
                We may use the information we collect for the following
                purposes:
              </p>
              <ul>
                <li>To provide and improve our products and services.</li>
                <li>
                  To communicate with you about your account, inquiries, and
                  customer support requests.
                </li>
                <li>
                  To personalize your experience and deliver targeted content
                  and advertisements.
                </li>
                <li>
                  To analyze trends, track usage data, and improve the
                  performance and functionality of our website and services.
                </li>
                <li>
                  To comply with legal obligations and enforce our terms and
                  policies.
                </li>
              </ul>
              <h2>3. Information Sharing and Disclosure</h2>
              <p>
                We may share your information with third parties for the
                following purposes:
              </p>
              <ul>
                <li>
                  With service providers and partners who assist us in
                  delivering our products and services.
                </li>
                <li>
                  With legal authorities or government agencies in response to
                  lawful requests or to comply with legal obligations.
                </li>
                <li>
                  In connection with a business transaction, such as a merger,
                  acquisition, or sale of assets, where your information may be
                  transferred to the new entity.
                </li>
              </ul>
              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect the security and confidentiality of your personal
                information. However, no method of transmission over the
                internet or electronic storage is entirely secure, and we cannot
                guarantee absolute security.
              </p>
              <div>
                <h2>5. Your Rights and Choices</h2>
                <p>
                  You have the right to access, correct, or delete your personal
                  information. You may also opt-out of receiving promotional
                  communications from us by following the instructions provided
                  in such communications.
                </p>
              </div>
              <h2>6. Children&apos;s Privacy</h2>
              <p>
                Our website, products, and services are not intended for
                children under the age of 13. We do not knowingly collect
                personal information from children under 13 years of age. If you
                believe we have collected personal information from a child
                under 13, please contact us immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
