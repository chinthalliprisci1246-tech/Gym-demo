"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");

      const el = headingRef.current;
      if (!el) return;

      const words = el.innerText.split(" ");
      el.innerHTML = words
        .map((w) => `<span class="inline-block opacity-0 translate-y-4">${w}</span>`)
        .join(" ");

      gsap.to(el.querySelectorAll("span"), {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.3,
      });
    };
    init();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Hero1.png')" }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-2xl">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
        >
          YOUR GYM NAME {/* TODO */}
        </h1>

        <p className="text-white/70 text-lg md:text-xl mb-8">
          Tagline — Transform yourself. {/* TODO */}
        </p>
        <a
        
        
          href="#contact" // scrolls to contact/form section
          className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition mb-6"
        >
          🎯 Book a Free Trial
        </a>

        {/* Secondary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+91XXXXXXXXXX" // TODO
            className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition"
          >
            📞 Call now
          </a>
          <a
          
            href="https://wa.me/91XXXXXXXXXX" // TODO
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}