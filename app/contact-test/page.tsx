"use client";
import { useEffect } from "react";
import Link from "next/link";
import "./contact-test.css";

export default function ContactTest() {
  useEffect(() => {
    // Load Tally script
    const loadTallyScript = async () => {
      try {
        if (typeof (window as any).Tally !== "undefined") {
          (window as any).Tally.loadEmbeds();
          return;
        }

        const script = document.createElement("script");
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;

        script.onload = () => {
          if (typeof (window as any).Tally !== "undefined") {
            (window as any).Tally.loadEmbeds();
          }
        };

        document.body.appendChild(script);
      } catch (error) {
        console.error("Error loading Tally form:", error);
      }
    };

    loadTallyScript();
  }, []);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/#contact" className="text-blue-500 hover:text-blue-700">
            ← Back to main contact page
          </Link>
          <h1 className="text-3xl font-bold mt-4 mb-8">
            Contact Form Test Page
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 form-container">
          <iframe
            data-tally-src="https://tally.so/embed/3Ev9vl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="620"
            frameBorder="0"
            title="Contact Form Test"
            style={{
              background: "transparent",
              border: "1px solid #eee",
              borderRadius: "8px",
              zIndex: 50,
              position: "relative",
              pointerEvents: "auto",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
