import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-gradient-to-b from-black/50 to-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Home
              className={`h-8 w-8 ${
                scrolled ? "text-spruce-dark" : "text-white"
              }`}
            />
            <div>
              <h1
                className={`text-xl font-serif font-bold ${
                  scrolled ? "text-spruce-dark" : "text-white"
                }`}
              >
                <span className="text-gold">Spruce</span> & Settle
              </h1>
              <p
                className={`text-xs ${
                  scrolled ? "text-spruce-light" : "text-neutral-200"
                } -mt-1`}
              >
                Luxury Realtors
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { to: "/", label: "Home" },
              { to: "/properties", label: "Properties" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`font-medium transition-colors ${
                  scrolled
                    ? "text-spruce-dark hover:text-gold-dark"
                    : "text-white hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className={`px-6 py-2 rounded transition-colors duration-300 ${
                scrolled
                  ? "bg-spruce-dark hover:bg-spruce text-white"
                  : "bg-gold hover:bg-gold-dark text-white"
              }`}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className={`md:hidden ${
              scrolled ? "text-spruce-dark" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {[
                { to: "/", label: "Home" },
                { to: "/properties", label: "Properties" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-spruce-dark hover:text-gold-dark font-medium transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded text-center transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
