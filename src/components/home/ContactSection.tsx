import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-spruce-dark mb-4">
            Contact <span className="text-gold">Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-spruce">
            Get in touch with our team of experts to discuss your real estate
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 animate-slide-right">
            <h3 className="text-2xl font-serif font-semibold text-spruce-dark mb-6">
              Send Us a Message
            </h3>

            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-spruce font-medium mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-spruce font-medium mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-spruce font-medium mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-spruce font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Subject of your message"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-spruce font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-spruce hover:bg-spruce-dark text-white px-6 py-3 rounded font-medium transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col">
            <div className="bg-spruce-dark text-white rounded-lg shadow-md p-8 mb-8 animate-slide-up">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-gold">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-gold mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-neutral-cream">
                      Nigeria: +234 123 456 7890
                    </p>
                    <p className="text-neutral-cream">
                      South Africa: +27 12 345 6789
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-gold mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-neutral-cream">
                      info@spruceandsettle.com
                    </p>
                    <p className="text-neutral-cream">
                      sales@spruceandsettle.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-gold mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Locations</h4>
                    <p className="text-neutral-cream">
                      15 Victoria Island Boulevard, Lagos, Nigeria
                    </p>
                    <p className="text-neutral-cream">
                      42 Waterfront Drive, Cape Town, South Africa
                    </p>
                    <p className="text-neutral-cream">
                      78 Sandton Avenue, Johannesburg, South Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-lg shadow-md overflow-hidden flex-1 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7286885532443!2d3.4226242!3d6.4280555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e7648d%3A0x4d01e5de6b847fe!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1622824063281!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "250px" }}
                allowFullScreen
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
