import { Property, Testimonial, TeamMember, BlogPost, Service } from "./types";

export const featuredProperties: Property[] = [
  {
    id: 1,
    title: "Luxury Villa with Ocean View",
    location: "Lekki, Lagos",
    country: "Nigeria",
    price: "$1,250,000",
    bedrooms: 5,
    bathrooms: 6,
    area: "6,200 sq ft",
    description:
      "This stunning oceanfront villa offers panoramic views of the Atlantic Ocean. Features include a private pool, home theater, wine cellar, and smart home technology throughout.",
    imageUrl:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    featured: true,
    type: "Sale",
  },
  {
    id: 2,
    title: "Modern Penthouse in Cape Town",
    location: "Camps Bay, Cape Town",
    country: "South Africa",
    price: "$2,800,000",
    bedrooms: 4,
    bathrooms: 4.5,
    area: "4,500 sq ft",
    description:
      "Spectacular penthouse with floor-to-ceiling windows offering breathtaking views of Table Mountain and the ocean. Features include a private elevator, rooftop terrace, and designer finishes.",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    featured: true,
    type: "Sale",
  },
  {
    id: 3,
    title: "Elegant Colonial Estate",
    location: "Ikoyi, Lagos",
    country: "Nigeria",
    price: "$3,500,000",
    bedrooms: 7,
    bathrooms: 3,
    area: "10,000 sq ft",
    description:
      "Historic colonial mansion meticulously restored with modern amenities. Set on 2 acres of manicured gardens with a tennis court, swimming pool, and guest house.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    featured: true,
    type: "Sale",
  },
  {
    id: 4,
    title: "Luxury Apartment in Sandton",
    location: "Sandton, Johannesburg",
    country: "South Africa",
    price: "$8,500/month",
    bedrooms: 6,
    bathrooms: 3,
    area: "2,800 sq ft",
    description:
      "High-end apartment in the prestigious Sandton district with 24-hour security, concierge service, fitness center, and rooftop pool.",
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    featured: true,
    type: "Rent",
  },
];

export const properties: Property[] = [
  ...featuredProperties,
  {
    id: 5,
    title: "Waterfront Estate",
    location: "Victoria Island, Lagos",
    country: "Nigeria",
    price: "$4,200,000",
    bedrooms: 6,
    bathrooms: 7,
    area: "8,500 sq ft",
    description:
      "Magnificent waterfront property with private dock, infinity pool, and panoramic lagoon views. Features smart home technology and sustainable design elements.",
    imageUrl:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    type: "Sale",
  },
  {
    id: 6,
    title: "Wine Country Villa",
    location: "Stellenbosch, Western Cape",
    country: "South Africa",
    price: "$1,950,000",
    bedrooms: 4,
    bathrooms: 4,
    area: "4,200 sq ft",
    description:
      "Charming villa nestled in South Africa's premier wine region. Features include a wine cellar, outdoor kitchen, and breathtaking mountain views.",
    imageUrl:
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    type: "Sale",
  },
  {
    id: 7,
    title: "Executive Townhouse",
    location: "Banana Island, Lagos",
    country: "Nigeria",
    price: "$12,000/month",
    bedrooms: 4,
    bathrooms: 4.5,
    area: "3,800 sq ft",
    description:
      "Luxurious townhouse in exclusive Banana Island with private garden, home office, and access to community amenities including pool and tennis courts.",
    imageUrl:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    type: "Rent",
  },
  {
    id: 8,
    title: "Clifton Beach House",
    location: "Clifton, Cape Town",
    country: "South Africa",
    price: "$3,800,000",
    bedrooms: 5,
    bathrooms: 5,
    area: "5,500 sq ft",
    description:
      "Spectacular beach house with direct access to Clifton's famous beaches. Features include floor-to-ceiling windows, multiple terraces, and a private pool.",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    type: "Sale",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Oluwaseun Adeyemi",
    role: "Property Investor",
    content:
      "Spruce and Settle Realtors helped me find the perfect investment properties in Lagos. Their market knowledge and professionalism are unmatched.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Thabo Mbeki",
    role: "Homeowner",
    content:
      "After months of searching on my own, Spruce and Settle found my dream home in Cape Town within weeks. Their attention to my specific needs was impressive.",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Amara Okafor",
    role: "International Client",
    content:
      "As someone purchasing property from overseas, I needed a team I could trust. Spruce and Settle made the entire process seamless and stress-free.",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Chidi Okonkwo",
    role: "Founder & CEO",
    bio: "With over 20 years of experience in luxury real estate across Africa, Chidi founded Spruce and Settle with a vision to transform the property market in Nigeria and South Africa.",
    imageUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Nomvula Ndlovu",
    role: "Head of South African Operations",
    bio: "Nomvula brings extensive knowledge of the South African property market, with particular expertise in Cape Town and Johannesburg luxury properties.",
    imageUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Adebayo Johnson",
    role: "Head of Nigerian Operations",
    bio: "Adebayo specializes in high-end properties in Lagos and Abuja, with a track record of closing some of Nigeria's most significant real estate transactions.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Zara Patel",
    role: "International Relations Director",
    bio: "Zara manages relationships with international clients and investors, ensuring seamless transactions for overseas buyers interested in African real estate.",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Rise of Luxury Real Estate in Lagos",
    excerpt:
      "Exploring the growing demand for high-end properties in Nigeria's most vibrant city and what it means for investors.",
    date: "June 15, 2025",
    author: "Adebayo Johnson",
    imageUrl:
      "https://images.unsplash.com/photo-1580746738099-75b3f1b3fb5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Market Trends",
  },
  {
    id: 2,
    title: "Cape Town: The Ultimate Luxury Destination",
    excerpt:
      "Why Cape Town continues to attract international property buyers and how to find the perfect home in this stunning coastal city.",
    date: "May 28, 2025",
    author: "Nomvula Ndlovu",
    imageUrl:
      "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Destinations",
  },
  {
    id: 3,
    title: "Sustainable Luxury: The Future of High-End Real Estate",
    excerpt:
      "How eco-friendly features are becoming essential in the luxury property market across Africa.",
    date: "May 10, 2025",
    author: "Chidi Okonkwo",
    imageUrl:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Sustainability",
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: "Property Sales",
    description:
      "Our expert team guides you through every step of buying or selling luxury properties in Nigeria and South Africa.",
    icon: "home",
  },
  {
    id: 2,
    title: "Premium Rentals",
    description:
      "Find exceptional rental properties or let us manage your investment with our comprehensive rental services.",
    icon: "key",
  },
  {
    id: 3,
    title: "Investment Advisory",
    description:
      "Strategic advice on real estate investments to maximize returns in Africa's most promising markets.",
    icon: "trending-up",
  },
  {
    id: 4,
    title: "Property Management",
    description:
      "Complete property management services for overseas and local investors, ensuring your investment is well-maintained.",
    icon: "building",
  },
  {
    id: 5,
    title: "Relocation Services",
    description:
      "Comprehensive support for international clients relocating to Nigeria or South Africa.",
    icon: "map-pin",
  },
  {
    id: 6,
    title: "Luxury Home Staging",
    description:
      "Professional staging services to showcase your property's full potential to prospective buyers.",
    icon: "layout",
  },
];
