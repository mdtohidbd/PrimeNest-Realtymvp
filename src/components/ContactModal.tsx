import { useRef, useEffect } from "react";
import { X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (isOpen) {
            const tl = gsap.timeline();

            tl.to(overlayRef.current, {
                opacity: 1,
                duration: 0.3,
                pointerEvents: "auto",
                ease: "power2.out"
            })
                .fromTo(contentRef.current,
                    { y: 50, opacity: 0, scale: 0.95 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.2)" },
                    "-=0.2"
                );
        } else {
            const tl = gsap.timeline({
                onComplete: () => {
                    if (overlayRef.current) {
                        gsap.set(overlayRef.current, { pointerEvents: "none" });
                    }
                }
            });

            tl.to(contentRef.current, {
                y: 20,
                opacity: 0,
                scale: 0.95,
                duration: 0.3,
                ease: "power2.in"
            })
                .to(overlayRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in"
                }, "-=0.2");
        }
    }, { dependencies: [isOpen] });

    // Handle ESC key to close
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 opacity-0 pointer-events-none"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                ref={contentRef}
                className="relative bg-white w-full max-w-[600px] max-h-[90vh] overflow-y-auto shadow-2xl p-8 md:p-12 z-10"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
                >
                    <X size={24} strokeWidth={1.5} />
                </button>

                <h2 className="text-3xl font-serif text-center mb-10 text-gray-800">Get in touch</h2>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full bg-[#FAFAFA] border-none p-4 text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-gray-200 focus:bg-white transition-all outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full bg-[#FAFAFA] border-none p-4 text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-gray-200 focus:bg-white transition-all outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-[#FAFAFA] border-none p-4 text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-gray-200 focus:bg-white transition-all outline-none"
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full bg-[#FAFAFA] border-none p-4 text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-gray-200 focus:bg-white transition-all outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full bg-[#FAFAFA] border-none p-4 text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-gray-200 focus:bg-white transition-all outline-none"
                        />
                        <div className="relative">
                            <select
                                className="w-full bg-[#FAFAFA] border-none p-4 text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-gray-200 focus:bg-white transition-all outline-none appearance-none cursor-pointer"
                                defaultValue=""
                            >
                                <option value="" disabled hidden>Type of Enquiry</option>
                                <option value="buy">Buying Property</option>
                                <option value="sell">Selling Property</option>
                                <option value="rent">Rental Enquiry</option>
                                <option value="general">General Enquiry</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <textarea
                            placeholder="Enquiry"
                            className="w-full bg-[#FAFAFA] border-none p-4 text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-gray-200 focus:bg-white transition-all outline-none min-h-[120px] resize-none"
                        />
                    </div>

                    <div className="pt-6">
                        <button
                            type="submit"
                            className="w-full border border-gray-300 text-gray-800 py-4 uppercase tracking-[0.2em] text-sm hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
