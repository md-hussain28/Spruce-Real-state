import React, { useState, useEffect } from "react";
import { testimonials } from "../../data/data";
import { Quote } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-pattern bg-neutral-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-spruce-dark mb-4">
            Client <span className="text-gold">Testimonials</span>
          </h2>
          <p className="max-w-2xl mx-auto text-spruce">
            Hear what our satisfied clients have to say about their experience
            with Spruce & Settle Realtors.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === currentIndex
                    ? "opacity-100"
                    : "opacity-0 absolute inset-0"
                }`}
              >
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 text-center">
                  <Quote className="mx-auto text-gold mb-6" size={48} />

                  <p className="text-lg md:text-xl text-spruce-dark italic mb-8">
                    "{testimonial.content}"
                  </p>

                  <div className="flex flex-col items-center">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gold mb-3"
                    />
                    <h4 className="font-serif font-semibold text-spruce-dark">
                      {testimonial.name}
                    </h4>
                    <p className="text-spruce text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-gold w-6" : "bg-spruce-light"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
