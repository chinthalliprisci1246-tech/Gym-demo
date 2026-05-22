"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";


// TODO: replace these with your real image paths inside /public/images/gallery/
const images = [
  "/gallery1.jpg",
  "/gallery2.png",
  "/gallery4.jpg",
  "/gallery6.jpg",
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(sectionRef.current!.querySelectorAll(".gallery-card"), {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
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
    <section id="gallery" ref={sectionRef} className="py-20 px-4 max-w-6xl mx-auto">
      <h2
      className="text-4xl md:text-6xl text-white text-center mb-12 tracking-wide"
      style={{ fontFamily: "var(--font-bebas)" }}
      >
        Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <div key={i} className="gallery-card aspect-square relative overflow-hidden rounded-lg bg-white/10">
            {/* TODO: once you have real images, uncomment Image component */}
            {/* <Image src={src} alt={`Gym photo ${i + 1}`} fill className="object-cover" /> */}
            <Image
  src={src}
  alt={`Gym photo ${i + 1}`}
  fill
  className="object-cover hover:scale-110 transition duration-500"
/>
          </div>
        ))}
      </div>
    </section>
  );
}