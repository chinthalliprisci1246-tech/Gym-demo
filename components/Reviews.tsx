"use client";
import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Rahul M.",
    stars: 5,
    text: "Great coaches and an incredibly clean gym! The trainers are highly professional and the equipment is top notch. Best decision I made for my fitness journey.",
    photo: "/reviews/rahul.jpg",
  },
  {
    name: "Priya S.",
    stars: 5,
    text: "Lost 12 kg in just 3 months! The personalised diet consultation and weekly PT sessions made all the difference. I feel stronger and more confident than ever.",
    photo: "/reviews/priya.jpg",
  },
  {
    name: "Arun K.",
    stars: 5,
    text: "Hands down the best gym in the city. The multi-floor setup, Zumba classes, and friendly staff create an atmosphere that keeps you coming back every day.",
    photo: "/reviews/arun.jpg",
  },
  
];

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < stars ? "text-yellow-400" : "text-white/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name, photo }: { name: string; photo?: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br
                    from-red-500 to-red-800 flex items-center justify-center shrink-0">
      <img
        src={photo}
        alt={name}
        onError={(e) => (e.currentTarget.style.display = "none")}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <span className="text-white font-bold text-sm z-10">{initials}</span>
    </div>
  );
}

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(sectionRef.current!.querySelectorAll(".review-card"), {
        opacity: 0,
        y: 30,
        stagger: 0.12,
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
    <section id="reviews" ref={sectionRef} className="py-20 px-4 max-w-6xl mx-auto">

      {/* Heading */}
      <h2
        className="text-4xl md:text-6xl text-white text-center mb-3 tracking-wide"
        style={{ fontFamily: "var(--font-bebas)" }}
      >
        What Members Say
      </h2>
      <div className="flex justify-center mb-4">
        <div className="w-16 h-1 bg-red-500" />
      </div>
      <p className="text-white/40 text-center text-sm mb-14">
        Real results from real members
      </p>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="review-card group relative bg-white/5 border border-white/10
                       rounded-2xl p-6 flex flex-col gap-4
                       hover:border-red-500/30 hover:bg-white/[0.07]
                       transition-all duration-300"
          >
            {/* Quote mark */}
            <span className="absolute top-4 right-5 text-5xl text-white/5
                             group-hover:text-red-500/10 transition-colors duration-300
                             font-serif leading-none select-none">
              
            </span>

            {/* Stars */}
            <StarRating stars={r.stars} />

            {/* Review text */}
            <p className="text-white/60 text-sm leading-relaxed italic flex-1">
              &ldquo;{r.text}&rdquo;
            </p>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Author */}
            <div className="flex items-center gap-3">
              <Avatar name={r.name} photo={r.photo} />
              <div>
                <p className="text-white text-sm font-semibold">{r.name}</p>
                <p className="text-white/30 text-xs">Verified Member</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Overall rating bar */}
      <div className="mt-14 flex flex-col items-center gap-2">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-white font-bold text-2xl">5.0 <span className="text-white/40 text-base font-normal">overall rating</span></p>
        <p className="text-white/30 text-xs">{reviews.length} reviews from our members</p>
      </div>

    </section>
  );
}