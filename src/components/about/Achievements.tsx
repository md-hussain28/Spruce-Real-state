// components/about/Achievements.tsx
import React from "react";
import { Award, Building, Users2, Gem } from "lucide-react";

interface Achievement {
  icon: React.ReactNode;
  number: string;
  label: string;
  description: string;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      icon: <Award className="w-12 h-12 text-gold" />,
      number: "15+",
      label: "Years of Excellence",
      description: "Leading the luxury real estate market since 2010",
    },
    {
      icon: <Building className="w-12 h-12 text-gold" />,
      number: "$2B+",
      label: "Property Sales",
      description: "Total value of properties sold across Africa",
    },
    {
      icon: <Users2 className="w-12 h-12 text-gold" />,
      number: "5000+",
      label: "Happy Clients",
      description: "Satisfied clients across multiple countries",
    },
    {
      icon: <Gem className="w-12 h-12 text-gold" />,
      number: "250+",
      label: "Luxury Properties",
      description: "Exclusive luxury properties in prime locations",
    },
  ];

  return (
    <section className="py-20 bg-spruce-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our <span className="text-gold">Achievements</span>
          </h2>
          <p className="text-neutral-cream max-w-2xl mx-auto">
            A decade of excellence in luxury real estate, creating lasting value
            for our clients across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-spruce p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">{achievement.icon}</div>
              <h3 className="text-3xl font-bold text-gold mb-2">
                {achievement.number}
              </h3>
              <h4 className="text-xl font-serif font-semibold mb-2">
                {achievement.label}
              </h4>
              <p className="text-neutral-cream">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
