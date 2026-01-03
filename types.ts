
export interface Product {
  id: string;
  name: string;
  category: 'T-Shirt' | 'Jacket' | 'Hoodie' | 'Collaboration';
  price: number;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Collaboration {
  id: string;
  partner: string;
  type: 'Anime' | 'Artist';
  image: string;
  description: string;
}
