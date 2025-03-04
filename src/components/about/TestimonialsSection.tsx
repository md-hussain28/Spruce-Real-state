// components/about/TestimonialsSection.tsx
import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "James Wilson",
      position: "CEO",
      company: "Global Ventures Ltd",
      image: "https://example.com/james.jpg",
      quote:
        "Spruce & Settle provided an exceptional experience in helping us acquire our dream property in Cape Town. Their attention to detail and professional service exceeded our expectations.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Ahmed",
      position: "Director",
      company: "Investment Partners",
      image: "https://example.com/sarah.jpg",
      quote:
        "Working with Spruce & Settle was a game-changer for our property investment strategy. Their market knowledge and expertise are unmatched in the African luxury real estate sector.",
      rating: 5,
    },
    // Add more testimonials...
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-spruce-dark mb-4">
            Client <span className="text-gold">Testimonials</span>
          </h2>
          <p className="text-spruce-light max-w-2xl mx-auto">
            Hear what our valued clients have to say about their experience with
            Spruce & Settle.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-neutral-50 rounded-lg p-8 shadow-lg">
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <div className="flex mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-spruce-dark italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div>
                  <h4 className="text-xl font-serif font-bold text-spruce-dark">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gold">
                    {testimonials[currentIndex].position},{" "}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gold hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gold hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-6 bg-gold" : "bg-spruce-light"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
