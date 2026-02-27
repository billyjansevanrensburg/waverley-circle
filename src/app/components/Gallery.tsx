"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/media/Image 1.jpg", alt: "Waverley Apartments exterior view", width: 1200, height: 800 },
  { src: "/media/Image 2.jpg", alt: "Waverley Apartments apartment interior", width: 1200, height: 800 },
  { src: "/media/Image 3.jpg", alt: "Waverley Apartments living space", width: 1200, height: 800 },
  { src: "/media/Image 4.png", alt: "Waverley Apartments floor plan", width: 1200, height: 800 },
  { src: "/media/Image 5.jpg", alt: "Waverley Apartments kitchen area", width: 1200, height: 800 },
  { src: "/media/Image 6.png", alt: "Waverley Apartments development overview", width: 1200, height: 800 },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => setLightbox(index), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const goNext = useCallback(
    () => setLightbox((prev) => (prev !== null ? (prev + 1) % images.length : null)),
    []
  );
  const goPrev = useCallback(
    () => setLightbox((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null)),
    []
  );

  return (
    <section id="gallery" className="bg-charcoal px-6 py-24 sm:py-32">
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
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Explore Waverley Apartments
          </h2>
        </motion.div>

        {/* Mobile: Horizontal Scroll Carousel */}
        <div className="gallery-scroll -mx-6 flex gap-4 overflow-x-auto px-6 pb-4 sm:hidden snap-x snap-mandatory">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-[80vw] flex-shrink-0 snap-center cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="80vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
                priority
              />
            </motion.div>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-text-muted">
              {lightbox + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
