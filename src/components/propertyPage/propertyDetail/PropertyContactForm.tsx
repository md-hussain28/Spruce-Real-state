import React from 'react';
import { Mail, Phone, Calendar } from 'lucide-react';

interface PropertyContactFormProps {
  propertyTitle: string;
  agentName: string;
  agentImage: string;
}

const PropertyContactForm: React.FC<PropertyContactFormProps> = ({ 
  propertyTitle, 
  agentName, 
  agentImage 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-spruce-dark p-6">
        <h3 className="text-xl font-serif font-semibold text-white mb-4">
          Interested in this property?
        </h3>
        
        <div className="flex items-center">
          <img 
            src={agentImage} 
            alt={agentName} 
            className="w-16 h-16 rounded-full object-cover border-2 border-gold mr-4"
          />
          <div>
            <p className="text-gold font-medium">{agentName}</p>
            <p className="text-neutral-cream text-sm">Property Consultant</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-spruce font-medium mb-1">
              Your Name
            </label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-spruce font-medium mb-1">
              Email Address
            </label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-spruce font-medium mb-1">
              Phone Number
            </label>
            <input 
              type="tel" 
              id="phone" 
              className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-spruce font-medium mb-1">
              Message
            </label>
            <textarea 
              id="message" 
              rows={4} 
              className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              placeholder="I'm interested in this property..."
              defaultValue={`I'm interested in ${propertyTitle}. Please provide more information.`}
            ></textarea>
          </div>
          
          <div className="space-y-3 mb-4">
            <button 
              type="submit" 
              className="w-full bg-gold hover:bg-gold-dark text-spruce-dark px-4 py-2 rounded flex items-center justify-center font-medium transition-colors"
            >
              <Mail size={18} className="mr-2" />
              Send Message
            </button>
            
            <button 
              type="button" 
              className="w-full bg-spruce hover:bg-spruce-dark text-white px-4 py-2 rounded flex items-center justify-center font-medium transition-colors"
            >
              <Phone size={18} className="mr-2" />
              Call Agent
            </button>
            
            <button 
              type="button" 
              className="w-full border border-spruce text-spruce hover:bg-spruce-light/10 px-4 py-2 rounded flex items-center justify-center font-medium transition-colors"
            >
              <Calendar size={18} className="mr-2" />
              Schedule Viewing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyContactForm;