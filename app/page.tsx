import AboutMe from "@/components/Pages/OnePages/AboutMe";
import Contact from "@/components/Pages/OnePages/Contact";
import Hero from "@/components/Pages/OnePages/Hero";
import RecentWork from "@/components/Pages/OnePages/RecentWork";
import Services from "@/components/Pages/OnePages/Services";
import Stories from "@/components/Pages/OnePages/Stories";
import Testimonials from "@/components/Pages/OnePages/Testimonials";
import Header from "@/components/Shared/Header";
import MobileMenu from "@/components/Shared/MobileMenu";
import SmoothScroll from "@/components/Shared/SmoothScroll";

export default function page() {
  return (
    <>
        {/* <SmoothScroll /> */}
        <Header />
        <MobileMenu />
        <Hero />
        <Services />
        <RecentWork />
        <Testimonials />
        <Stories />
        <AboutMe />
        <Contact />
    </>
  );
}
