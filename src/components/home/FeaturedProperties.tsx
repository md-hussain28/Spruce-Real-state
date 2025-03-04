import React from "react";
import { featuredProperties } from "../../data/data";
import { Bed, Bath, Move, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
const FeaturedProperties: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-spruce-dark mb-4">
            Featured <span className="text-gold">Properties</span>
          </h2>
          <p className="max-w-2xl mx-auto text-spruce">
            Discover our handpicked selection of the most exceptional properties
            across Nigeria and South Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-spruce-dark px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-spruce-dark text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.country}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-serif font-semibold text-spruce-dark">
                    {property.title}
                  </h3>
                  <p className="text-gold font-bold">{property.price}</p>
                </div>

                <div className="flex items-center text-spruce mb-4">
                  <MapPin size={16} className="mr-1" />
                  <p className="text-sm">{property.location}</p>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {property.description}
                </p>

                <div className="flex justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center text-spruce">
                    <Bed size={18} className="mr-1" />
                    <span className="text-sm">{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center text-spruce">
                    <Bath size={18} className="mr-1" />
                    <span className="text-sm">{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center text-spruce">
                    <Move size={18} className="mr-1" />
                    <span className="text-sm">{property.area}</span>
                  </div>
                </div>

                <Link
                  to={`/properties/${property.id}`}
                  className="block text-center bg-spruce hover:bg-spruce-dark text-white mt-6 py-2 rounded transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/properties"
            className="inline-block bg-gold hover:bg-gold-dark text-spruce-dark px-8 py-3 rounded-md font-medium transition-colors"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
