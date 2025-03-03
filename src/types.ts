export interface Property {
  id: number;
  title: string;
  location: string;
  country: 'Nigeria' | 'South Africa';
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  description: string;
  imageUrl: string;
  featured?: boolean;
  type: 'Sale' | 'Rent';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
  category: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}