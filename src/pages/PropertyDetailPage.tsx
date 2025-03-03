import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { properties } from "../data";
import { Property } from "../types";
import PageHeader from "../components/PageHeader";
import PropertyGallery from "../components/PropertyGallery";
import PropertyFeatures from "../components/PropertyFeatures";
import PropertyContactForm from "../components/PropertyContactForm";
import SimilarProperties from "../components/SimilarProperties";
import {
  Bed,
  Bath,
  Move,
  MapPin,
  Calendar,
  Share2,
  Heart,
  Printer,
} from "lucide-react";
import { Link } from "../components/Link";

// Mock property features
const getPropertyFeatures = (property: Property): string[] => {
  return [
    `${property.bedrooms} Bedrooms`,
    `${property.bathrooms} Bathrooms`,
    `${property.area} Living Area`,
    "Air Conditioning",
    "Central Heating",
    "High-Speed Internet",
    "Modern Kitchen",
    "Swimming Pool",
    "Garden",
    "Security System",
    "Parking Space",
    "Balcony/Terrace",
    "Gym",
    "Home Theater",
    "Wine Cellar",
    "Smart Home Technology",
  ];
};

// Mock property images
const getPropertyImages = (property: Property): string[] => {
  // Use the main image plus some additional ones
  return [
    property.imageUrl,
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  ];
};

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundProperty = properties.find((p) => p.id === Number(id));
      setProperty(foundProperty || null);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif font-bold text-spruce-dark mb-4">
          Property Not Found
        </h2>
        <p className="text-spruce mb-6">
          The property you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/properties"
          className="bg-gold hover:bg-gold-dark text-spruce-dark px-6 py-2 rounded font-medium transition-colors"
        >
          Browse All Properties
        </Link>
      </div>
    );
  }

  const propertyImages = getPropertyImages(property);
  const propertyFeatures = getPropertyFeatures(property);

  return (
    <div>
      <PageHeader
        title={property.title}
        breadcrumbs={[
          { label: "Properties", path: "/properties" },
          { label: property.title, path: `/properties/${property.id}` },
        ]}
        backgroundImage={property.imageUrl}
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex flex-wrap justify-between items-start mb-6">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-serif font-bold text-spruce-dark mb-2">
                      {property.title}
                    </h1>
                    <div className="flex items-center text-spruce mb-2">
                      <MapPin size={16} className="mr-1 text-gold" />
                      <p>
                        {property.location}, {property.country}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-spruce">
                      <span className="bg-gold text-spruce-dark px-3 py-1 rounded-full font-medium">
                        {property.type}
                      </span>
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        Listed 2 weeks ago
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0">
                    <p className="text-2xl font-bold text-gold mb-2">
                      {property.price}
                    </p>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded transition-colors">
                        <Share2 size={18} className="text-spruce" />
                      </button>
                      <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded transition-colors">
                        <Heart size={18} className="text-spruce" />
                      </button>
                      <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded transition-colors">
                        <Printer size={18} className="text-spruce" />
                      </button>
                    </div>
                  </div>
                </div>

                <PropertyGallery
                  images={propertyImages}
                  title={property.title}
                />

                <div className="flex justify-between border-t border-gray-100 pt-6 mt-6">
                  <div className="flex items-center text-spruce">
                    <Bed size={20} className="mr-2 text-gold" />
                    <div>
                      <p className="font-medium">{property.bedrooms}</p>
                      <p className="text-sm">Bedrooms</p>
                    </div>
                  </div>
                  <div className="flex items-center text-spruce">
                    <Bath size={20} className="mr-2 text-gold" />
                    <div>
                      <p className="font-medium">{property.bathrooms}</p>
                      <p className="text-sm">Bathrooms</p>
                    </div>
                  </div>
                  <div className="flex items-center text-spruce">
                    <Move size={20} className="mr-2 text-gold" />
                    <div>
                      <p className="font-medium">{property.area}</p>
                      <p className="text-sm">Living Area</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-serif font-semibold text-spruce-dark mb-4">
                  Property Description
                </h2>
                <p className="text-spruce mb-4">{property.description}</p>
                <p className="text-spruce mb-4">
                  This exceptional property offers the perfect blend of luxury,
                  comfort, and convenience. Situated in a prime location, it
                  provides easy access to major amenities while maintaining a
                  serene and private atmosphere.
                </p>
                <p className="text-spruce">
                  The property features high-end finishes throughout, including
                  marble countertops, hardwood floors, and custom cabinetry. The
                  spacious layout is perfect for both everyday living and
                  entertaining guests. Outside, you'll find beautifully
                  landscaped grounds that enhance the overall appeal of this
                  remarkable residence.
                </p>
              </div>

              <PropertyFeatures features={propertyFeatures} />

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-serif font-semibold text-spruce-dark mb-4">
                  Location
                </h2>
                <div className="h-80 rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7286885532443!2d3.4226242!3d6.4280555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e7648d%3A0x4d01e5de6b847fe!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1622824063281!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Property Location"
                  ></iframe>
                </div>
                <h3 className="font-medium text-spruce-dark mb-2">
                  Nearby Amenities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-gold/10 p-2 rounded mr-3">
                      <MapPin size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-spruce-dark">Shopping</p>
                      <p className="text-sm text-spruce">5 minutes drive</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gold/10 p-2 rounded mr-3">
                      <MapPin size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-spruce-dark">Schools</p>
                      <p className="text-sm text-spruce">10 minutes drive</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gold/10 p-2 rounded mr-3">
                      <MapPin size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-spruce-dark">Hospitals</p>
                      <p className="text-sm text-spruce">15 minutes drive</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gold/10 p-2 rounded mr-3">
                      <MapPin size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-spruce-dark">Airport</p>
                      <p className="text-sm text-spruce">30 minutes drive</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <PropertyContactForm
                propertyTitle={property.title}
                agentName="Nomvula Ndlovu"
                agentImage="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              />

              <div className="bg-white rounded-lg shadow-md p-6 mt-8">
                <h3 className="text-xl font-serif font-semibold text-spruce-dark mb-4">
                  Property Documents
                </h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center p-3 border border-gray-200 rounded hover:border-gold transition-colors"
                  >
                    <div className="bg-gold/10 p-2 rounded mr-3">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-spruce-dark">
                        Property Brochure
                      </p>
                      <p className="text-xs text-spruce">PDF, 2.4 MB</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-3 border border-gray-200 rounded hover:border-gold transition-colors"
                  >
                    <div className="bg-gold/10 p-2 rounded mr-3">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-spruce-dark">
                        Floor Plans
                      </p>
                      <p className="text-xs text-spruce">PDF, 1.8 MB</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-3 border border-gray-200 rounded hover:border-gold transition-colors"
                  >
                    <div className="bg-gold/10 p-2 rounded mr-3">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-spruce-dark">
                        Virtual Tour
                      </p>
                      <p className="text-xs text-spruce">MP4, 18.5 MB</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-pattern rounded-lg shadow-md p-6 mt-8">
                <h3 className="text-xl font-serif font-semibold text-spruce-dark mb-4">
                  Mortgage Calculator
                </h3>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="price"
                      className="block text-spruce font-medium mb-1"
                    >
                      Property Price ($)
                    </label>
                    <input
                      type="number"
                      id="price"
                      defaultValue={property.price.replace(/[^0-9.-]+/g, "")}
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="downPayment"
                      className="block text-spruce font-medium mb-1"
                    >
                      Down Payment (%)
                    </label>
                    <input
                      type="number"
                      id="downPayment"
                      defaultValue="20"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="interestRate"
                      className="block text-spruce font-medium mb-1"
                    >
                      Interest Rate (%)
                    </label>
                    <input
                      type="number"
                      id="interestRate"
                      defaultValue="3.5"
                      step="0.1"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="loanTerm"
                      className="block text-spruce font-medium mb-1"
                    >
                      Loan Term (years)
                    </label>
                    <input
                      type="number"
                      id="loanTerm"
                      defaultValue="30"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-dark text-spruce-dark px-4 py-2 rounded font-medium transition-colors"
                  >
                    Calculate
                  </button>
                </form>

                <div className="mt-4 p-4 bg-white rounded">
                  <p className="text-center text-spruce">
                    Estimated Monthly Payment:{" "}
                    <span className="font-bold text-gold">$4,250</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SimilarProperties
        properties={properties}
        currentPropertyId={property.id}
      />
    </div>
  );
};

export default PropertyDetailPage;
