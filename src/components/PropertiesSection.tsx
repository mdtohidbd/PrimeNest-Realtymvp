import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import { properties } from "@/data/properties";

const PropertiesSection = () => {
  const featuredProperty = properties[0];
  const regularProperties = properties.filter(p => p.status === "sale").slice(1, 4);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-primary text-xs uppercase tracking-[0.3em] font-medium mb-4"
            >
              Exquisite Collection
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title text-left mb-0"
            >
              Featured Properties
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/homes" className="btn-outline">
              Browse All Properties
            </Link>
          </motion.div>
        </div>

        {/* Featured Large Property */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 group relative aspect-[16/9] overflow-hidden"
          >
            <Link to={`/property/${featuredProperty.id}`}>
              <img
                src={featuredProperty.image}
                alt={featuredProperty.address}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-[10px] tracking-[0.3em] uppercase mb-2 opacity-80">{featuredProperty.location}</p>
                <h3 className="text-3xl md:text-4xl font-serif mb-4 uppercase tracking-wider">{featuredProperty.address}</h3>
                <button className="text-[10px] tracking-[0.3em] uppercase border-b border-white/50 pb-1 group-hover:border-white transition-all">
                  See Details
                </button>
              </div>
            </Link>
          </motion.div>

          <div className="lg:col-span-4 flex flex-col justify-center space-y-8 p-6 md:p-12 bg-secondary/30">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl font-serif mb-4 uppercase tracking-widest">{featuredProperty.address}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                {featuredProperty.description}
              </p>
              <Link to={`/property/${featuredProperty.id}`} className="text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-colors">
                View Listing
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {regularProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PropertyCard {...property} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
