export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface Address {
  city: string;
  country: string;
}

export interface PropertyProps {
  id: string;
  name: string;
  rating: number;
  address: Address;
  images: string[];
  description: string;
  amenities: string[];
  price: number;
  reviews: Review[];
  host: {
    name: string;
    avatar: string;
    about: string;
  };
}