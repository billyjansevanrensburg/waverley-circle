"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg
        className="h-8 w-8 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "2 & 3 Bedroom Units",
    description: "Spacious layouts designed for modern living",
  },
  {
    icon: (
      <svg
        className="h-8 w-8 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "2 Full Bathrooms",
    description: "Quality finishes throughout",
  },
  {
    icon: (
      <svg
        className="h-8 w-8 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Prime Location",
    description: "Situated in the heart of Waverley, Pretoria",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-charcoal-light px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-4 h-px w-12 bg-gold" />
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Modern Living in Waverley
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Waverley Apartments brings contemporary apartment living to one of
            Pretoria&apos;s most sought-after suburbs. Designed with modern
            families and professionals in mind, each unit offers spacious
            open-plan layouts, quality finishes, and the convenience of a prime
            Waverley location.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Choose from thoughtfully designed 2 and 3 bedroom apartments, each
            featuring 2 full bathrooms, open-plan living areas, and covered
            parking. Every detail has been considered to deliver comfort, style,
            and lasting value.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-lg border border-white/5 bg-charcoal p-8 text-center transition-all hover:border-gold/20 hover:shadow-lg hover:shadow-gold/5"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 transition-colors group-hover:bg-gold/20">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <a
            href="https://zfrmz.com/O7AuKuLVxX1wZw0ySLMN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25"
          >
            Register Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
