// components/contact/OfficeLocations.tsx
import React from "react";
import { MapPin } from "lucide-react";

interface Office {
  city: string;
  country: string;
  address: string;
  image: string;
}

const offices: Office[] = [
  {
    city: "Lagos",
    country: "Nigeria",
    address: "15 Victoria Island Boulevard, Lagos",
    image:
      "https://images.unsplash.com/photo-1577214497975-d1d21910bd57?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", // Lagos skyline
  },
  {
    city: "Cape Town",
    country: "South Africa",
    address: "42 Waterfront Drive, Cape Town",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", // Cape Town with Table Mountain
  },
  {
    city: "Johannesburg",
    country: "South Africa",
    address: "78 Sandton Avenue, Johannesburg",
    image:
      "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", // Johannesburg skyline
  },
];

const OfficeLocations: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-spruce-dark mb-4">
            Our <span className="text-gold">Offices</span>
          </h2>
          <p className="text-spruce-light max-w-2xl mx-auto">
            Visit our offices across Africa for personalized luxury real estate
            services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={office.image}
                alt={`${office.city} Office`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-spruce-dark mb-2">
                  {office.city}, {office.country}
                </h3>
                <div className="flex items-start space-x-2 text-spruce-light">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <p>{office.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
