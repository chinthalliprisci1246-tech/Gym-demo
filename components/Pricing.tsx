"use client";
import { useEffect, useRef } from "react";

// TODO: customize plan names, prices, and features
const plans = [
  {
    name: "Basic",
    price: "₹999",
    period: "/mo",
    tag: null,
    features: [
      "Gym access 6AM–10PM",
      "Locker room",
      "Basic equipment",
      "Free parking",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹1999",
    period: "/mo",
    tag: "Most Popular",
    features: [
      "Everything in Basic",
      "1 PT session/week",
      "Diet consultation",
      "Group classes",
      "Body composition analysis",
    ],
    highlight: true,
  },
  {
    name: "Elite",
    price: "₹2999",
    period: "/mo",
    tag: "Best Value",
    features: [
      "Everything in Pro",
      "Unlimited PT sessions",
      "Priority booking",
      "Supplement guidance",
      "Monthly progress report",
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

      {/* Heading */}
      <h2
        className="text-4xl md:text-6xl text-white text-center mb-3 tracking-wide"
        style={{ fontFamily: "var(--font-bebas)" }}
      >
        Membership Plans
      </h2>
      <div className="flex justify-center mb-4">
        <div className="w-16 h-1 bg-red-500" />
      </div>
      <p className="text-white/40 text-center text-sm mb-14">
        No hidden fees. Cancel anytime.
      </p>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3 items-start">
        {plans.map((p, i) => (
          <div
            key={i}
            className={`plan-card relative rounded-2xl border flex flex-col gap-5 p-6 transition-transform
                        duration-300 hover:-translate-y-1
              ${p.highlight
                ? "bg-gradient-to-b from-red-600 to-red-700 border-red-400 shadow-xl shadow-red-900/40"
                : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
          >
            {/* Badge */}
            {p.tag && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2
                               bg-white text-black text-xs font-bold
                               px-3 py-1 rounded-full tracking-wide whitespace-nowrap">
                ⭐ {p.tag}
              </span>
            )}

            {/* Plan name & price */}
            <div className="mt-2">
              <p
                className={`font-bold text-xl tracking-wide
                  ${p.highlight ? "text-white" : "text-white/80"}`}
                style={{ fontFamily: "var(--font-bebas)", fontSize: "1.6rem" }}
              >
                {p.name}
              </p>
              <div className="flex items-end gap-1 mt-1">
                <span className={`text-4xl font-extrabold
                  ${p.highlight ? "text-white" : "text-white"}`}>
                  {p.price}
                </span>
                <span className={`text-sm mb-1
                  ${p.highlight ? "text-white/70" : "text-white/40"}`}>
                  {p.period}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className={`h-px ${p.highlight ? "bg-white/20" : "bg-white/10"}`} />

            {/* Features */}
            <ul className="flex flex-col gap-2.5 text-sm flex-1">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2.5">
                  <span className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center
                    ${p.highlight ? "bg-white/20 text-white" : "bg-red-500/20 text-red-400"}`}>
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className={p.highlight ? "text-white/90" : "text-white/60"}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://wa.me/91XXXXXXXXXX" // TODO: WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-2 text-center py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-200
                ${p.highlight
                  ? "bg-white text-red-600 hover:bg-white/90 shadow-md"
                  : "bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20"
                }`}
            >
              Get Started →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}