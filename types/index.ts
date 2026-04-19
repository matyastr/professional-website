export interface Testimonial {
  quote: string;
  author: string;
  title?: string;
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  year: number;
  details?: string;
}

export interface WorkRole {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights?: string[];
}

export interface WorkHistoryItem {
  company: string;
  location: string;
  roles: WorkRole[];
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'platform' | 'methodology' | 'scripting' | 'data';
}

export interface Project {
  title: string;
  company: string;
  description: string;
  highlights: string[];
  tags?: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface PercussionService {
  title: string;
  description: string;
}

export interface VideoShowcase {
  title: string;
  description: string;
  url: string;
}

export interface NavLink {
  label: string;
  path: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PercussionPhoto {
  src: string;
  alt: string;
}

export interface MusicalShow {
  title: string;
  image: string;
}

export interface BusinessVenture {
  name: string;
  tagline: string;
  description1: string;
  description2: string;
  highlights: string[];
  websiteUrl: string;
  services: { title: string; description: string }[];
}
