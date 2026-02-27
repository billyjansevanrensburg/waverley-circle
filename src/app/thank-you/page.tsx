import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Waverley Apartments",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal px-6">
      <div className="max-w-2xl text-center">
        {/* Gold accent line */}
        <div className="w-16 h-[2px] bg-gold mx-auto mb-8" />

        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-primary mb-6">
          Thank You
        </h1>

        <p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed mb-4">
          Thank you for your interest in Waverley Apartments. You are on the top
          of the list once we officially launch the new development.
        </p>

        <p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
          Our office and agents will be in contact with you in the near future.
        </p>

        <p className="font-heading text-xl md:text-2xl text-gold italic">
          Stay tuned, something amazing is coming&hellip;
        </p>

        {/* Gold accent line */}
        <div className="w-16 h-[2px] bg-gold mx-auto mt-8 mb-10" />

        <Link
          href="/"
          className="inline-block border border-gold text-gold px-8 py-3 text-sm uppercase tracking-widest hover:bg-gold hover:text-charcoal transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
