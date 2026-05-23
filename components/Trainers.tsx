"use client";
import { useEffect, useRef, useState } from "react";

const trainers = [
  {
    name: "Trainer Name",
    role: "Head Coach",
    cert: "ISSA Certified",
    bio: "Short bio here.",
    photo: "/images/trainers/trainer1.jpg",
    specialities: ["Strength", "Cardio"],
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

// Fallback avatar shown when the photo file doesn't exist yet
function TrainerAvatar({ name, photo }: { name: string; photo: string }) {
  const [imgError, setImgError] = useState(false);

  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase())
    .slice(0, 2)
    .join("");

  if (imgError || !photo) {
    return (
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
        {/* Initials circle */}
        <div className="w-24 h-24 rounded-full border-2 border-red-500/40 flex items-center justify-center bg-black/40 mb-3">
          <span
            className="text-4xl font-black text-red-400"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            {initials || "?"}
          </span>
        </div>
        <span className="text-white/20 text-xs tracking-widest uppercase">Photo coming soon</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photo}
      alt={name}
      onError={() => setImgError(true)}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}

export default function Trainers() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".trainer-card");
    if (!cards) return;

    const init = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      } catch {
        // If GSAP fails for any reason, make cards visible immediately
        cards.forEach((c) => {
          c.style.opacity = "1";
          c.style.transform = "none";
        });
      }
    };

    init();
  }, []);

  return (
    <section id="trainers" ref={sectionRef} className="py-20 px-4 max-w-6xl mx-auto">

      {/* ── About Us ──────────────────────────────────────── */}
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

      {/* ── Trainers ──────────────────────────────────────── */}
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

      <div className="grid gap-8 sm:grid-cols-3">
        {trainers.map((t, i) => (
          <div
            key={i}
            style={{ opacity: 1 }}
            className="trainer-card group relative bg-white/5 border border-white/10
                       rounded-2xl overflow-hidden
                       hover:border-red-500/30 transition-all duration-300"
          >
            {/* Photo / Avatar */}
            <div className="relative w-full aspect-square bg-zinc-900 overflow-hidden">
              <TrainerAvatar name={t.name} photo={t.photo} />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Speciality tags */}
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