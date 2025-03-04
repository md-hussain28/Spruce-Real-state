// components/about/TeamSection.tsx
import React from "react";
import { Linkedin, Mail, Phone } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    email: string;
    phone: string;
  };
}

const TeamSection: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image: "https://example.com/sarah.jpg",
      bio: "With over 20 years of experience in luxury real estate, Sarah leads our vision of excellence.",
      social: {
        linkedin: "https://linkedin.com/in/sarah-johnson",
        email: "sarah@spruceandsettle.com",
        phone: "+234 123 456 7890",
      },
    },
    // Add more team members...
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-spruce-dark mb-4">
            Meet Our <span className="text-gold">Leadership</span> Team
          </h2>
          <p className="text-spruce-light max-w-2xl mx-auto">
            Our experienced team of professionals is dedicated to providing
            exceptional service and expertise in luxury real estate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-spruce-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-gold font-medium mb-3">{member.position}</p>
                <p className="text-spruce-light mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-spruce-light hover:text-gold transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-spruce-light hover:text-gold transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href={`tel:${member.social.phone}`}
                    className="text-spruce-light hover:text-gold transition-colors"
                  >
                    <Phone size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
