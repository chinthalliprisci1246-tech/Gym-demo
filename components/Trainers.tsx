"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

// TODO: fill in your trainer details and photos in /public/images/trainers/
const trainers = [
  {
    name: "Trainer Name",      // TODO
    cert: "ISSA Certified",    // TODO: certification
    bio: "Short bio here.",    // TODO
    photo: "/trainer.jpg", // TODO
  },
  {
    name: "Trainer Name",
    cert: "ACE Certified",
    bio: "Short bio here.",
    photo: "/images/trainers/trainer2.jpg",
  },
  {
    name: "Trainer Name",
    cert: "NSCA Certified",
    bio: "Short bio here.",
    photo: "/images/trainers/trainer3.jpg",
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
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        Our Trainers
      </h2>
      <div className="grid gap-8 sm:grid-cols-3 md:grid-cols-3">
        {trainers.map((t, i) => (
          <div key={i} className="trainer-card flex flex-col items-center text-center gap-3">
            <div className="relative w-32 h-32 rounded-full overflow-hidden bg-white/10">
              {/* TODO: uncomment when photos are ready */}
              {/* <Image src={t.photo} alt={t.name} fill className="object-cover" /> */}
              <Image
          src={t.photo}
          alt={t.name}
          fill
          className="object-cover"
           />
            </div>
            <div>
              <p className="text-white font-bold text-lg">{t.name}</p>
              <p className="text-green-400 text-sm font-medium">{t.cert}</p>
              <p className="text-white/50 text-sm mt-1">{t.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}