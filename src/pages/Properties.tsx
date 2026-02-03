import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import property1 from "@/assets/property-1.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Properties = () => {
    const [activeFilter, setActiveFilter] = useState("SEE ALL");
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const filterRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Hero Animation
        tl.from(headerRef.current.querySelector("img"), {
            scale: 1.2,
            duration: 1.5,
            ease: "power3.out"
        })
            .from(headerRef.current.querySelector("h1"), {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=1")
            .from(headerRef.current.querySelector(".separator"), {
                width: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.5");

        // Filter Bar
        gsap.from(filterRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            ease: "power3.out"
        });

        // Cards Stagger (Re-run when filter changes ideally, but for now initial load)
        gsap.from(".property-card-container", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            delay: 0.8,
            ease: "power3.out",
            clearProps: "all" // Clear effectively to allow hover interactions
        });

    }, { scope: containerRef, dependencies: [activeFilter] });

    return (
        <div ref={containerRef} className="min-h-screen">
            <Navbar />

            {/* Hero Banner */}
            <section ref={headerRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src={property1} className="w-full h-full object-cover" alt="Banner" />
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="relative z-10 text-center px-6">
                    <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif uppercase tracking-[0.2em] mb-4">
                        Our Homes
                    </h1>
                    <div className="separator h-px bg-white/50 mx-auto w-24" />
                </div>
            </section>

            <main className="container mx-auto px-6 py-20">
                {/* Filters */}
                <div ref={filterRef} className="flex flex-wrap items-center justify-between gap-6 border-b border-border pb-10 mb-16">
                    <div className="flex flex-wrap gap-3">
                        {["SEE ALL", "BUY", "SOLD"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`text-[10px] tracking-[0.3em] px-6 py-3 transition-all duration-300 ${activeFilter === filter
                                    ? "bg-[#1A1A1A] text-white shadow-lg"
                                    : "bg-[#F8F7F4] text-foreground hover:bg-[#F0EEE9]"
                                    } uppercase font-medium`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 flex-1 max-w-3xl justify-end">
                        <div className="relative flex-1 min-w-[140px]">
                            <select className="appearance-none bg-[#F8F7F4] border-0 px-6 py-3 text-[10px] tracking-[0.2em] w-full uppercase cursor-pointer hover:bg-[#F0EEE9] transition-colors pr-10">
                                <option>Min Price</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                        </div>
                        <div className="relative flex-1 min-w-[140px]">
                            <select className="appearance-none bg-[#F8F7F4] border-0 px-6 py-3 text-[10px] tracking-[0.2em] w-full uppercase cursor-pointer hover:bg-[#F0EEE9] transition-colors pr-10">
                                <option>Max Price</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                        </div>
                        <div className="relative flex-[2] min-w-[200px]">
                            <input
                                type="text"
                                placeholder="LOCATION"
                                className="bg-[#F8F7F4] border-0 px-6 py-3 text-[10px] tracking-[0.2em] w-full focus:outline-none focus:ring-1 focus:ring-primary/10 transition-all placeholder:text-muted-foreground/50 uppercase"
                            />
                            <Search size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        </div>
                    </div>
                </div>

                {/* Current Listings */}
                {(activeFilter === "SEE ALL" || activeFilter === "BUY") && (
                    <section className="mb-20">
                        <h2 className="text-3xl font-serif text-center uppercase tracking-widest mb-2">Current Listings</h2>
                        <p className="text-center text-muted-foreground text-sm mb-12 uppercase tracking-wide">Browse through to find your dream home</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {properties.filter(p => p.status === "sale").map((property) => (
                                <div key={property.id} className="property-card-container h-full">
                                    <PropertyCard {...property} />
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Recently Sold */}
                {(activeFilter === "SEE ALL" || activeFilter === "SOLD") && (
                    <section className="mb-20">
                        <h2 className="text-3xl font-serif text-center uppercase tracking-widest mb-2">Recently Sold</h2>
                        <p className="text-center text-muted-foreground text-sm mb-12 uppercase tracking-wide">Homes that have already been purchased through our agency</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {properties.filter(p => p.status === "sold").map((property) => (
                                <div key={property.id} className="property-card-container h-full">
                                    <PropertyCard {...property} />
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Properties;
