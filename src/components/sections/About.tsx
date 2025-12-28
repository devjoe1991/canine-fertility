"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Knowledgeable",
    description: "Over 30 years experience in canine reproduction",
    detail: "We cover every aspect of dog breeding and have a large client base across the UK with studs available on request.",
  },
  {
    title: "Trustworthy",
    description: "Friendly and honest service with consistently accurate results",
    detail: "Late or last minute emergency appointments are acceptable. We're here when you need us most.",
  },
  {
    title: "Convenient",
    description: "Flexible service options for your convenience",
    detail: "We accept progesterone test samples by mail for next day results, and live chilled semen from anywhere in the world is deliverable to us for insemination.",
  },
  {
    title: "Wellbeing",
    description: "Safety is our priority",
    detail: "It's important to us that our clients are comfortable and that their pets feel as relaxed and at home as can possibly be while you are with us. We take as much time and care as needed to ensure this.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-[#fafafa] to-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-serif text-4xl md:text-5xl font-bold text-[#002147] text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.1 }}
        >
          Whether you're an experienced breeder or having a one off family pet litter, we will do our utmost to ensure you're looked after every step of the way.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 25, stiffness: 200, delay: index * 0.1 }}
            >
              <h3 className="font-serif text-xl font-semibold text-[#002147] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#D4AF37] font-medium mb-3 text-sm">
                {feature.description}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

