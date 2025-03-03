import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Home,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-spruce-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-gold" />
              <div>
                <h3 className="text-xl font-serif font-bold">
                  <span className="text-gold">Spruce</span> & Settle
                </h3>
                <p className="text-xs text-neutral-cream -mt-1">
                  Luxury Realtors
                </p>
              </div>
            </div>
            <p className="text-neutral-cream">
              Providing exceptional real estate services across Nigeria and
              South Africa, specializing in luxury properties and investment
              opportunities.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-neutral-cream hover:text-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-cream hover:text-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-cream hover:text-gold transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-cream hover:text-gold transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-neutral-cream hover:text-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="text-neutral-cream hover:text-gold transition-colors"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-neutral-cream hover:text-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-cream hover:text-gold transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-neutral-cream hover:text-gold transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-neutral-cream hover:text-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-gold">
              Our Locations
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Lagos, Nigeria</h4>
                <p className="text-neutral-cream text-sm">
                  15 Victoria Island Boulevard
                </p>
                <p className="text-neutral-cream text-sm">Lagos, Nigeria</p>
              </div>
              <div>
                <h4 className="font-medium">Cape Town, South Africa</h4>
                <p className="text-neutral-cream text-sm">
                  42 Waterfront Drive
                </p>
                <p className="text-neutral-cream text-sm">
                  Cape Town, South Africa
                </p>
              </div>
              <div>
                <h4 className="font-medium">Johannesburg, South Africa</h4>
                <p className="text-neutral-cream text-sm">78 Sandton Avenue</p>
                <p className="text-neutral-cream text-sm">
                  Johannesburg, South Africa
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-gold">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-gold mt-1" />
                <div>
                  <p className="text-neutral-cream">
                    Nigeria: +234 123 456 7890
                  </p>
                  <p className="text-neutral-cream">
                    South Africa: +27 12 345 6789
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-gold mt-1" />
                <p className="text-neutral-cream">info@spruceandsettle.com</p>
              </div>
              <div className="pt-4">
                <h4 className="font-medium mb-2">
                  Subscribe to our newsletter
                </h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-3 py-2 text-spruce-dark rounded-l focus:outline-none w-full"
                  />
                  <button className="bg-gold hover:bg-gold-dark text-spruce-dark px-4 py-2 rounded-r transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-spruce-light mt-10 pt-6 text-center text-neutral-cream text-sm">
          <p>
            &copy; {new Date().getFullYear()} Md Saquib Hussain. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
