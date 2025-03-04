import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-right">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-spruce-dark mb-6">
              About <span className="text-gold">Spruce & Settle</span> Realtors
            </h2>

            <p className="text-spruce mb-6">
              Founded with a vision to transform the luxury real estate market
              in Africa, Spruce & Settle Realtors has established itself as the
              premier choice for discerning clients seeking exceptional
              properties in Nigeria and South Africa.
            </p>

            <p className="text-spruce mb-6">
              Our team of experienced professionals combines deep local
              knowledge with international expertise to provide unparalleled
              service in every aspect of real estate transactions.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircle
                  className="text-gold mr-2 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-spruce">
                  Expert knowledge of luxury markets in Nigeria and South Africa
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  className="text-gold mr-2 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-spruce">
                  Personalized service tailored to each client's unique needs
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  className="text-gold mr-2 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-spruce">
                  Exclusive access to off-market properties and investment
                  opportunities
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  className="text-gold mr-2 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-spruce">
                  Comprehensive support throughout the entire transaction
                  process
                </p>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-block bg-spruce hover:bg-spruce-dark text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Learn More About Us
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    alt="Luxury property"
                    className="rounded-lg shadow-lg w-full h-48 object-cover animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    alt="Luxury interior"
                    className="rounded-lg shadow-lg w-full h-64 object-cover animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    alt="Luxury home"
                    className="rounded-lg shadow-lg w-full h-64 object-cover animate-fade-in"
                    style={{ animationDelay: "0.3s" }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    alt="Modern architecture"
                    className="rounded-lg shadow-lg w-full h-48 object-cover animate-fade-in"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-pattern rounded-lg border-4 border-white shadow-lg"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold rounded-lg border-4 border-white shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
