
import React from 'react';
import { Product, Testimonial, Collaboration } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'RIFZ Signature Oversized Tee',
    category: 'T-Shirt',
    price: 299000,
    image: 'https://picsum.photos/seed/rifz1/600/800',
    description: 'Cotton Combed 20s premium dengan fitting modern.'
  },
  {
    id: 'p2',
    name: 'Urban Tech-Wear Bomber',
    category: 'Jacket',
    price: 749000,
    image: 'https://picsum.photos/seed/rifz2/600/800',
    description: 'Water-resistant fabric dengan multiple tactical pockets.'
  },
  {
    id: 'p3',
    name: 'Eclipse Heavy Hoodie',
    category: 'Hoodie',
    price: 549000,
    image: 'https://picsum.photos/seed/rifz3/600/800',
    description: 'Bahan Fleece 330gsm untuk kenyamanan maksimal.'
  },
  {
    id: 'p4',
    name: 'RIFZ x JUJUTSU KAISEN: Gojo Satoru Edition',
    category: 'Collaboration',
    price: 899000,
    image: '/images/rifzxjujutsu.png',
    description: 'Limited edition collaboration with Jujutsu Kaisen.'
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ariel Nayaka',
    role: 'Rapper / Artist',
    content: 'Kualitas bahan RIFZ benar-benar beda. Gue pakai buat manggung tetap nyaman dan stylingnya on point banget.',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
    rating: 5
  },
  {
    id: 't2',
    name: 'Sarah Azka',
    role: 'Fashion Blogger',
    content: 'Cutting oversized tee-nya juara. Jarang nemu brand lokal yang perhatiin detail jahitan seketat RIFZ.',
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
    rating: 5
  },
  {
    id: 't3',
    name: 'Kevin Julio',
    role: 'Actor',
    content: 'Jaket bomber-nya gokil! Desainnya futuristik tapi tetap fungsional buat motoran harian.',
    avatar: 'https://picsum.photos/seed/avatar3/100/100',
    rating: 5
  }
];

export const COLLABORATIONS: Collaboration[] = [
  {
    id: 'c1',
    partner: 'Jujutsu Kaisen',
    type: 'Anime',
    image: '/images/rifzjujutsu.png',
    description: 'Koleksi eksklusif yang menggabungkan elemen supernatural dengan estetika techwear.'
  },
  {
    id: 'c2',
    partner: 'Rich Brian',
    type: 'Artist',
    image: 'https://picsum.photos/seed/artist1/800/600',
    description: 'Capsule collection yang terinspirasi dari perjalanan musik global sang maestro.'
  },
  {
    id: 'c3',
    partner: 'Akira',
    type: 'Anime',
    image: 'https://picsum.photos/seed/anime2/800/600',
    description: 'Penghormatan untuk mahakarya Cyberpunk legendaris lewat desain hoodie distopia.'
  }
];
