// components/about/OurValues.tsx
import React from "react";
import { Target, Shield, Users, Star } from "lucide-react";

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const OurValues: React.FC = () => {
  const values: Value[] = [
    {
      icon: <Target className="w-8 h-8 text-gold" />,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our service, ensuring the highest standards in real estate.",
    },
    {
      icon: <Shield className="w-8 h-8 text-gold" />,
      title: "Integrity",
      description:
        "Trust and transparency form the foundation of our relationships with clients and partners.",
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "Client-Centric",
      description:
        "Our clients' needs and aspirations are at the heart of everything we do.",
    },
    {
      icon: <Star className="w-8 h-8 text-gold" />,
      title: "Innovation",
      description:
        "We embrace innovation and technology to provide cutting-edge real estate solutions.",
    },
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-spruce-dark mb-4">
            Our Core <span className="text-gold">Values</span>
          </h2>
          <p className="text-spruce-light max-w-2xl mx-auto">
            These principles guide our actions and define our commitment to
            delivering exceptional real estate services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-serif font-bold text-spruce-dark mb-2">
                {value.title}
              </h3>
              <p className="text-spruce-light">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
