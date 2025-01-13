"use client";
import { CaretRight } from "@phosphor-icons/react";
import Link from "next/link";

export default function Terms() {
  return (
    <>
      <section className="single-page-hero-area">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-lg-12">
              <h2>Terms & Conditions</h2>
              <div className="breadcrumb__list">
                <span>
                  <Link href="/hometwo">Home</Link>
                </span>
                <span className="dvdr">
                  <CaretRight size={18} />
                </span>
                <span>Terms & Conditions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="privacy-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>Scope of Services</h2>
              <p>
                Details about the types of personal information collected, such
                as names, addresses, contact information, and possibly sensitive
                information related to interior services or projects.
              </p>

              <h2>Client Responsibilities</h2>
              <p>
                Explanation of how personal information is used to maintain the
                security of interior agency systems, prevent unauthorized access
                or fraud, and protect against other unlawful activities.
                Assurance that personal information will only be collected and
                used for purposes consistent with individuals&apos; consent or
                preferences, where applicable, and in accordance with applicable
                privacy laws and regulations.
              </p>

              <h2>Project Timeline</h2>
              <p>
                Identification of the types of external entities with whom the
                agency may share personal information. This could include
                contractors, consultants, vendors, partner organizations, or
                other government agencies. Explanation of why the agency shares
                personal information with third parties. This might include
                facilitating services, conducting research or analysis,
                collaborating on projects, or complying with legal
                requirements.Clarity on the specific categories of personal
                information shared with third parties and limitations on the
                purposes for which it may be used by those parties.
              </p>

              <h2>Payment Terms</h2>
              <p>
                Measures taken to protect personal information from unauthorized
                access, disclosure, alteration, or destruction, which might
                include encryption, access controls, and regular security
                assessments. Information about the methods used to securely
                dispose of or anonymize personal information once it is no
                longer needed for its original purpose. This might include
                shredding physical documents, deleting electronic records, or
                anonymizing data to remove identifying information.
              </p>
            </div>
            <div className="col-lg-6">
              <h2>Termination of Services</h2>
              <p>
                Explanation of how personal information is used to maintain the
                security of interior agency systems, prevent unauthorized access
                or fraud, and protect against other unlawful activities.
                Assurance that personal information will only be collected and
                used for purposes consistent with individuals&apos; consent or
                preferences, where applicable, and in accordance with applicable
                privacy laws and regulations.
              </p>

              <h2>Change Orders</h2>
              <p>
                Details about the types of personal information collected, such
                as names, addresses, contact information, and possibly sensitive
                information related to interior services or projects.
              </p>

              <h2>Confidentiality</h2>
              <p>
                Measures taken to protect personal information from unauthorized
                access, disclosure, alteration, or destruction, which might
                include encryption, access controls, and regular security
                assessments.{" "}
              </p>

              <h2>Insurance and Liability</h2>
              <p>
                Explanation of how personal information is used to maintain the
                security of interior agency systems, prevent unauthorized access
                or fraud, and protect against other unlawful activities.
                Assurance that personal information will only be collected and
                used for purposes consistent with individuals&apos; consent or
                preferences, where applicable, and in accordance with applicable
                privacy laws and regulations.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                Details about the types of personal information collected, such
                as names, addresses, contact information, and possibly sensitive
                information related to interior services or projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
