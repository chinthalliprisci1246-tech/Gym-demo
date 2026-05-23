import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-14 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-white/50">

        {/* Brand */}
        <div className="flex flex-col gap-3">
          <Image
            src="/logo1.png"
            alt="Gym Logo"
            width={140}
            height={50}
            className="object-contain mb-1"
          />
          <p className="text-white/60 leading-relaxed">
            Sprint On Fitness Studio — Rajahmundry, Andhra Pradesh.{/* TODO: update address */}
            Your destination for Cardio, Strength, Yoga & more.
          </p>
          <a
            href="tel:+91XXXXXXXXXX" // TODO
            className="hover:text-white transition mt-1 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-500" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.1 3.3a1 1 0 01-.23 1.02L7.5 9.5a16 16 0 006.99 7l1.5-1.62a1 1 0 011.02-.23l3.3 1.1a1 1 0 01.68.95V19a2 2 0 01-2 2C9.16 21 3 14.84 3 7V5z" />
            </svg>
            +91 XXXXXXXXXX {/* TODO */}
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <p
            className="text-white font-semibold text-base mb-3 tracking-wide"
            style={{ fontFamily: "var(--font-bebas)", fontSize: "1.3rem" }}
          >
            Quick Links
          </p>
          {["Gallery", "Pricing", "Trainers", "Amenities", "Reviews", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
              {item}
            </Link>
          ))}
        </div>

        {/* Social */}
        <div className="flex flex-col gap-3">
          <p
            className="text-white font-semibold text-base mb-3 tracking-wide"
            style={{ fontFamily: "var(--font-bebas)", fontSize: "1.3rem" }}
          >
            Follow Us
          </p>

          {/* Instagram */}
          <a
            href="https://instagram.com/YOURHANDLE" // TODO
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-white transition group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400
                            flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.667.072 4.947.085 1.856.601 3.698 1.942 5.039 1.341 1.341 3.183 1.857 5.039 1.942C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.856-.085 3.698-.601 5.039-1.942 1.341-1.341 1.857-3.183 1.942-5.039.058-1.28.072-1.688.072-4.947 0-3.259-.014-3.667-.072-4.947-.085-1.856-.601-3.698-1.942-5.039C20.645.673 18.803.157 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </div>
            Instagram
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@YOURCHANNEL" // TODO
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-white transition group"
          >
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            YouTube
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/YOURPAGE" // TODO
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-white transition group"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </div>
            Facebook
          </a>

          {/* Twitter / X */}
          <a
            href="https://twitter.com/YOURHANDLE" // TODO
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-white transition group"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-white/20
                            flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
              </svg>
            </div>
            Twitter / X
          </a>

        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-white/10 mt-10 pt-6
                      flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-white/20 text-xs">
          © 2025 Sprint On Fitness Studio. All rights reserved. {/* TODO: update year/name */}
        </p>
        <p className="text-white/20 text-xs">
          Rajahmundry, Andhra Pradesh, India {/* TODO: update address */}
        </p>
      </div>

    </footer>
  );
}