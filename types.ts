export interface MenuItem {
  name: string;
  price?: string;
  description?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: 'interior' | 'food' | 'exterior' | 'drink';
}
