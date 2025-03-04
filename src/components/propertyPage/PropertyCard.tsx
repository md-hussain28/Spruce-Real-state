import React from "react";
import { Bed, Bath, Move, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Property } from "../../types";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, index = 0 }) => {
  return (
    <div
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
        <button className="absolute bottom-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
          <Heart
            size={20}
            className="text-spruce-dark hover:text-gold transition-colors"
          />
        </button>
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
  );
};

export default PropertyCard;
