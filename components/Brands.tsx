"use client";

const brands = [
  {
    name: "Precor",
    logo: "/brand1.png", // TODO: replace with your actual brand logo filenames
  },
  {
    name: "Brand 2",
    logo: "/brand2.png", // TODO
  },
  {
    name: "Brand 3",
    logo: "/brand3.png", // TODO
  },
  {
    name: "Brand 4",
    logo: "/brand4.png", // TODO
  },
];

export default function Brands() {
  return (
    <section id="brands" className="py-16 px-4 bg-white border-t border-yellow">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl text-black text-center mb-2 tracking-wide"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          World&apos;s Best Gym Equipment Brand Partners
        </h2>
        <div className="flex justify-center mb-12">
          <div className="w-16 h-1 bg-red-500" />
        </div>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}