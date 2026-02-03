import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";
import agent3 from "@/assets/agent-3.jpg";
import agent4 from "@/assets/agent-4.jpg";

const agents = [
  {
    id: 1,
    name: "Anton Zhouk",
    title: "Founding Director",
    image: agent1,
  },
  {
    id: 2,
    name: "Sam Christensen",
    title: "Associate Director",
    image: agent2,
  },
  {
    id: 3,
    name: "Colby Maddocks",
    title: "Sales Associate",
    image: agent3,
  },
  {
    id: 4,
    name: "Julia Verdiants",
    title: "Sales Consultant",
    image: agent4,
  },
];

const AgentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Our Agents</h2>
          <p className="section-subheading">
            Providing a more personal and tailored approach to every client
          </p>
        </motion.div>

        {/* Agents Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="agent-card group"
            >
              <div className="overflow-hidden mb-4">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="agent-image"
                />
              </div>
              <h3 className="font-serif text-lg tracking-wide text-foreground">
                {agent.name.toUpperCase()}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {agent.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
