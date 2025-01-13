import AboutTwo from "@/components/Pages/HomeTwo/AboutTwo";
import ContactTwo from "@/components/Pages/HomeTwo/ContactTwo";
import HeroTwo from "@/components/Pages/HomeTwo/HeroTwo";
import RecentWork from "@/components/Pages/OnePages/RecentWork";
import Services from "@/components/Pages/OnePages/Services";
import Stories from "@/components/Pages/OnePages/Stories";
import Testimonials from "@/components/Pages/OnePages/Testimonials";
import HeaderTwo from "@/components/Shared/HeaderTwo";
import MobileMenuTwo from "@/components/Shared/MobileMenuTwo";

export default function page() {
  return (
    <>
      <HeaderTwo />
      <MobileMenuTwo />
      <HeroTwo />
      <Services />
      <RecentWork />
      <Testimonials />
      <Stories />
      <AboutTwo />
      <ContactTwo />
    </>
  );
}
