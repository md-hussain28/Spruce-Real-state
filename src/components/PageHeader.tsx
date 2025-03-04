import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  breadcrumbs: {
    label: string;
    path: string;
  }[];
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  breadcrumbs,
  backgroundImage = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
}) => {
  return (
    <div
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 animate-fade-in">
          {title}
        </h1>

        <div className="flex items-center text-white/80 animate-slide-up">
          <Link
            to="/"
            className="flex items-center hover:text-gold transition-colors"
          >
            <Home size={16} className="mr-1" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <ChevronRight size={16} className="mx-2" />
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gold">{crumb.label}</span>
              ) : (
                <Link
                  to={crumb.path}
                  className="hover:text-gold transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
