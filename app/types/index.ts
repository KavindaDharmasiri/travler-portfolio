export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Insight {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface NewsletterData {
  email: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}
