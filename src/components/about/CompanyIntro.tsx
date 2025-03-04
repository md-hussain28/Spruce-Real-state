// components/about/CompanyIntro.tsx
import React from "react";
import { Home } from "lucide-react";

const CompanyIntro: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Luxury Property"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Home className="text-gold w-8 h-8" />
                <div>
                  <p className="text-spruce-dark font-bold">Since 2010</p>
                  <p className="text-spruce-light text-sm">
                    Trusted Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-spruce-dark mb-6">
              Leading Luxury Real Estate in{" "}
              <span className="text-gold">Africa</span>
            </h2>
            <p className="text-spruce-light mb-6">
              Spruce & Settle has been at the forefront of luxury real estate
              across Africa for over a decade. Our commitment to excellence and
              deep understanding of both local and international markets has
              made us the preferred choice for discerning clients.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-2xl font-bold text-gold mb-2">1200+</h4>
                <p className="text-spruce-dark">Properties Sold</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gold mb-2">98%</h4>
                <p className="text-spruce-dark">Client Satisfaction</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gold mb-2">5</h4>
                <p className="text-spruce-dark">Countries</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gold mb-2">150+</h4>
                <p className="text-spruce-dark">Expert Agents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
