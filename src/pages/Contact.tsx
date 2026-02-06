import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import contactHero from "@/assets/contact-hero.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactModal from "@/components/ContactModal";

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const containerRef = useRef(null);
    const heroRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Hero Animation
        tl.from(heroRef.current.querySelector("img"), {
            scale: 1.2,
            duration: 1.5,
            ease: "power2.out"
        })
            .from(heroRef.current.querySelector("h1"), {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=1")
            .from(heroRef.current.querySelectorAll("button"), {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=0.5");

        // Map Reveal
        gsap.from(".map-section", {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".map-section",
                start: "top 80%"
            }
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen pt-24">
            <Navbar />

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-[600px] flex items-center justify-center overflow-hidden w-full container mx-auto">
                <img src={contactHero} alt="Contact Hero" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30" />

                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <h1 className="text-white text-3xl md:text-5xl font-serif uppercase tracking-[0.1em] mb-16 leading-tight drop-shadow-lg">
                        Looking to buy, sell or needing help with your investment property?
                    </h1>
                    <div className="flex flex-col sm:flex-row justify-center w-full max-w-2xl mx-auto gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex-1 bg-black/40 border border-white/50 text-white py-6 text-lg tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md"
                        >
                            Get in Touch
                        </button>
                        <a
                            href="tel:0398151124"
                            className="flex-1 bg-black/40 border border-white/50 text-white py-6 text-lg tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md flex items-center justify-center"
                        >
                            Call Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full h-[600px] relative overflow-hidden map-section container mx-auto mt-6 mb-24 grayscale opacity-80 hover:opacity-100 transition-opacity duration-500">
                {/* Placeholder for Google Map - In real app, use @react-google-maps/api */}
                <div className="absolute inset-0 bg-[#e5e3df] flex items-center justify-center">
                    {/* Replicating the Greyscale Google Map aesthetic */}
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.722527210204!2d145.03478!3d-37.82823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6423984025d2b%3A0x6b4a3a69a4866f2!2s205-207%20Riversdale%20Rd%2C%20Hawthorn%20VIC%203122%2C%20Australia!5e0!3m2!1sen!2sus!4v1700000000000"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(1) contrast(1.2)' }}
                        allowFullScreen={true}
                        loading="lazy"
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
