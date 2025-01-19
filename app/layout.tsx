import type { Metadata } from "next";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "@/public/css/style.css";
import "@/public/css/responsive.css";
import "@/public/css/blog.css";
import "@/public/css/spacing.css";
import Footer from "@/components/Shared/Footer";
import Preloader from "@/components/Shared/Preloader";
import MagicCursor from "@/components/Shared/MagicCursor";
import ScrollTopUp from "@/components/Shared/ScrollTopUp";
import "@/../react-modal-video/scss/modal-video.scss";
import SmoothScroll from "@/components/Shared/SmoothScroll";
import SectionScroll from "@/components/Shared/SectionScroll";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "formixcode web development",
  description: "turn your ideas to business with AWS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <Preloader />
          <MagicCursor />
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
