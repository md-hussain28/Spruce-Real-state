// components/blog/BlogSidebar.tsx
import React from "react";
import { Search, Tag } from "lucide-react";

const BlogSidebar: React.FC = () => {
  const categories = [
    { name: "Market Trends", count: 12 },
    { name: "Luxury Living", count: 8 },
    { name: "Investment Tips", count: 15 },
    { name: "Property Guide", count: 10 },
    { name: "Interior Design", count: 6 },
  ];

  const tags = [
    "Luxury Homes",
    "Real Estate",
    "Investment",
    "Architecture",
    "Interior Design",
    "Market Analysis",
    "Property Tips",
    "African Real Estate",
  ];

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-serif font-bold text-spruce-dark mb-4">
          Search
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-md focus:outline-none focus:border-gold"
          />
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spruce-light"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-serif font-bold text-spruce-dark mb-4">
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <a
                href="#"
                className="flex justify-between items-center text-spruce-light hover:text-gold transition-colors"
              >
                {category.name}
                <span className="bg-neutral-100 px-2 py-1 rounded-full text-sm">
                  {category.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-serif font-bold text-spruce-dark mb-4">
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <a
              key={tag}
              href="#"
              className="px-3 py-1 bg-neutral-100 text-spruce-light rounded-full text-sm hover:bg-gold hover:text-white transition-colors"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
