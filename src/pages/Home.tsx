import Hero from "../components/home/Hero";
import FeaturedProperties from "../components/home/FeaturedProperties";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import LocationsSection from "../components/home/LocationsSection";
import TeamSection from "../components/home/TeamSection";
import BlogSection from "../components/home/BlogSection";
import ContactSection from "../components/home/ContactSection";
import CTASection from "../components/home/CTASection";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <AboutSection />
      <LocationsSection />
      <ServicesSection />
      <TestimonialsSection />
      <TeamSection />
      <BlogSection />
      <ContactSection />
      <CTASection />
    </>
  );
};

export default Home;
