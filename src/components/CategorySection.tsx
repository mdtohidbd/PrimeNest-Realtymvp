import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import property1 from "@/assets/property-1.jpg";
import property4 from "@/assets/property-4.jpg";

const categories = [
  {
    id: 1,
    title: "FOR SALE",
    subtitle: "VIEW PROPERTIES",
    image: property1,
  },
  {
    id: 2,
    title: "RECENTLY SOLD",
    subtitle: "VIEW PROPERTIES",
    image: property4,
  },
];

const CategorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="category-card"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="category-card-overlay">
                <h3 className="text-white text-xl md:text-2xl font-serif tracking-[0.2em] mb-2">
                  {category.title}
                </h3>
                <p className="text-white/80 text-xs uppercase tracking-[0.2em] border-b border-white/40 pb-1 hover:border-white transition-colors cursor-pointer">
                  {category.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;
