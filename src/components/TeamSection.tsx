import React from 'react';
import { teamMembers } from '../data';
import { Link } from './Link';
import { Phone, Mail, Linkedin } from 'lucide-react';

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-spruce-dark mb-4">
            Meet Our <span className="text-gold">Team</span>
          </h2>
          <p className="max-w-2xl mx-auto text-spruce">
            Our team of experienced professionals is dedicated to providing exceptional service and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="bg-neutral-cream rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-serif font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-gold text-sm">{member.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-spruce mb-4 text-sm">
                  {member.bio}
                </p>
                
                <div className="flex space-x-3">
                  <a href="#" className="bg-spruce-dark hover:bg-spruce text-white p-2 rounded-full transition-colors">
                    <Phone size={16} />
                  </a>
                  <a href="#" className="bg-spruce-dark hover:bg-spruce text-white p-2 rounded-full transition-colors">
                    <Mail size={16} />
                  </a>
                  <a href="#" className="bg-spruce-dark hover:bg-spruce text-white p-2 rounded-full transition-colors">
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/about#team" 
            className="inline-block bg-gold hover:bg-gold-dark text-spruce-dark px-8 py-3 rounded-md font-medium transition-colors"
          >
            View Full Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;