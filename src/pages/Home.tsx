import Hero from "../components/Hero";
import FeaturedProperties from "../components/FeaturedProperties";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import LocationsSection from "../components/LocationsSection";
import TeamSection from "../components/TeamSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import CTASection from "../components/CTASection";

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
