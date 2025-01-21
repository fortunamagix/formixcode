import Contact from "@/components/Pages/OnePages/Contact";
import CustomizeTemplate from "@/components/Pages/OnePages/CustomizeTemplate";
import Demo from "@/components/Pages/OnePages/Demo";
import Hero from "@/components/Pages/OnePages/Hero";
import PricingCalculator from "@/components/Pages/OnePages/PricingCalculator";
import Services from "@/components/Pages/OnePages/Services";
import Testimonials from "@/components/Pages/OnePages/Testimonials";
import WhyChooseUs from "@/components/Pages/OnePages/WhyChooseUs";
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
        <CustomizeTemplate />
        <Testimonials />
        <PricingCalculator />
        <Demo />
        <WhyChooseUs />
        <Contact />
    </>
  );
}
