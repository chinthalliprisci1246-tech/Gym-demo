"use client";
import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Rahul M.",
    stars: 5,
    text: "Great coaches, clean gym!",
    photo: "/reviews/rahul.jpg", // TODO: add photo or remove src to keep initials
  },
  {
    name: "Priya S.",
    stars: 5,
    text: "Lost 12 kg in 3 months!",
    photo: "/reviews/priya.jpg",
  },
  {
    name: "Arun K.",
    stars: 5,
    text: "Best gym in the city.",
    photo: "/reviews/arun.jpg",
  },
];

function Avatar({ name, photo }: { name: string; photo?: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        onError={(e) => (e.currentTarget.style.display = "none")}
        className="w-12 h-12 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-sm">
      {initials}
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
    <section id="reviews" ref={sectionRef} className="py-20 sm:px-2  max-w-xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        What Members Say
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="review-card bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3 mb-1">
              <Avatar name={r.name} photo={r.photo} />
              <div>
                <p className="text-white text-sm font-semibold">{r.name}</p>
                <div className="flex gap-0.5 text-yellow-400 text-sm">
                  {"★".repeat(r.stars)}
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm italic">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}