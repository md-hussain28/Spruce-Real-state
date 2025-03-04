// components/contact/ContactMap.tsx
import React from "react";

const ContactMap: React.FC = () => {
  return (
    <section className="h-[400px] relative">
      {/* Replace with your preferred map implementation (Google Maps, Mapbox, etc.) */}
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default ContactMap;
