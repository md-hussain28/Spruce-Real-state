import React from "react";
import { Property } from "../../../types";
import PropertyCard from "../PropertyCard";

interface SimilarPropertiesProps {
  properties: Property[];
  currentPropertyId: number;
}

const SimilarProperties: React.FC<SimilarPropertiesProps> = ({
  properties,
  currentPropertyId,
}) => {
  // Filter out the current property and limit to 3 similar properties
  const similarProperties = properties
    .filter((property) => property.id !== currentPropertyId)
    .slice(0, 3);

  if (similarProperties.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-neutral-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-spruce-dark mb-8">
          Similar <span className="text-gold">Properties</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {similarProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarProperties;
