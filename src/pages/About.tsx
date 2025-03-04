// pages/AboutPage.tsx
import React from "react";
import PageHeader from "../components/PageHeader";
import CompanyIntro from "../components/about/CompanyIntro";
import OurValues from "../components/about/OurValues";
import TeamSection from "../components/about/TeamSection";
import Achievements from "../components/about/Achievements";
import Timeline from "../components/about/Timeline";
import TestimonialsSection from "../components/about/TestimonialsSection";

const AboutPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="About Us"
        breadcrumbs={[{ label: "About", path: "/about" }]}
        backgroundImage="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />
      <CompanyIntro />
      <OurValues />
      <Achievements />
      <TeamSection />
      <Timeline />
      <TestimonialsSection />
    </div>
  );
};

export default AboutPage;
