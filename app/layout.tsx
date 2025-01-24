import type { Metadata } from "next";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "@/public/css/style.css";
import "@/public/css/responsive.css";
import "@/public/css/blog.css";
import "@/public/css/spacing.css";
import Footer from "@/components/Shared/Footer";
import Preloader from "@/components/Shared/Preloader";
import ScrollTopUp from "@/components/Shared/ScrollTopUp";
import "@/../react-modal-video/scss/modal-video.scss";
import SmoothScroll from "@/components/Shared/SmoothScroll";
import SectionScroll from "@/components/Shared/SectionScroll";

export const metadata: Metadata = {
  title: "Formixcode Web Development",
  description: "Turn your ideas to business with AWS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ overflowX: "hidden", width: "100%", position: "relative" }}
      >
        <main
          style={{ overflowX: "hidden", width: "100%", position: "relative" }}
        >
          <Preloader />
          <SmoothScroll />
          <ScrollTopUp />
          <SectionScroll />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
