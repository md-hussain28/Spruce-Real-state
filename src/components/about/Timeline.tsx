// components/about/Timeline.tsx
import React from "react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const Timeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      year: "2010",
      title: "Company Founded",
      description:
        "Spruce & Settle was established in Lagos, Nigeria, with a vision to transform luxury real estate in Africa.",
    },
    {
      year: "2013",
      title: "South African Expansion",
      description:
        "Expanded operations to South Africa, opening offices in Cape Town and Johannesburg.",
    },
    {
      year: "2015",
      title: "Digital Innovation",
      description:
        "Launched innovative digital platforms for virtual property tours and online transactions.",
    },
    {
      year: "2018",
      title: "Award Recognition",
      description:
        "Received multiple international awards for excellence in luxury real estate services.",
    },
    {
      year: "2020",
      title: "Pan-African Growth",
      description:
        "Extended our presence to Kenya, Ghana, and Morocco, becoming a truly pan-African luxury real estate leader.",
    },
    {
      year: "2023",
      title: "Sustainability Initiative",
      description:
        "Launched our green luxury initiative, focusing on sustainable and eco-friendly luxury properties.",
    },
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-spruce-dark mb-4">
            Our <span className="text-gold">Journey</span>
          </h2>
          <p className="text-spruce-light max-w-2xl mx-auto">
            A timeline of significant milestones in our journey to becoming
            Africa's leading luxury real estate company.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Timeline Point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full"></div>

                {/* Content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                  }`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <span className="text-gold font-bold text-xl">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-spruce-dark mt-2 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-spruce-light">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
