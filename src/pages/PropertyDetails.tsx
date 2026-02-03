import { useParams, Link } from "react-router-dom";
import { properties } from "@/data/properties";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bed, Bath, Car, MapPin, Phone, Mail, ChevronRight, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PropertyDetails = () => {
    const { id } = useParams();
    const property = properties.find(p => p.id === Number(id));
    const [activeTab, setActiveTab] = useState("property");

    const containerRef = useRef(null);
    const heroImageRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Hero Animation
        tl.from(heroImageRef.current, {
            scale: 1.1,
            duration: 1.5,
            ease: "power2.out"
        })
            .from(".hero-text", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=1");

        // Staggered Entrance of Main Content
        gsap.from(".content-section", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".main-container",
                start: "top 80%"
            }
        });

        // Gallery Stagger - using clearProps and simpler trigger to ensure visibility
        gsap.from(".gallery-item", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            clearProps: "all", // Ensure CSS takes over after animation
            scrollTrigger: {
                trigger: ".gallery-grid",
                start: "top 95%", // Trigger earlier
                toggleActions: "play none none none" // Only play once
            }
        });

        // Agent Section
        gsap.from(".agent-section", {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".agent-section",
                start: "top 75%"
            }
        });

    }, { scope: containerRef });

    if (!property) return <div>Property not found</div>;

    return (
        <div ref={containerRef} className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img ref={heroImageRef} src={property.image} className="w-full h-full object-cover" alt={property.address} />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl hero-text">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif uppercase tracking-[0.2em] mb-6 leading-tight">
                        {property.description.split('.')[0]}
                    </h1>
                    <div className="h-px bg-white/50 mx-auto w-16 md:w-24" />
                </div>
            </section>

            <main className="main-container container mx-auto px-4 md:px-6 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left Column: Info & Details */}
                    <div className="lg:col-span-8 content-section order-2 lg:order-1">
                        <div className="mb-12">
                            <h2 className="text-xl md:text-3xl font-serif uppercase tracking-widest mb-8 leading-snug">{property.address}, {property.location}</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                <div>
                                    <p className="text-primary font-medium text-xs md:text-sm tracking-widest mb-4 uppercase">Auction Saturday 15th February</p>
                                    <div className="space-y-6">
                                        <div className="border-t border-border pt-6">
                                            <p className="text-sm font-semibold uppercase tracking-widest mb-4">{property.agent.name}</p>
                                            <div className="flex gap-4">
                                                <button className="flex-1 bg-muted-foreground/20 hover:bg-muted-foreground/30 py-3 px-4 flex items-center justify-center gap-2 text-[10px] tracking-widest transition-colors uppercase">
                                                    <Phone size={14} /> Call
                                                </button>
                                                <button className="flex-1 bg-muted-foreground/20 hover:bg-muted-foreground/30 py-3 px-4 flex items-center justify-center gap-2 text-[10px] tracking-widest transition-colors uppercase">
                                                    <Mail size={14} /> Email
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 space-y-4">
                                        <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-primary">
                                            <ChevronRight size={14} /> Statement of Information
                                        </div>
                                        <div>
                                            <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-1">Auction Time</p>
                                            <p className="text-sm">Saturday 15th February 11:30 AM</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-1">Inspection Times</p>
                                            <p className="text-sm">Saturday 15th February 11:00 AM - 11:30 AM</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="flex flex-wrap items-center gap-4 md:gap-8 text-xs md:text-sm tracking-widest uppercase">
                                        {property.beds && <div className="flex items-center gap-2"><Bed size={16} /> {property.beds}</div>}
                                        {property.baths && <div className="flex items-center gap-2"><Bath size={16} /> {property.baths}</div>}
                                        {property.cars && <div className="flex items-center gap-2"><Car size={16} /> {property.cars}</div>}
                                        <div className="flex items-center gap-2">{property.type}</div>
                                    </div>

                                    <div className="border-t border-border pt-6">
                                        <button
                                            onClick={() => setActiveTab(activeTab === "property" ? "" : "property")}
                                            className="w-full flex justify-between items-center py-2 text-[10px] tracking-widest uppercase border-b border-border mb-4 font-bold"
                                        >
                                            The Property <ChevronDown size={14} className={`transition-transform ${activeTab === "property" ? "rotate-180" : ""}`} />
                                        </button>

                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeTab === "property" ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                                            <p className="text-sm leading-relaxed text-muted-foreground pb-6">
                                                {property.description}
                                            </p>
                                        </div>

                                        <button className="w-full flex justify-between items-center py-2 text-[10px] tracking-widest uppercase border-b border-border mb-4 font-bold">
                                            The Details <ChevronDown size={14} />
                                        </button>
                                        <button className="w-full flex justify-between items-center py-2 text-[10px] tracking-widest uppercase border-b border-border mb-4 font-bold">
                                            The Extras <ChevronDown size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Property Video Tour */}
                        <div className="mb-20">
                            <h3 className="text-lg md:text-xl font-serif uppercase tracking-[0.2em] mb-8">Video Tour</h3>
                            <div className="relative aspect-video bg-black/5 group cursor-pointer overflow-hidden">
                                <video
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                    muted
                                    loop
                                    playsInline
                                    poster={property.image}
                                    onMouseOver={event => (event.target as HTMLVideoElement).play()}
                                    onMouseOut={event => (event.target as HTMLVideoElement).pause()}
                                >
                                    <source src="https://assets.mixkit.co/videos/preview/mixkit-living-room-with-a-classic-touch-4771-large.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Grid */}
                        <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-20 content-section">
                            {property.gallery.slice(0, activeTab === "all-photos" ? property.gallery.length : 6).map((img, idx) => (
                                <div
                                    key={idx}
                                    className="gallery-item aspect-[4/3] overflow-hidden cursor-pointer bg-[#F8F7F4] shadow-sm hover:shadow-xl transition-all duration-500 group"
                                >
                                    <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Gallery ${idx}`} />
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => setActiveTab(activeTab === "all-photos" ? "property" : "all-photos")}
                                className="text-[10px] tracking-[0.4em] uppercase border-b border-primary/20 pb-2 hover:border-primary transition-all duration-300 font-medium"
                            >
                                {activeTab === "all-photos" ? "Show Less" : "All the Pictures"}
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Mini Map & CTA */}
                    <div className="lg:col-span-4 space-y-8 md:space-y-12 content-section order-1 lg:order-2">
                        <div className="aspect-square bg-muted relative overflow-hidden group shadow-lg">
                            <div className="absolute inset-0 bg-[#E8E6E1] flex flex-col items-center justify-center p-8 text-center">
                                <MapPin size={40} className="text-primary/40 mb-4" />
                                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{property.address}, {property.location}</p>
                            </div>
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors cursor-pointer" />
                        </div>

                        <div className="bg-[#F8F7F4] p-8 md:p-12 text-center aspect-square flex flex-col items-center justify-center shadow-sm">
                            <p className="text-[10px] tracking-[0.4em] uppercase mb-6 text-primary/60 font-bold">{property.location} VILLAGE</p>
                            <h3 className="text-2xl md:text-3xl font-serif uppercase tracking-[0.15em] mb-10 leading-tight">Contact your selling agent for a viewing</h3>
                            <button className="btn-outline w-full max-w-[200px]">Inquire Now</button>
                        </div>
                    </div>
                </div>

                {/* Agents Section */}
                <section className="agent-section mt-20 md:mt-40 border-t border-border pt-12 md:pt-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                        <div className="flex flex-col items-center text-center p-12 md:p-16 bg-[#F8F7F4]">
                            <p className="text-[10px] tracking-[0.4em] uppercase mb-6 text-muted-foreground font-bold">Your Selling Agent</p>
                            <h4 className="text-2xl md:text-3xl font-serif uppercase tracking-[0.2em] mb-4">{property.agent.name}</h4>
                            <p className="text-[10px] uppercase tracking-[0.3em] mb-12 text-primary/60 font-medium">For more information on this luxury property</p>
                            <button className="text-[10px] tracking-[0.4em] uppercase border-b border-primary/20 pb-2 hover:border-primary transition-all duration-300 font-bold">Contact Agent</button>
                        </div>
                        <div className="aspect-[4/5] bg-muted overflow-hidden relative group">
                            <img src={property.agent.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={property.agent.name} />
                            <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors" />
                        </div>
                    </div>
                </section>

                {/* Sell with Us CTA */}
                <section className="mt-20 md:mt-32 relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
                    <img src={property.image} className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" alt="Sell with Us" />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative z-10 text-center px-6 max-w-2xl">
                        <h2 className="text-white text-3xl md:text-4xl font-serif uppercase tracking-[0.2em] mb-8">Sell with us</h2>
                        <p className="text-white/80 text-xs md:text-sm tracking-widest mb-12 uppercase leading-relaxed">Get in touch with one of our selling agents who specialises in your area or call us directly on <br /> <span className="text-white text-lg">03 9885 1124</span></p>
                        <button className="btn-outline border-white text-white hover:bg-white hover:text-black">Contact Us</button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default PropertyDetails;
