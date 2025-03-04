import React from "react";
import {
  Home,
  Building2,
  Briefcase,
  Key,
  LineChart,
  Shield,
  Clock,
  Users,
} from "lucide-react";
import PageHeader from "../components/PageHeader";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServicesPage: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Home className="w-8 h-8 text-gold" />,
      title: "Luxury Property Sales",
      description:
        "Expert guidance in buying and selling premium properties across Africa's most prestigious locations.",
      features: [
        "Exclusive property listings",
        "Virtual property tours",
        "Personalized property matching",
        "Price negotiation expertise",
      ],
    },
    {
      icon: <Building2 className="w-8 h-8 text-gold" />,
      title: "Property Development",
      description:
        "Comprehensive development services from concept to completion for residential and commercial projects.",
      features: [
        "Project planning and management",
        "Architecture consultation",
        "Construction oversight",
        "Quality assurance",
      ],
    },
    {
      icon: <Briefcase className="w-8 h-8 text-gold" />,
      title: "Investment Advisory",
      description:
        "Strategic investment consulting for real estate portfolios and property investments.",
      features: [
        "Market analysis reports",
        "Investment strategy planning",
        "Portfolio diversification",
        "ROI optimization",
      ],
    },
    {
      icon: <Key className="w-8 h-8 text-gold" />,
      title: "Property Management",
      description:
        "Full-service property management solutions for luxury residential and commercial properties.",
      features: [
        "Tenant screening and management",
        "Maintenance coordination",
        "Financial reporting",
        "24/7 support",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: <LineChart className="w-6 h-6 text-gold" />,
      title: "Market Analysis",
      description:
        "In-depth market research and analysis to inform your property decisions",
    },
    {
      icon: <Shield className="w-6 h-6 text-gold" />,
      title: "Legal Support",
      description:
        "Comprehensive legal assistance for all property transactions",
    },
    {
      icon: <Clock className="w-6 h-6 text-gold" />,
      title: "24/7 Availability",
      description: "Round-the-clock support for all your real estate needs",
    },
    {
      icon: <Users className="w-6 h-6 text-gold" />,
      title: "Expert Team",
      description: "Access to experienced real estate professionals",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Our Services"
        breadcrumbs={[{ label: "Services", path: "/services" }]}
        backgroundImage="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Main Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-spruce-dark mb-4">
              Comprehensive <span className="text-gold">Real Estate</span>{" "}
              Services
            </h2>
            <p className="text-spruce-light max-w-3xl mx-auto">
              Experience unparalleled service in luxury real estate with our
              comprehensive suite of offerings tailored to meet your specific
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-xl font-serif font-bold text-spruce-dark ml-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-spruce-light mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-spruce">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-spruce-dark mb-4">
              Why Choose <span className="text-gold">Our Services</span>
            </h2>
            <p className="text-spruce-light max-w-2xl mx-auto">
              We go above and beyond to ensure your real estate experience is
              seamless and successful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="inline-block p-3 bg-neutral-50 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-spruce-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-spruce-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-spruce-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Experience Our Premium Services?
          </h2>
          <p className="text-neutral-cream max-w-2xl mx-auto mb-8">
            Contact us today to discuss how we can help you achieve your real
            estate goals.
          </p>
          <button className="bg-gold hover:bg-gold-dark text-spruce-dark px-8 py-3 rounded-md font-medium transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
