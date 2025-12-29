"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Knowledgeable",
    description: "Over 10 years experience in canine reproduction. We cover every aspect of dog breeding and have a large client base across the UK with stud dogs available on request.",
  },
  {
    title: "Trustworthy",
    description: "Friendly and honest service with consistently accurate results. Late or last minute emergency appointments are acceptable - we're here when you need us most.",
  },
  {
    title: "Convenient",
    description: "We accept progesterone test & semen samples for immediate results. As well as offering a chilling and shipping service worldwide.",
  },
  {
    title: "Wellbeing",
    description: "Safety is our priority. We ensure our clients and their pets feel comfortable and relaxed. We take as much time and care as needed.",
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
              <h3 className="font-serif text-xl font-semibold text-[#002147] mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

