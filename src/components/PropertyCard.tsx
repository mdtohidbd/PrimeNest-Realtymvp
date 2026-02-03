import { useRef } from "react";
import { Bed, Bath, Car } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface PropertyProps {
    id: number;
    image: string;
    location: string;
    address: string;
    type: string;
    beds?: number;
    baths?: number;
    cars?: number;
    size?: string;
    status?: "sale" | "sold" | "off-market";
}

const PropertyCard = ({ id, image, location, address, type, beds, baths, cars, size, status }: PropertyProps) => {
    const cardRef = useRef(null);
    const imageRef = useRef(null);

    // Using contextSafe to create event handler functions that are GSAP-context aware
    const { contextSafe } = useGSAP({ scope: cardRef });

    const onEnter = contextSafe(() => {
        gsap.to(imageRef.current, {
            scale: 1.1,
            duration: 0.8,
            ease: "power2.out"
        });
        gsap.to(cardRef.current, {
            y: -10,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    const onLeave = contextSafe(() => {
        gsap.to(imageRef.current, {
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
        });
        gsap.to(cardRef.current, {
            y: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    return (
        <Link
            to={`/property/${id}`}
            ref={cardRef}
            className="property-card flex flex-col group h-full bg-transparent"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                    ref={imageRef}
                    src={image}
                    alt={address}
                    className="w-full h-full object-cover transition-none" // Disable CSS transition to let GSAP handle it
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                {status === "sold" && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-white text-xl tracking-[0.3em] font-serif uppercase">Sold</span>
                    </div>
                )}
            </div>

            <div className="py-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">{location}</span>
                    <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">{type}</span>
                </div>
                <h3 className="text-lg font-serif mb-4 group-hover:text-primary transition-colors duration-300">{address}</h3>

                <div className="mt-auto flex items-center gap-6 pt-4 border-t border-border">
                    {beds && (
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                            <span className="opacity-50"><Bed size={14} /></span> <span>{beds}</span>
                        </div>
                    )}
                    {baths && (
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                            <span className="opacity-50"><Bath size={14} /></span> <span>{baths}</span>
                        </div>
                    )}
                    {cars && (
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                            <span className="opacity-50"><Car size={14} /></span> <span>{cars}</span>
                        </div>
                    )}
                    {size && (
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                            {size}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default PropertyCard;
