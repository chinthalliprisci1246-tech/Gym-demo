import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-white/50">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 bg-white rounded-sm" />
            <span className="text-white font-bold">GYM LOGO</span> {/* TODO */}
          </div>
          <p>Hyderabad, India</p> {/* TODO: your address */}
          <a href="tel:+91XXXXXXXXXX" className="hover:text-white transition">
            📞 +91 XXXXXXXXXX {/* TODO */}
          </a>
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-2">
          <p className="text-white font-semibold mb-1">Quick Links</p>
          {["Gallery", "Pricing", "Trainers", "Reviews", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Social */}
        <div className="flex flex-col gap-2">
          <p className="text-white font-semibold mb-1">Follow us</p>
          <a
            href="https://instagram.com/YOURHANDLE" // TODO
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            📸 Instagram
            </a>
          <a
          
            href="https://youtube.com/@YOURCHANNEL" // TODO
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            ▶️ YouTube
          </a>
        </div>
      </div>

      <p className="text-center text-white/20 text-xs mt-10">
        © 2025 GYM NAME. All rights reserved. {/* TODO: gym name */}
      </p>
    </footer>
  );
}