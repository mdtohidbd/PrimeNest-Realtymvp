import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.png";
import property6 from "@/assets/property-6.png";
import property7 from "@/assets/property-7.png";
import property8 from "@/assets/property-8.png";
import property9 from "@/assets/property-9.png";
import property10 from "@/assets/property-10.png";
import property11 from "@/assets/property-1.jpg";
import property12 from "@/assets/property-12.jpg";

import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";
import agent3 from "@/assets/agent-3.jpg";
import agent4 from "@/assets/agent-4.jpg";

export interface Property {
    id: number;
    image: string;
    gallery: string[];
    location: string;
    address: string;
    type: string;
    beds?: number;
    baths?: number;
    cars?: number;
    status: "sale" | "sold" | "off-market";
    description: string;
    price?: string;
    agent: {
        name: string;
        role: string;
        image: string;
    };
}

export const properties: Property[] = [
    {
        id: 1,
        image: property1,
        gallery: [property1, property5, property7, property8, property2, property4],
        location: "CAMBERWELL",
        address: "3 Sycamore Street",
        type: "House",
        beds: 4,
        baths: 3,
        cars: 2,
        status: "sale",
        description: "An enchanting family design just seconds from Highfield Park. This stunning four-bedroom home offers a blend of classic charm and modern luxury. Featuring expansive living areas, a gourmet kitchen, and a master suite that serves as a true retreat.",
        agent: { name: "Anton Zhouk", role: "Founding Director", image: agent1 }
    },
    {
        id: 2,
        image: property2,
        gallery: [property2, property6, property8, property9, property3, property5],
        location: "CAMBERWELL",
        address: "45 Through Road",
        type: "House",
        beds: 3,
        baths: 2,
        cars: 1,
        status: "sale",
        description: "A beautifully maintained character home in a sought-after Camberwell location. This property combines period elegance with contemporary comforts, perfect for a growing family.",
        agent: { name: "Sam Christensen", role: "Associate Director", image: agent2 }
    },
    {
        id: 3,
        image: property3,
        gallery: [property3, property7, property9, property10, property4, property6],
        location: "KEW",
        address: "24 Florence Avenue",
        type: "Residential",
        status: "sale",
        description: "A rare opportunity to secure a prime land holding in one of Kew's most prestigious streets. Ready for your dream architectural masterpiece or a sophisticated renovation.",
        agent: { name: "Colby Maddocks", role: "Sales Associate", image: agent3 }
    },
    {
        id: 4,
        image: property4,
        gallery: [property4, property8, property10, property5, property1, property7],
        location: "HAWTHORN",
        address: "88 Liddiard Street",
        type: "House",
        beds: 5,
        baths: 3,
        cars: 2,
        status: "sale",
        description: "A hidden sanctuary right in the heart of the action. This expansive family residence offers unparalleled privacy, multiple living zones, and a seamless connection to the outdoors.",
        agent: { name: "Julia Verdiants", role: "Sales Consultant", image: agent4 }
    },
    {
        id: 7,
        image: property5,
        gallery: [property5, property9, property1, property2, property6, property8],
        location: "MALVERN",
        address: "12 Karoola Grove",
        type: "Villa",
        beds: 5,
        baths: 4,
        cars: 3,
        status: "sale",
        description: "Modern luxury villa with a large infinity pool and lush tropical gardens. Designed for the ultimate entertainer, this home features high ceilings and premium finishes throughout.",
        agent: { name: "Anton Zhouk", role: "Founding Director", image: agent1 }
    },
    {
        id: 8,
        image: property6,
        gallery: [property6, property10, property2, property3, property7, property9],
        location: "ARMADALE",
        address: "56 Sutherland Road",
        type: "House",
        beds: 4,
        baths: 2,
        cars: 2,
        status: "sale",
        description: "Elegant Victorian-style red brick house with a classic porch and white picket fence. A timeless design that offers a warmth and sophistication rarely found.",
        agent: { name: "Sam Christensen", role: "Associate Director", image: agent2 }
    },
    {
        id: 9,
        image: property7,
        gallery: [property7, property1, property3, property4, property8, property10],
        location: "MELBOURNE",
        address: "Penthouse 88/108 Flinders St",
        type: "Apartment",
        beds: 3,
        baths: 3,
        cars: 2,
        status: "sale",
        description: "Contemporary luxury penthouse living with floor-to-ceiling glass walls and stunning city skyline views. Experience the pinnacle of urban living in the heart of the CBD.",
        agent: { name: "Colby Maddocks", role: "Sales Associate", image: agent3 }
    },
    {
        id: 10,
        image: property8,
        gallery: [property8, property2, property4, property5, property9, property1],
        location: "TOORAK",
        address: "7 St Georges Road",
        type: "Mansion",
        beds: 6,
        baths: 5,
        cars: 4,
        status: "sale",
        description: "One of Toorak's most significant estates, offering grand-scale luxury on a premier boulevard. This home is a testament to architectural excellence and refined living.",
        agent: { name: "Julia Verdiants", role: "Sales Consultant", image: agent4 }
    },
    {
        id: 11,
        image: property9,
        gallery: [property9, property3, property5, property6, property10, property2],
        location: "BRIGHTON",
        address: "15 Esplanade",
        type: "Beach House",
        beds: 4,
        baths: 4,
        cars: 2,
        status: "sale",
        description: "Stunning modern beach house with wooden decks overlooking the turquoise ocean. A perfect blend of coastal relaxation and high-end luxury design.",
        agent: { name: "Anton Zhouk", role: "Founding Director", image: agent1 }
    },
    {
        id: 12,
        image: property10,
        gallery: [property10, property4, property6, property7, property1, property3],
        location: "HAWTHORN EAST",
        address: "22 Auburn Road",
        type: "House",
        beds: 5,
        baths: 3,
        cars: 2,
        status: "sale",
        description: "Luxury suburban mansion with a grand entrance and beautiful landscaping. This home offers spacious family living in a highly sought-after location.",
        agent: { name: "Sam Christensen", role: "Associate Director", image: agent2 }
    },
    {
        id: 5,
        image: property11,
        gallery: [property11, property5, property2, property6, property3, property7],
        location: "CAMBERWELL",
        address: "21 Tyrone Street",
        type: "House",
        beds: 4,
        baths: 2,
        cars: 2,
        status: "sold",
        description: "Classic family home with spacious living areas and a large backyard. Successfully sold to a happy family looking for their forever home.",
        agent: { name: "Colby Maddocks", role: "Sales Associate", image: agent3 }
    },
    {
        id: 6,
        image: property12,
        gallery: [property12, property6, property3, property7, property4, property8],
        location: "CANTERBURY",
        address: "g01/2-4 Gascoyne Street",
        type: "Apartment",
        beds: 1,
        baths: 1,
        cars: 1,
        status: "sold",
        description: "Sophisticated ground floor apartment in a quiet Canterbury street. Sold record timing with multiple competitive offers.",
        agent: { name: "Julia Verdiants", role: "Sales Consultant", image: agent4 }
    },
];
