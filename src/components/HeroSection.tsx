import { useRef } from "react";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-kitchen.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Initial Entrance Animation
    tl.from(imageRef.current, {
      scale: 1.2,
      duration: 2,
      ease: "power3.out",
    })
      .from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      }, "-=1.5");

    // Parallax Scroll Effect
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: 100, // Moves image down slightly slower than scroll
      scale: 1.1, // Slight zoom on scroll
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={imageRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={heroImage}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-view-from-living-room-4770-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div ref={textRef}>
          <h1 className="text-white text-sm md:text-base uppercase tracking-[0.3em] mb-12 font-medium">
            PrimeNest Realty
          </h1>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-0 shadow-2xl">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="SEARCH YOUR ADDRESS"
                className="w-full h-14 pl-6 pr-10 bg-white/95 backdrop-blur-sm focus:outline-none text-xs tracking-[0.2em] placeholder:text-black/40 uppercase transition-all focus:bg-white"
              />
              <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
            </div>
            <button className="bg-[#1a1a1a] text-white px-10 h-14 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-black transition-all duration-500 ease-out">
              Get estimate
            </button>
          </div>
        </div>
      </div>

      {/* Social Icons - Right Side */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 z-20 mix-blend-difference">
        {["Instagram", "Facebook", "LinkedIn"].map((social, idx) => (
          <a key={idx} href="#" className="flex items-center justify-end group">
            <span className="text-white text-[10px] uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 mr-4 hidden group-hover:block">{social}</span>
            <div className="w-1 h-1 bg-white rounded-full group-hover:scale-150 transition-transform duration-300" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
