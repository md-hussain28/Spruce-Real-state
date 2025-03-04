// components/blog/FeaturedPosts.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Clock, User } from "lucide-react";

interface FeaturedPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

const FeaturedPosts: React.FC = () => {
  const featuredPosts: FeaturedPost[] = [
    {
      id: "1",
      title: "The Future of Luxury Real Estate in Africa",
      excerpt:
        "Exploring emerging trends and opportunities in the African luxury property market",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Market Trends",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      id: "2",
      title: "The Future of Luxury Real Estate in Africa",
      excerpt:
        "Exploring emerging trends and opportunities in the African luxury property market",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Market Trends",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      id: "3",
      title: "The Future of Luxury Real Estate in Africa",
      excerpt:
        "Exploring emerging trends and opportunities in the African luxury property market",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Market Trends",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      id: "4",
      title: "The Future of Luxury Real Estate in Africa",
      excerpt:
        "Exploring emerging trends and opportunities in the African luxury property market",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Market Trends",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      id: "5",
      title: "The Future of Luxury Real Estate in Africa",
      excerpt:
        "Exploring emerging trends and opportunities in the African luxury property market",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Market Trends",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    // Add more featured posts...
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative h-96">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-gold text-white text-sm font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-2xl font-serif font-bold mb-2">
                    {post.title}
                  </h3>
                  <p className="text-neutral-200 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-neutral-200">
                    <User size={16} className="mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Clock size={16} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
