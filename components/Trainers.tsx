"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const trainers = [
  {
    name: "Trainer Name",        // TODO
    role: "Head Coach",          // TODO
    cert: "ISSA Certified",      // TODO
    bio: "Short bio here.",      // TODO
    photo: "/images/trainers/trainer1.jpg",
    specialities: ["Strength", "Cardio"],        // TODO
  },
  {
    name: "Trainer Name",
    role: "Yoga & Zumba Coach",
    cert: "ACE Certified",
    bio: "Short bio here.",
    photo: "/images/trainers/trainer2.jpg",
    specialities: ["Yoga", "Aerobics"],
  },
  {
    name: "Trainer Name",
    role: "Combat Coach",
    cert: "NSCA Certified",
    bio: "Short bio here.",
    photo: "/images/trainers/trainer3.jpg",
    specialities: ["Kick-Boxing", "TRX"],
  },
];

export default function Trainers() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(sectionRef.current!.querySelectorAll(".trainer-card"), {
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
    <section id="trainers" ref={sectionRef} className="py-20 px-4 max-w-6xl mx-auto">

      {/* ── About Us ─────────────────────────────────────────── */}
      <div className="mb-20">
        <h2
          className="text-4xl md:text-6xl text-white mb-3 tracking-wide"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          About Us
        </h2>
        <div className="w-16 h-1 bg-red-500 mb-8" />
        <div className="space-y-4 text-white/70 text-base leading-relaxed max-w-3xl">
          <p>
            Sprint On Fitness Studio is a prominent gym near Rajahmundry, Andhra Pradesh, offering
            top-quality training in Cardio, Strength, Aerobics-Zumba, and Yoga across an exclusive
            multi-floored space — with customised Group and Personal sessions led by highly skilled trainers.
          </p>
          <p>
            Our state-of-the-art facilities cater to Body Building, Weight Lifting, Kick-Boxing, TRX
            Training, Athletes, and Defence personnel in a safe, secure environment. Specialised programs
            are tailored to suit your desired lifestyle transformation.
          </p>
          <p>
            We are delighted to see you take a step forward toward becoming the best version of yourself.
            We appreciate your valuable suggestions and feedback.
          </p>
        </div>
      </div>

      {/* ── Trainers ─────────────────────────────────────────── */}
      <h2
        className="text-4xl md:text-6xl text-white text-center mb-3 tracking-wide"
        style={{ fontFamily: "var(--font-bebas)" }}
      >
        Our Trainers
      </h2>
      <div className="flex justify-center mb-4">
        <div className="w-16 h-1 bg-red-500" />
      </div>
      <p className="text-white/40 text-center text-sm mb-14">
        Expert coaches dedicated to your transformation
      </p>

      <div className="grid gap-8 sm:grid-cols-3 md:grid-cols-3">
        {trainers.map((t, i) => (
          <div
            key={i}
            className="trainer-card group relative bg-white/5 border border-white/10
                       rounded-2xl overflow-hidden
                       hover:border-red-500/30 transition-all duration-300"
          >
            {/* Photo */}
            <div className="relative w-full aspect-square bg-white/10 overflow-hidden">
              <Image
                src={t.photo}
                alt={t.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Speciality tags — sit on top of photo */}
              <div className="absolute bottom-3 left-0 right-0 flex flex-wrap justify-center gap-1.5 px-3">
                {t.specialities.map((s, j) => (
                  <span
                    key={j}
                    className="text-xs bg-red-500/80 text-white px-2 py-0.5 rounded-full font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col gap-1.5">
              <p className="text-white font-bold text-lg leading-tight">{t.name}</p>
              <p className="text-red-400 text-sm font-semibold">{t.role}</p>
              <p className="text-white/30 text-xs">{t.cert}</p>
              <div className="h-px bg-white/10 my-2" />
              <p className="text-white/50 text-sm leading-relaxed">{t.bio}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}