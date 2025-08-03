import { PropertyProps, ImagesProps } from "@/interfaces";
import ImageMobile from '@/public/assets/Image-mobile.png';
import ImageDesktop from '@/public/assets/Image-1.png';

export const API_BASE_URL = "https://api.example.com";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "30",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "15",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "20",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "10",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "25",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "40",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy"
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "50",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "35",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "20",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "25",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France"
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "30",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles"
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "60",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: {
      image1: "/assets/property-image.png",
      image2: "/assets/property-image1.png",
      image3: "/assets/property-image2.png",
      image4: "/assets/property-image3.png"
    },
    discount: "",
    reviews: [
      {
        avatar: "/assets/image-review.svg",
        name: "Kerry",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.0,
        years: "3 years on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/Frame 118 (4).svg",
        name: "Pooja",
        date: "March 2024",
        occasion: "Family trip",
        rating: 4.5,
        years: "1 year on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
      },
      {
        avatar: "/assets/Frame 118.svg",
        name: "Cindy & Ben",
        date: "August 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "1 year on ALX",
        comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking"
      },
      {
        avatar: "/assets/image 25 (1).svg",
        name: "Marnie",
        date: "January 2023",
        occasion: "Family trip",
        rating: 4.0,
        years: "5 years on ALX",
        comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,"
      }
    ],
    description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming 
                  and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded 
                  sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in 
                  the hot tub, and gazing out over incredible ocean views.
                  
                  <h2 style="font-width-bold">The space</h2>
                  BEDROOM & BATHROOM• Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                  `,
    offerOne: [
      {
        offerImage: '/assets/mountain 1.png',
        offerText: 'Mountain view'
      },
      {
        offerImage: '/assets/chef 1.png',
        offerText: 'Chef'
      },
      {
        offerImage: '/assets/broom 1.png',
        offerText: 'Cleaning available during stay'
      },
      {
        offerImage: '/assets/pool 1.png',
        offerText: 'Pool - infinity'
      },
      {
        offerImage: '/assets/pan 1.png',
        offerText: 'Kitchen'
      }
    ],

    offerTwo: [
      {
        offerImage: '/assets/sunrise 1.png',
        offerText: 'Shared beach access'
      },
      {
        offerImage: '/assets/bell 1.png',
        offerText: 'Butler'
      },
      {
        offerImage: '/assets/shaker 1.png',
        offerText: 'Bartender'
      },
      {
        offerImage: '/assets/hot-tub 1.png',
        offerText: 'Hot tub'
      },
      {
        offerImage: '/assets/wifi 1.png',
        offerText: 'Wifi'
      }
    ]
  }
];

export const HEADERIMAGES: ImagesProps[] = [
  {
    imageSrc: "/assets/living-room 1.svg",
    name: "Rooms"
  },
  {
    imageSrc: "/assets/mansion 1.svg",
    name: "Mansion"
  },
  {
    imageSrc: "/assets/farm 1.svg",
    name: "Countryside"
  },
  {
    imageSrc: "/assets/villa 1.svg",
    name: "Villa"
  },
  {
    imageSrc: "/assets/palm-tree 1.svg",
    name: "Tropical"
  },
  {
    imageSrc: "/assets/key-chain 1.svg",
    name: "New"
  },
  {
    imageSrc: "/assets/swimming-pool 1.svg",
    name: "Amazing pool"
  },
  {
    imageSrc: "/assets/vacations 1.svg",
    name: "Beach House"
  },
  {
    imageSrc: "/assets/island (1) 1.svg",
    name: "Island"
  },
  {
    imageSrc: "/assets/tent 1.svg",
    name: "Camping"
  },
  {
    imageSrc: "/assets/apartment 1.svg",
    name: "Apartment"
  },
  {
    imageSrc: "/assets/home 1.svg",
    name: "House"
  },
  {
    imageSrc: "/assets/cottage 1.svg",
    name: "Lakefront"
  },
  {
    imageSrc: "/assets/treehouse (1) 1.svg",
    name: "Treehouse"
  },
  {
    imageSrc: "/assets/cabin.svg",
    name: "Cabins"
  },
  {
    imageSrc: "/assets/castle-tower 1.svg",
    name: "Castles"
  },
  {
    imageSrc: "/assets/lakeside.svg",
    name: "Lakeside"
  }
]

export const BACKGROUNDIMAGE = {
  mobile: ImageMobile,
  desktop: ImageDesktop,
};
