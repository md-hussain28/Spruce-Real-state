// // components/contact/ContactInfo.tsx
// import React from "react";
// import { Phone, Mail, Clock, MapPin } from "lucide-react";

// const ContactInfo: React.FC = () => {
//   return (
//     <div className="space-y-8">
//       <div>
//         <h2 className="text-2xl font-serif font-bold text-spruce-dark mb-6">
//           Contact Information
//         </h2>
//         <p className="text-spruce-light mb-8">
//           Our team of luxury real estate experts is here to assist you. Contact
//           us for personalized service and exclusive property opportunities.
//         </p>
//       </div>

//       <div className="space-y-6">
//         <div className="flex items-start space-x-4">
//           <div className="bg-gold/10 p-3 rounded-full">
//             <Phone className="w-6 h-6 text-gold" />
//           </div>
//           <div>
//             <h3 className="font-serif font-bold text-spruce-dark mb-1">
//               Phone
//             </h3>
//             <p className="text-spruce-light">Nigeria: +234 123 456 7890</p>
//             <p className="text-spruce-light">South Africa: +27 12 345 6789</p>
//           </div>
//         </div>

//         <div className="flex items-start space-x-4">
//           <div className="bg-gold/10 p-3 rounded-full">
//             <Mail className="w-6 h-6 text-gold" />
//           </div>
//           <div>
//             <h3 className="font-serif font-bold text-spruce-dark mb-1">
//               Email
//             </h3>
//             <p className="text-spruce-light">info@spruceandsettle.com</p>
//             <p className="text-spruce-light">sales@spruceandsettle.com</p>
//           </div>
//         </div>

//         <div className="flex items-start space-x-4">
//           <div className="bg-gold/10 p-3 rounded-full">
//             <Clock className="w-6 h-6 text-gold" />
//           </div>
//           <div>
//             <h3 className="font-serif font-bold text-spruce-dark mb-1">
//               Working Hours
//             </h3>
//             <p className="text-spruce-light">
//               Monday - Friday: 9:00 AM - 6:00 PM
//             </p>
//             <p className="text-spruce-light">Saturday: 10:00 AM - 4:00 PM</p>
//             <p className="text-spruce-light">Sunday: Closed</p>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-gray-200 pt-8 mt-8">
//         <h3 className="font-serif font-bold text-spruce-dark mb-4">
//           Follow Us
//         </h3>
//         <div className="flex space-x-4">
//           <a
//             href="#"
//             className="bg-spruce-dark hover:bg-gold text-white p-3 rounded-full transition-colors"
//           >
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//               {/* Add social media icons */}
//             </svg>
//           </a>
//           {/* Add more social media links */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactInfo;

// components/contact/ContactInfo.tsx
import React from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  PiggyBank,
} from "lucide-react";

const ContactInfo: React.FC = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://facebook.com/spruceandsettle",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/spruceandsettle",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com/spruceandsettle",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/company/spruceandsettle",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      url: "https://youtube.com/spruceandsettle",
    },
    {
      name: "Pinterest",
      icon: <PiggyBank className="w-5 h-5" />,
      url: "https://pinterest.com/spruceandsettle",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif font-bold text-spruce-dark mb-6">
          Contact Information
        </h2>
        <p className="text-spruce-light mb-8">
          Our team of luxury real estate experts is here to assist you. Contact
          us for personalized service and exclusive property opportunities.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="bg-gold/10 p-3 rounded-full">
            <Phone className="w-6 h-6 text-gold" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-spruce-dark mb-1">
              Phone
            </h3>
            <p className="text-spruce-light">Nigeria: +234 123 456 7890</p>
            <p className="text-spruce-light">South Africa: +27 12 345 6789</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-gold/10 p-3 rounded-full">
            <Mail className="w-6 h-6 text-gold" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-spruce-dark mb-1">
              Email
            </h3>
            <p className="text-spruce-light">info@spruceandsettle.com</p>
            <p className="text-spruce-light">sales@spruceandsettle.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-gold/10 p-3 rounded-full">
            <Clock className="w-6 h-6 text-gold" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-spruce-dark mb-1">
              Working Hours
            </h3>
            <p className="text-spruce-light">
              Monday - Friday: 9:00 AM - 6:00 PM
            </p>
            <p className="text-spruce-light">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-spruce-light">Sunday: Closed</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-gold/10 p-3 rounded-full">
            <MapPin className="w-6 h-6 text-gold" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-spruce-dark mb-1">
              Head Office
            </h3>
            <p className="text-spruce-light">15 Victoria Island Boulevard</p>
            <p className="text-spruce-light">Lagos, Nigeria</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8 mt-8">
        <h3 className="font-serif font-bold text-spruce-dark mb-4">
          Follow Us
        </h3>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-spruce-dark hover:bg-gold text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label={`Follow us on ${social.name}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Additional Trust Indicators */}
      <div className="bg-neutral-50 rounded-lg p-6 mt-8">
        <h3 className="font-serif font-bold text-spruce-dark mb-3">
          Why Choose Us
        </h3>
        <ul className="space-y-2 text-spruce-light">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
            24/7 Luxury Property Support
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
            Expert Real Estate Advisors
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
            Exclusive Property Portfolio
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
            Personalized Service
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
