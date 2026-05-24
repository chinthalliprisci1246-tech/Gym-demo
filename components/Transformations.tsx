"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const transformations = [
  {
    name: "Member Name",       // TODO
    duration: "3 months",      // TODO
    loss: "-12 kg",            // TODO
    before: "/images/transformations/before1.jpg",
    after: "/images/transformations/after1.jpg",
  },
  {
    name: "Member Name",
    duration: "6 months",
    loss: "-18 kg",            // TODO
    before: "/images/transformations/before2.jpg",
    after: "/images/transformations/after2.jpg",
  }
];

// ── Drag-to-reveal slider card ──────────────────────────────────────────────
function SliderCard({ t }: { t: typeof transformations[0] }) {
  const [pct, setPct] = useState(50);
  const dragging = useRef(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const calc = (clientX: number) => {
    if (!cardRef.current) return;
    const { left, width } = cardRef.current.getBoundingClientRect();
    const val = Math.min(100, Math.max(0, ((clientX - left) / width) * 100));
    setPct(val);
  };

  // Mouse
  const onMouseDown = () => { dragging.current = true; };
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) calc(e.clientX); };
  const onMouseUp   = () => { dragging.current = false; };

  // Touch
  const onTouchMove = (e: React.TouchEvent) => calc(e.touches[0].clientX);

  return (
    <div className="transform-card bg-white/5 rounded-2xl overflow-hidden border border-white/10
                    hover:border-red-500/30 transition-colors duration-300">

      {/* Slider */}
      <div
        ref={cardRef}
        className="relative aspect-square select-none cursor-col-resize overflow-hidden"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
      >
        {/* AFTER — full width base */}
        <div className="absolute inset-0 ">
          <Image src={t.after} alt="" fill className="object-cover" />
          <span className="absolute top-3 right-3 ...">AFTER</span>
        </div>

        {/* BEFORE — clipped left portion */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pct}%` }}
        >
          
            <Image src={t.before} alt="" fill className="object-cover" />
          
          <span className="absolute top-3 left-3 ...">BEFORE</span>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
          style={{ left: `${pct}%` }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2
                          w-9 h-9 rounded-full bg-white shadow-lg
                          flex items-center justify-center gap-0.5">
            <svg className="w-3 h-3 text-black rotate-180" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>

        {/* Drag hint — fades out */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <p className="text-white/40 text-xs bg-black/30 px-3 py-1 rounded-full
                        opacity-100 animate-pulse">
            ← drag →
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex items-center justify-between">
        <div>
          <p className="text-white font-semibold">{t.name}</p>
          <p className="text-white/50 text-sm">{t.duration}</p>
        </div>
        <span className="text-red-400 font-bold text-lg">{t.loss}</span>
      </div>
    </div>
  );
}

// ── Section ─────────────────────────────────────────────────────────────────
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
        className="text-4xl md:text-6xl text-white text-center mb-3 tracking-wide"
        style={{ fontFamily: "var(--font-bebas)" }}
      >
        Transformations
      </h2>
      <div className="flex justify-center mb-4">
        <div className="w-16 h-1 bg-red-500" />
      </div>
      <p className="text-white/40 text-center text-sm mb-12">
        Drag the slider to reveal each member&apos;s journey
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {transformations.map((t, i) => (
          <SliderCard key={i} t={t} />
        ))}
      </div>
    </section>
  );
}