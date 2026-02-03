import { useRef } from "react";
import property9 from "@/assets/property-9.png";
import property10 from "@/assets/property-10.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const categories = [
  {
    id: 1,
    title: "FOR SALE",
    subtitle: "VIEW PROPERTIES",
    image: property9,
  },
  {
    id: 2,
    title: "RECENTLY SOLD",
    subtitle: "VIEW PROPERTIES",
    image: property10,
  },
];

const CategorySection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Staggered Entrance
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom bottom",
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Image Parallax within cards
    cardsRef.current.forEach((card) => {
      const img = card.querySelector("img");
      gsap.to(img, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.2, // Slight scale up on scroll
        y: 20, // Parallax move
      });
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category, index) => (
            <div
              key={category.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative h-[500px] md:h-[600px] overflow-hidden cursor-pointer"
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10 transition-transform duration-700 group-hover:-translate-y-2">
                <h3 className="text-white text-4xl md:text-6xl font-serif tracking-[0.1em] mb-8 drop-shadow-lg uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  {category.title}
                </h3>
                <div className="overflow-hidden">
                  <p className="text-white/90 text-xs tracking-[0.3em] uppercase border-b border-white/30 pb-2 hover:border-white transition-all duration-300 font-medium translate-y-10 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Decorative Frame */}
              <div className="absolute inset-8 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none scale-95 group-hover:scale-100 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
