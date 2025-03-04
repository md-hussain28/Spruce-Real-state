// pages/BlogPage.tsx
import React from "react";
import PageHeader from "../components/PageHeader";
import FeaturedPosts from "../components/blog/FeaturedPosts";
import BlogGrid from "../components/blog/BlogGrid";
import BlogSidebar from "../components/blog/BlogSidebar";
import NewsletterCTA from "../components/blog/NewsletterCTA";

const BlogPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Real Estate Insights & News"
        breadcrumbs={[{ label: "Blog", path: "/blog" }]}
        backgroundImage="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />
      <FeaturedPosts />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <BlogGrid />
            </div>
            <div>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      <NewsletterCTA />
    </div>
  );
};

export default BlogPage;
