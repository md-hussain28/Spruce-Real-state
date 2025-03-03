import React, { useState, useEffect } from 'react';
import { properties } from '../data';
import { Property } from '../types';
import PageHeader from '../components/PageHeader';
import PropertyFilter, { FilterOptions } from '../components/PropertyFilter';
import PropertyCard from '../components/PropertyCard';
import { Grid3X3, List } from 'lucide-react';

const PropertiesPage: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;
  
  const applyFilters = (filters: FilterOptions) => {
    let result = [...properties];
    
    // Filter by location
    if (filters.location) {
      result = result.filter(property => 
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    // Filter by type
    if (filters.type) {
      result = result.filter(property => property.type === filters.type);
    }
    
    // Filter by price range
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(property => {
        const price = Number(property.price.replace(/[^0-9.-]+/g, ''));
        if (max) {
          return price >= min && price <= max;
        } else {
          return price >= min;
        }
      });
    }
    
    // Filter by bedrooms
    if (filters.bedrooms) {
      const minBeds = Number(filters.bedrooms);
      result = result.filter(property => property.bedrooms >= minBeds);
    }
    
    // Sort properties
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => {
          const priceA = Number(a.price.replace(/[^0-9.-]+/g, ''));
          const priceB = Number(b.price.replace(/[^0-9.-]+/g, ''));
          return priceA - priceB;
        });
        break;
      case 'price-desc':
        result.sort((a, b) => {
          const priceA = Number(a.price.replace(/[^0-9.-]+/g, ''));
          const priceB = Number(b.price.replace(/[^0-9.-]+/g, ''));
          return priceB - priceA;
        });
        break;
      case 'beds-desc':
        result.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
      case 'area-desc':
        result.sort((a, b) => {
          const areaA = Number(a.area.replace(/[^0-9.-]+/g, ''));
          const areaB = Number(b.area.replace(/[^0-9.-]+/g, ''));
          return areaB - areaA;
        });
        break;
      default:
        // Default sort by newest (id in descending order)
        result.sort((a, b) => b.id - a.id);
    }
    
    setFilteredProperties(result);
    setCurrentPage(1); // Reset to first page when filters change
  };
  
  // Calculate pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div>
      <PageHeader 
        title="Our Properties" 
        breadcrumbs={[{ label: 'Properties', path: '/properties' }]}
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <PropertyFilter 
            onFilter={applyFilters} 
            totalProperties={filteredProperties.length} 
          />
          
          <div className="flex justify-between items-center mb-6">
            <p className="text-spruce">
              Showing <span className="font-semibold">{indexOfFirstProperty + 1}-{Math.min(indexOfLastProperty, filteredProperties.length)}</span> of <span className="font-semibold">{filteredProperties.length}</span> properties
            </p>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => setViewMode('grid')} 
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gold text-white' : 'bg-gray-100 text-spruce'}`}
              >
                <Grid3X3 size={20} />
              </button>
              <button 
                onClick={() => setViewMode('list')} 
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-gold text-white' : 'bg-gray-100 text-spruce'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
          
          {filteredProperties.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-xl font-serif font-semibold text-spruce-dark mb-2">
                No Properties Found
              </h3>
              <p className="text-spruce mb-4">
                We couldn't find any properties matching your search criteria.
              </p>
              <button 
                onClick={() => applyFilters({
                  location: '',
                  type: '',
                  priceRange: '',
                  bedrooms: '',
                  sortBy: 'newest'
                })}
                className="bg-gold hover:bg-gold-dark text-spruce-dark px-6 py-2 rounded font-medium transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "space-y-6"
            }>
              {currentProperties.map((property, index) => (
                <PropertyCard 
                  key={property.id} 
                  property={property} 
                  index={index} 
                />
              ))}
            </div>
          )}
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <button 
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded ${
                    currentPage === 1 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-spruce text-white hover:bg-spruce-dark'
                  }`}
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-4 py-2 rounded ${
                      currentPage === number
                        ? 'bg-gold text-white'
                        : 'bg-gray-100 text-spruce hover:bg-gray-200'
                    }`}
                  >
                    {number}
                  </button>
                ))}
                
                <button 
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded ${
                    currentPage === totalPages 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-spruce text-white hover:bg-spruce-dark'
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;