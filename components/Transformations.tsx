"use client";
import { useEffect, useRef } from "react";

// TODO: fill in your before/after image paths and member details
const transformations = [
  {
    name: "Member Name", // TODO
    duration: "3 months", // TODO
    before: "/images/transformations/before1.jpg", // TODO
    after: "/images/transformations/after1.jpg", // TODO
  },
  {
    name: "Member Name",
    duration: "6 months",
    before: "/images/transformations/before2.jpg",
    after: "/images/transformations/after2.jpg",
  },
];

export default function Transformations() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(sectionRef.current!.querySelectorAll(".transform-card"), {
        opacity: 0,
        x: -30,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    };
    init();
  }, []);

  return (
    <section id="transformations" ref={sectionRef} className="py-20 px-4 max-w-6xl mx-auto">
     <h2
     className="text-4xl md:text-6xl text-white text-center mb-12 tracking-wide"
     style={{ fontFamily: "var(--font-bebas)" }}
    >
        Before / After
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {transformations.map((t, i) => (
          <div key={i} className="transform-card bg-white/5 rounded-2xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-2">
              {/* Before */}
              <div className="relative aspect-square bg-white/10">
                {/* TODO: uncomment when you have images */}
                {/* <Image src={t.before} alt="Before" fill className="object-cover" /> */}
                <div className="w-full h-full flex items-center justify-center text-white/30 text-sm">
                  Before
                </div>
                <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Before
                </span>
              </div>
              {/* After */}
              <div className="relative aspect-square bg-white/10">
                {/* <Image src={t.after} alt="After" fill className="object-cover" /> */}
                <div className="w-full h-full flex items-center justify-center text-white/30 text-sm">
                  After
                </div>
                <span className="absolute bottom-2 right-2 bg-white text-black text-xs px-2 py-1 rounded font-semibold">
                  After
                </span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-white font-semibold">{t.name}</p>
              <p className="text-white/50 text-sm">{t.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}