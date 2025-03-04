// pages/ContactPage.tsx
import React from "react";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import OfficeLocations from "../components/contact/OfficeLocations";
import ContactMap from "../components/contact/ContactMap";

const ContactPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        //subtitle="Get in touch with our luxury real estate experts"
        breadcrumbs={[{ label: "Contact", path: "/contact" }]}
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c"
      />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <OfficeLocations />
      <ContactMap />
    </div>
  );
};

export default ContactPage;
