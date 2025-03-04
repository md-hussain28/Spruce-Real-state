import React from "react";
import { Link } from "react-router-dom";

const locations = [
  {
    id: 1,
    name: "Lagos, Nigeria",
    description:
      "Discover luxury properties in Nigeria's vibrant economic hub.",
    imageUrl:
      "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Modern Lagos skyline with water view
  },
  {
    id: 2,
    name: "Abuja, Nigeria",
    description:
      "Explore premium real estate in Nigeria's elegant capital city.",
    imageUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Abuja city center with modern architecture
  },
  {
    id: 3,
    name: "Cape Town, South Africa",
    description:
      "Find your dream home in one of the world's most beautiful cities.",
    imageUrl:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Johannesburg, South Africa",
    description:
      "Invest in luxury properties in South Africa's economic powerhouse.",
    imageUrl:
      "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const LocationsSection: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-spruce-dark mb-4">
            Our <span className="text-gold">Locations</span>
          </h2>
          <p className="max-w-2xl mx-auto text-spruce">
            Explore luxury properties in the most prestigious locations across
            Nigeria and South Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className="group relative rounded-lg overflow-hidden shadow-md h-80 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={location.imageUrl}
                alt={location.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-serif font-semibold text-white mb-2">
                  {location.name}
                </h3>
                <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {location.description}
                </p>
                <Link
                  to={`/properties?location=${location.name
                    .split(",")[0]
                    .toLowerCase()}`}
                  className="text-gold hover:text-gold-light font-medium inline-flex items-center transition-colors"
                >
                  View Properties
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
