import React from 'react';
import { blogPosts } from '../data';
import { Link } from './Link';
import { Calendar, User } from 'lucide-react';

const BlogSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-spruce-dark mb-4">
            Latest from our <span className="text-gold">Blog</span>
          </h2>
          <p className="max-w-2xl mx-auto text-spruce">
            Stay informed with the latest insights, trends, and news from the African luxury real estate market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="bg-neutral-cream rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-spruce-dark px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-spruce-dark mb-3">
                  {post.title}
                </h3>
                
                <div className="flex items-center text-spruce text-sm mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`} 
                  className="text-gold hover:text-gold-dark font-medium inline-flex items-center transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/blog" 
            className="inline-block bg-spruce hover:bg-spruce-dark text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;