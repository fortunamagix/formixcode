import AboutMe from "@/components/Pages/OnePages/AboutMe";
import Contact from "@/components/Pages/OnePages/Contact";
import CustomizeTemplate from "@/components/Pages/OnePages/CustomizeTemplate";
import Hero from "@/components/Pages/OnePages/Hero";
import PricingCalculator from "@/components/Pages/OnePages/PricingCalculator";
import RecentWork from "@/components/Pages/OnePages/RecentWork";
import Services from "@/components/Pages/OnePages/Services";
import Stories from "@/components/Pages/OnePages/Stories";
import Testimonials from "@/components/Pages/OnePages/Testimonials";
import Header from "@/components/Shared/Header";
import MobileMenu from "@/components/Shared/MobileMenu";
import SmoothScroll from "@/components/Shared/SmoothScroll";
import WhyChooseUs from "@/components/Pages/OnePages/WhyChooseUs";

export default function page() {
  return (
    <>
        {/* <SmoothScroll /> */}
        <Header />
        <MobileMenu />
        <Hero />
        <Services />
        <CustomizeTemplate />
        <Testimonials />
        <PricingCalculator />
        <Stories />
        <WhyChooseUs />
        <Contact />
    </>
  );
}
