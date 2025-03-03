import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface PropertyFilterProps {
  onFilter: (filters: FilterOptions) => void;
  totalProperties: number;
}

export interface FilterOptions {
  location: string;
  type: string;
  priceRange: string;
  bedrooms: string;
  sortBy: string;
}

const PropertyFilter: React.FC<PropertyFilterProps> = ({ onFilter, totalProperties }) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    location: '',
    type: '',
    priceRange: '',
    bedrooms: '',
    sortBy: 'newest'
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };

  const toggleAdvanced = () => {
    setIsAdvancedOpen(!isAdvancedOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-serif font-semibold text-spruce-dark">
          Find Your Perfect Property
        </h3>
        <p className="text-spruce">
          <span className="font-semibold">{totalProperties}</span> Properties Available
        </p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="location" className="block text-spruce text-sm font-medium mb-1">
              Location
            </label>
            <select
              id="location"
              name="location"
              value={filters.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            >
              <option value="">All Locations</option>
              <option value="lagos">Lagos, Nigeria</option>
              <option value="abuja">Abuja, Nigeria</option>
              <option value="cape-town">Cape Town, South Africa</option>
              <option value="johannesburg">Johannesburg, South Africa</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="type" className="block text-spruce text-sm font-medium mb-1">
              Property Type
            </label>
            <select
              id="type"
              name="type"
              value={filters.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            >
              <option value="">All Types</option>
              <option value="Sale">For Sale</option>
              <option value="Rent">For Rent</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="priceRange" className="block text-spruce text-sm font-medium mb-1">
              Price Range
            </label>
            <select
              id="priceRange"
              name="priceRange"
              value={filters.priceRange}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            >
              <option value="">Any Price</option>
              <option value="0-500000">$0 - $500,000</option>
              <option value="500000-1000000">$500,000 - $1,000,000</option>
              <option value="1000000-2000000">$1,000,000 - $2,000,000</option>
              <option value="2000000-5000000">$2,000,000 - $5,000,000</option>
              <option value="5000000+">$5,000,000+</option>
            </select>
          </div>
        </div>
        
        <div className="mb-4">
          <button 
            type="button"
            onClick={toggleAdvanced}
            className="flex items-center text-gold hover:text-gold-dark font-medium transition-colors"
          >
            <SlidersHorizontal size={16} className="mr-2" />
            {isAdvancedOpen ? 'Hide Advanced Filters' : 'Show Advanced Filters'}
          </button>
        </div>
        
        {isAdvancedOpen && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 animate-slide-up">
            <div>
              <label htmlFor="bedrooms" className="block text-spruce text-sm font-medium mb-1">
                Bedrooms
              </label>
              <select
                id="bedrooms"
                name="bedrooms"
                value={filters.bedrooms}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="sortBy" className="block text-spruce text-sm font-medium mb-1">
                Sort By
              </label>
              <select
                id="sortBy"
                name="sortBy"
                value={filters.sortBy}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              >
                <option value="newest">Newest</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
                <option value="beds-desc">Most Bedrooms</option>
                <option value="area-desc">Largest Area</option>
              </select>
            </div>
          </div>
        )}
        
        <div className="flex justify-end">
          <button 
            type="submit" 
            className="bg-gold hover:bg-gold-dark text-spruce-dark px-6 py-2 rounded flex items-center font-medium transition-colors"
          >
            <Search size={18} className="mr-2" />
            Search Properties
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyFilter;