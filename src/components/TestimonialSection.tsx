import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        {/* Appraisal CTA */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between py-8 border-b border-border mb-16"
        >
          <p className="text-lg md:text-xl font-serif tracking-wide mb-4 md:mb-0">
            CURIOUS ABOUT THE VALUE OF YOUR HOME?
          </p>
          <button className="btn-outline">
            Request Appraisal
          </button>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Logo/Image */}
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 bg-primary flex items-center justify-center">
              <div className="text-center">
                <span className="text-primary-foreground logo-text text-3xl">
                  A<span className="inline-block w-16 h-px bg-primary-foreground mx-2 align-middle" />Z
                </span>
                <p className="text-primary-foreground text-xs uppercase tracking-[0.3em] mt-4">
                  Real Estate Agency
                </p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div>
            <p className="testimonial-quote mb-8">
              "Anton Zhouk have been amazing to work with from the start. The 
              application process was quick. Nicole was easy to talk to through 
              every step. Since living in our new house, Nicole has been easy to 
              contact and we always know she will help us, no matter how big or 
              small the question is. Renting can be a difficult process, but Anton 
              Zhouk have made it pretty pain-free."
            </p>
            
            <div className="mb-4">
              <p className="font-serif text-lg tracking-wide">Emma And Jess</p>
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
            </div>

            {/* Google Review Badge */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Posted on</span>
              <span className="font-medium text-foreground">Google</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
