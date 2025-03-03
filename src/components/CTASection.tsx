import React from 'react';
import { Link } from './Link';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-spruce-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 animate-fade-in">
            Ready to Find Your <span className="text-gold">Dream Property</span>?
          </h2>
          
          <p className="text-lg text-neutral-cream mb-8 animate-slide-up">
            Whether you're looking to buy, sell, or invest in luxury real estate in Nigeria or South Africa, 
            our team of experts is ready to guide you every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <Link 
              to="/contact" 
              className="bg-gold hover:bg-gold-dark text-spruce-dark px-8 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us Today
            </Link>
            <Link 
              to="/properties" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;