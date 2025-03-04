// components/blog/BlogGrid.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, User, ChevronLeft, ChevronRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

const BlogGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const blogPosts: BlogPost[] = [
    // Add your blog posts here...
  ];

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-white text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif font-bold text-spruce-dark mb-2 group-hover:text-gold transition-colors">
                {post.title}
              </h3>
              <p className="text-spruce-light mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm text-spruce-light">
                <User size={16} className="mr-1" />
                <span className="mr-4">{post.author}</span>
                <Clock size={16} className="mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-spruce text-white hover:bg-spruce-dark"
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`px-4 py-2 rounded ${
                currentPage === number
                  ? "bg-gold text-white"
                  : "bg-gray-100 text-spruce hover:bg-gray-200"
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-spruce text-white hover:bg-spruce-dark"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
