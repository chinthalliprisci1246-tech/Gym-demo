"use client";
import { useEffect, useRef } from "react";

// TODO: customize plan names, prices, and features
const plans = [
  {
    name: "Basic",
    price: "₹999",
    period: "/mo",
    features: [
      "Gym access 6AM–10PM",
      "Locker room",
      "Basic equipment",
    ],
    highlight: false,
  },
  {
    name: "Pro ⭐",
    price: "₹1999",
    period: "/mo",
    features: [
      "Everything in Basic",
      "1 PT session/week",
      "Diet consultation",
      "Group classes",
    ],
    highlight: true, // visually highlighted
  },
  {
    name: "Elite",
    price: "₹2999",
    period: "/mo",
    features: [
      "Everything in Pro",
      "Unlimited PT sessions",
      "Body composition analysis",
      "Priority booking",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(sectionRef.current!.querySelectorAll(".plan-card"), {
        opacity: 0,
        y: 40,
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
    <section id="pricing" ref={sectionRef} className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        Pricing
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p, i) => (
          <div
            key={i}
            className={`plan-card rounded-2xl border p-6 flex flex-col gap-4 ${
              p.highlight
                ? "bg-white text-black border-white"
                : "bg-white/5 text-white border-white/10"
            }`}
          >
            <div>
              <p className="font-bold text-xl">{p.name}</p>
              <p className={`text-3xl font-extrabold mt-1 ${p.highlight ? "text-black" : "text-white"}`}>
                {p.price}
                <span className="text-base font-normal opacity-60">{p.period}</span>
              </p>
            </div>
            <ul className="flex flex-col gap-2 text-sm opacity-80">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span>✓</span> {f}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/91XXXXXXXXXX" // TODO: WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-auto text-center py-2.5 rounded-full font-semibold text-sm transition ${
                p.highlight
                  ? "bg-black text-white hover:bg-black/80"
                  : "bg-white text-black hover:bg-white/90"
              }`}
            >
              Get started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}