// components/contact/ContactForm.tsx
import React, { useState } from "react";
import { Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  propertyInterest: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    propertyInterest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      propertyInterest: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-serif font-bold text-spruce-dark mb-6">
        Send Us a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-spruce-dark mb-2">Your Name*</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="block text-spruce-dark mb-2">
              Email Address*
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-gold"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-spruce-dark mb-2">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="block text-spruce-dark mb-2">Subject*</label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-gold"
            />
          </div>
        </div>

        <div>
          <label className="block text-spruce-dark mb-2">
            Property Interest
          </label>
          <select
            value={formData.propertyInterest}
            onChange={(e) =>
              setFormData({ ...formData, propertyInterest: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-gold"
          >
            <option value="">Select property type</option>
            <option value="luxury-homes">Luxury Homes</option>
            <option value="penthouses">Penthouses</option>
            <option value="apartments">Luxury Apartments</option>
            <option value="villas">Villas</option>
            <option value="commercial">Commercial Properties</option>
          </select>
        </div>

        <div>
          <label className="block text-spruce-dark mb-2">Your Message*</label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-gold"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gold hover:bg-gold-dark text-white py-3 rounded-md transition-colors flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              <Send size={20} />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
