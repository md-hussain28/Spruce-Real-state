import React from 'react';
import { Check } from 'lucide-react';

interface PropertyFeaturesProps {
  features: string[];
}

const PropertyFeatures: React.FC<PropertyFeaturesProps> = ({ features }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-serif font-semibold text-spruce-dark mb-4">
        Property Features
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <Check size={18} className="text-gold mr-2 flex-shrink-0" />
            <span className="text-spruce">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyFeatures;