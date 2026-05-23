"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// TODO: replace with your real image paths inside /public/
const images = [
  "/gallery1.jpg",
  "/gallery2.png",
  "/gallery4.jpg",
  "/gallery6.jpg",
  "/gallery3.jpg",
  "/gallery5.jpg",
];

const VIRTUAL_TOUR_URL = "https://sprintonfitness.com/tour/"; // TODO: update if URL changes

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(sectionRef.current!.querySelectorAll(".gallery-card"), {
        opacity: 0,
        y: 40,
        stagger: 0.1,
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((p) => p !== null ? (p + 1) % images.length : p);
      if (e.key === "ArrowLeft")  setLightbox((p) => p !== null ? (p - 1 + images.length) % images.length : p);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <section id="gallery" ref={sectionRef} className="py-20 px-4 max-w-6xl mx-auto">

        {/* Heading */}
        <h2
          className="text-4xl md:text-6xl text-white text-center mb-3 tracking-wide"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          Gallery
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-red-500" />
        </div>

        {/* ── Virtual Tour Button ── */}
        <div className="flex justify-center mb-12">
        <a
            href={VIRTUAL_TOUR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-red-600 hover:bg-red-700
                       text-white font-bold text-sm tracking-widest uppercase
                       px-8 py-4 rounded-none transition-all duration-200
                       shadow-lg shadow-red-900/40 hover:shadow-red-900/60"
            style={{ fontFamily: "var(--font-bebas)", fontSize: "1rem", letterSpacing: "0.15em" }}
          >
            {/* Play / 360 icon */}
            <svg
              className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform duration-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M15 10l4.553-2.277A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
            Start Gym Virtual Tour
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              className="gallery-card group aspect-square relative overflow-hidden
                         rounded-xl bg-white/5 cursor-pointer"
            >
              <Image
                src={src}
                alt={`Gym photo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40
                              transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white opacity-0 group-hover:opacity-100
                             scale-75 group-hover:scale-100 transition-all duration-300"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0zM11 8v6M8 11h6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox]}
              alt={`Gym photo ${lightbox + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 text-white/70 hover:text-white transition"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70
                       hover:text-white transition bg-white/10 hover:bg-white/20
                       rounded-full p-2"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70
                       hover:text-white transition bg-white/10 hover:bg-white/20
                       rounded-full p-2"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2
                        text-white/50 text-sm tabular-nums">
            {lightbox + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}