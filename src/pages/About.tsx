import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgentCard from "@/components/AgentCard";
import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";
import agent3 from "@/assets/agent-3.jpg";
import agent4 from "@/assets/agent-4.jpg";
import propertyKitchen from "@/assets/hero-kitchen.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const agents = [
    { id: 1, name: "Anton Zhouk", role: "Founding Director", image: agent1 },
    { id: 2, name: "Sam Christensen", role: "Associate Director", image: agent2 },
    { id: 3, name: "Colby Maddocks", role: "Sales Associate", image: agent3 },
    { id: 4, name: "Julia Verdiants", role: "Sales Consultant", image: agent4 },
];

const About = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Hero Video Animation
        tl.from(videoRef.current, {
            scale: 1.2,
            duration: 1.5,
            ease: "power2.out"
        });

        // Text Content Reveal
        gsap.from(".about-text", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 80%",
            }
        });

        // Agents Grid Stagger
        gsap.from(".agent-card", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".agents-section",
                start: "top 75%",
            }
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen">
            <Navbar />

            {/* Hero Banner */}
            <div className="relative h-[600px] overflow-hidden">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={propertyKitchen}
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plate-and-wine-glass-4521-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <main className="container mx-auto px-6 py-24 about-section">
                <section className="max-w-4xl mx-auto text-center mb-32">
                    <h1 className="about-text text-4xl md:text-5xl font-serif uppercase tracking-[0.2em] mb-6">About Us</h1>
                    <p className="about-text text-xl tracking-widest font-medium mb-12">Relationships, Excellence and Authenticity are at the core of everything we do</p>

                    <div className="space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base about-text">
                        <p>
                            The A—Z Real Estate Agency was born of a simple, yet radical idea: that real estate should be exclusively focused on the customer, providing a more personal and tailored approach for every client.
                        </p>
                        <p>
                            Our team of <span className="text-foreground border-b border-foreground/30 font-medium">real estate agents in Hawthorn & Camberwell</span> ensure the highest standard of customer service and are easily available, ready to negotiate a sale on the open market or in a discreet and confidential manner off-market.
                        </p>
                        <p>
                            The boutique structure of our agency reflects the core values of our business model, where Relationships, Excellence and Authenticity are at the core of everything we do. To achieve and even exceed the standards we set ourselves, we limit the ratio of properties we handle as a team at any one time. This well-considered design ensures that we have the optimal resources to fully dedicate ourselves to each campaign.
                        </p>
                        <p>
                            Since entering the Boroondara market the A—Z team have sold in excess of $500+ million worth of property. The team's philosophy has always been to provide a personalised experience with the main objective to consistently achieve the best possible outcome for our clients. With this, to date the team has been able to achieve a combined $13.5+ million above client's expectations.
                        </p>
                        <p>
                            A—Z streamline the entire selling process by setting out a step-by-step plan to help guide you through the process. Every step can be taken care of; from organising the Contract of Sale; to project managing any pre-sale work, through to booking you in with one of our property stylists. Everything can be taken care of starting from here.
                        </p>
                    </div>
                </section>

                <section className="mb-32 agents-section">
                    <h2 className="text-3xl font-serif text-center uppercase tracking-widest mb-2">Our Agents</h2>
                    <p className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-16">Providing a more personal and tailored approach to every client</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                        {agents.map((agent) => (
                            <div key={agent.id} className="agent-card">
                                <AgentCard {...agent} />
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
