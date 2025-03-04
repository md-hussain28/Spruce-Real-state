import React from "react";
import { services } from "../../data/data";
import { Link } from "react-router-dom";
import { Home, Key, TrendingUp, Building, MapPin, Layout } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "home":
      return <Home size={24} className="text-gold" />;
    case "key":
      return <Key size={24} className="text-gold" />;
    case "trending-up":
      return <TrendingUp size={24} className="text-gold" />;
    case "building":
      return <Building size={24} className="text-gold" />;
    case "map-pin":
      return <MapPin size={24} className="text-gold" />;
    case "layout":
      return <Layout size={24} className="text-gold" />;
    default:
      return <Home size={24} className="text-gold" />;
  }
};

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-spruce-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our <span className="text-gold">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-cream">
            We offer a comprehensive range of real estate services tailored to
            meet the needs of our discerning clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-spruce p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-spruce-dark rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {getIcon(service.icon)}
              </div>

              <h3 className="text-xl font-serif font-semibold mb-3 text-gold">
                {service.title}
              </h3>

              <p className="text-neutral-cream mb-4">{service.description}</p>

              <Link
                to={`/services#${service.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="text-gold hover:text-gold-light font-medium inline-flex items-center transition-colors"
              >
                Learn More
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block bg-gold hover:bg-gold-dark text-spruce-dark px-8 py-3 rounded-md font-medium transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
