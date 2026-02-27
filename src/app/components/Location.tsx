"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section id="location" className="bg-charcoal-light px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="mx-auto mb-4 h-px w-12 bg-gold" />
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Prime Waverley Location
          </h2>
          <p className="mx-auto max-w-2xl text-base text-text-secondary sm:text-lg">
            Perfectly positioned in Waverley, Pretoria — with easy access to
            major routes, top schools, shopping centres, and healthcare
            facilities.
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-hidden rounded-lg shadow-2xl shadow-black/30"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.1!2d28.2469!3d-25.7669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956004e06b6b0d%3A0x0!2sWaverley%2C+Pretoria!5e0!3m2!1sen!2sza!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Waverley Apartments Location"
            className="h-[300px] w-full sm:h-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
