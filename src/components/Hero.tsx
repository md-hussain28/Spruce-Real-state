import React, { useState, useEffect } from "react";
import { Search, MapPin } from "lucide-react";

import { Link } from "react-router-dom";
const heroImages = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Background Image Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 animate-fade-in">
          <span className="text-gold">Luxury Living</span> in Africa's <br />
          Most Prestigious Locations
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8 animate-slide-up">
          Discover exceptional properties in Nigeria and South Africa with
          Spruce & Settle Realtors, your trusted partner in luxury real estate.
        </p>

        {/* Search Bar */}
        <div
          className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex items-center px-4 py-3">
                <MapPin className="text-gold-dark mr-2" size={20} />
                <select className="w-full bg-transparent text-spruce-dark focus:outline-none">
                  <option value="">Select Location</option>
                  <option value="lagos">Lagos, Nigeria</option>
                  <option value="abuja">Abuja, Nigeria</option>
                  <option value="cape-town">Cape Town, South Africa</option>
                  <option value="johannesburg">
                    Johannesburg, South Africa
                  </option>
                </select>
              </div>
            </div>
            <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex items-center px-4 py-3">
                <select className="w-full bg-transparent text-spruce-dark focus:outline-none">
                  <option value="">Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="estate">Estate</option>
                </select>
              </div>
            </div>
            <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex items-center px-4 py-3">
                <select className="w-full bg-transparent text-spruce-dark focus:outline-none">
                  <option value="">Price Range</option>
                  <option value="0-500000">$0 - $500,000</option>
                  <option value="500000-1000000">$500,000 - $1,000,000</option>
                  <option value="1000000-2000000">
                    $1,000,000 - $2,000,000
                  </option>
                  <option value="2000000-5000000">
                    $2,000,000 - $5,000,000
                  </option>
                  <option value="5000000+">$5,000,000+</option>
                </select>
              </div>
            </div>
            <div className="px-4 py-3 bg-gold hover:bg-gold-dark transition-colors">
              <button className="w-full flex items-center justify-center text-spruce-dark font-medium">
                <Search size={20} className="mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-10 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            to="/properties"
            className="bg-spruce hover:bg-spruce-dark text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            Explore Properties
          </Link>
          <Link
            to="/contact"
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            Contact an Agent
          </Link>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage ? "bg-gold w-6" : "bg-white/50"
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
