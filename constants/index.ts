import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "1",
    name: "Cozy Urban Apartment",
    rating: 4.8,
    address: {
      city: "Nairobi",
      country: "Kenya",
    },
    images: [
      "/images/apt-main.jpg",
      "/images/apt2.jpg",
      "/images/apt3.jpg",
      "/images/apt4.jpg"
    ],
    description: "A beautiful and modern apartment in the heart of the city.",
    amenities: ["Wifi", "Kitchen", "Free parking", "Washing Machine"],
    price: 85,
    reviews: [
      {
        name: "Mary Jane",
        avatar: "/images/user1.jpg",
        rating: 5,
        comment: "Loved the place! Super clean and great location."
      },
      {
        name: "John Doe",
        avatar: "/images/user2.jpg",
        rating: 4,
        comment: "Comfortable stay, would visit again."
      }
    ],
    host: {
      name: "Alice Mwangi",
      avatar: "/images/host.jpg",
      about: "I love hosting guests and making their stay memorable!"
    }
  },
]