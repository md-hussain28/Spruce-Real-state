// components/blog/NewsletterCTA.tsx
import React from "react";
import { Mail } from "lucide-react";

const NewsletterCTA: React.FC = () => {
  return (
    <section className="bg-spruce-dark py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-neutral-cream mb-8">
            Stay updated with the latest insights in luxury real estate and
            market trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button className="bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-md transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
