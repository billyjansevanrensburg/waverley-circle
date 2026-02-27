"use client";

import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-charcoal-light px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Logo */}
          <Image
            src="/media/Logo.png"
            alt="Invicta Developments"
            width={480}
            height={160}
            className="h-36 w-auto"
          />

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 flex flex-col items-center gap-4 text-sm text-text-muted sm:flex-row sm:justify-center sm:gap-8">
          <a
            href="tel:0123323495"
            className="transition-colors hover:text-gold"
          >
            012 332 3495
          </a>
          <a
            href="mailto:reception@invictacon.co.za"
            className="transition-colors hover:text-gold"
          >
            reception@invictacon.co.za
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-text-muted">
            &copy; 2026 Invicta Developments. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-text-muted/60">
            Developed by The Bridging Solutions Group
          </p>
        </div>
      </div>
    </footer>
  );
}
