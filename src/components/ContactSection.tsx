import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section id="contact" className="relative h-[500px] md:h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={contactHero}
            alt="Modern interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <h2 className="text-white text-2xl md:text-4xl font-serif tracking-[0.15em] uppercase mb-8 max-w-3xl leading-relaxed">
            Looking to Buy, Sell or Needing Help with Your Investment Property?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 text-sm uppercase tracking-[0.15em] hover:bg-white/20 transition-colors"
              onClick={() => setIsFormOpen(true)}
            >
              Get In Touch
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 text-sm uppercase tracking-[0.15em] hover:bg-white/20 transition-colors">
              Call Us
            </button>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsFormOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-background w-full max-w-lg p-8 shadow-2xl"
          >
            <button 
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsFormOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-serif text-center mb-8">Get in touch</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="input-luxury"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input-luxury"
              />
              <input
                type="email"
                placeholder="Email"
                className="input-luxury"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="input-luxury"
              />
              <input
                type="text"
                placeholder="Address"
                className="input-luxury"
              />
              <select className="input-luxury text-muted-foreground">
                <option value="">Type of Enquiry</option>
                <option value="buy">Buying</option>
                <option value="sell">Selling</option>
                <option value="rent">Renting</option>
                <option value="invest">Investment</option>
              </select>
              <textarea
                placeholder="Enquiry"
                rows={4}
                className="input-luxury resize-none"
              />
              <button type="submit" className="btn-outline w-full">
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ContactSection;
