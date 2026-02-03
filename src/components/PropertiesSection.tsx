import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bed, Bath, Car } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    location: "CAMBERWELL",
    address: "3 Sycamore Street",
    type: "House",
    beds: 4,
    baths: 3,
    cars: 2,
    featured: true,
  },
  {
    id: 2,
    image: property2,
    location: "KEW",
    address: "24 Florence Avenue",
    type: "Residential",
    beds: null,
    baths: null,
    cars: null,
    featured: true,
  },
  {
    id: 3,
    image: property3,
    location: "HAWTHORN",
    address: "45 Through Road",
    type: "House",
    beds: 3,
    baths: 2,
    cars: 1,
    featured: false,
  },
  {
    id: 4,
    image: property4,
    location: "CAMBERWELL",
    address: "88 Liddiard Street",
    type: "House",
    beds: 5,
    baths: 3,
    cars: 2,
    featured: false,
  },
];

const PropertyCard = ({ property, index }: { property: typeof properties[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`property-card ${property.featured ? "col-span-1 md:col-span-1 aspect-[4/3]" : "aspect-[4/3]"}`}
    >
      <img
        src={property.image}
        alt={property.address}
        className="property-card-image"
      />
      <div className="property-card-overlay" />
      
      {/* Property Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <p className="text-white text-xs uppercase tracking-[0.15em] mb-1">{property.location}</p>
        <p className="text-white text-sm">{property.address}</p>
      </div>
    </motion.div>
  );
};

const PropertiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="properties" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Latest Properties</h2>
          <p className="section-subheading">
            Welcome to our beautiful homes. Browse through our listings to find your dream home
          </p>
        </motion.div>

        {/* Featured Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {properties.slice(0, 2).map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        {/* Regular Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {properties.slice(2).map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index + 2} />
          ))}
          <PropertyCard 
            property={{
              id: 5,
              image: property1,
              location: "MALVERN",
              address: "12 Station Road",
              type: "House",
              beds: 4,
              baths: 2,
              cars: 2,
              featured: false,
            }} 
            index={4} 
          />
        </div>

        {/* Property Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-4 mt-8"
        >
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">CAMBERWELL</p>
            <p className="text-sm text-foreground mb-2">3 Sycamore Street</p>
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <span className="property-detail">
                <Bed className="w-4 h-4" /> 4
              </span>
              <span className="property-detail">
                <Bath className="w-4 h-4" /> 3
              </span>
              <span className="property-detail">
                <Car className="w-4 h-4" /> 2
              </span>
            </div>
          </div>
          <button className="btn-outline">
            See Details
          </button>
        </motion.div>

        {/* Browse All Button */}
        <div className="text-center mt-12">
          <button className="btn-ghost">
            Browse All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
