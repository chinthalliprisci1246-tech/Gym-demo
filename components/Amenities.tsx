"use client";
import Image from "next/image";

const amenities = [
  { label: "Exclusive multi storied ample space", img: "/dk1.png" },
  { label: "Post Workout Massage Chairs for Stress relief", img: "/dk2.png" },
  { label: "Separate Locker facilities for Men and Women", img: "/dk3.png" },
  { label: "Hassle-free Parking and Wi-Fi", img: "/dk4.png" },
  { label: "Exclusive Nutritionist and Dietician", img: "/dk5.png" },
  { label: "Workout Beats to keep you Pumped up", img: "/dk6.png" },
  { label: "Alluring Steam bath Facilities", img: "/dk7.png" },
  { label: "Outdoor Seating Ambience", img: "/dk8.png" },
  { label: "Round the clock Safety and Surveillanc", img: "/dk9.png" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-16 px-4 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        <h2
          className="text-4xl md:text-5xl text-red-500  text-center mb-2 tracking-wide"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          A fitness centre with state-of-art facilites
        </h2>
        <h3
          className="text-2xl md:text-5xl text-white text-center mb-2 tracking-wide"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          A glimpse of Our Studio
        </h3>
        <div className="flex justify-center mb-12">
          <div className="w-16 h-1 bg-red-500" />
        </div>

        <div className="grid grid-cols-1 gap-20">
          {amenities.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3 group">
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden
                              ring-1 ring-white/10 group-hover:ring-red-500/50
                              transition-all duration-300">
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-white/70 text-xs md:text-sm text-center group-hover:text-white transition-colors duration-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}