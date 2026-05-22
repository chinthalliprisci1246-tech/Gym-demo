"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your backend, EmailJS, or Formspree
    // Example with Formspree: change action URL to your Formspree endpoint
    console.log("Form submitted:", form);
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
        Contact Us
      </h2>
      <p className="text-white/50 text-center mb-12 text-sm">
        Call us at{" "}
        <a href="tel:+91XXXXXXXXXX" className="text-white underline">
          +91 XXXXXXXXXX {/* TODO */}
        </a>{" "}
        or fill the form below.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-start max-w-3xl mx-auto">
        {/* Direct contact */}
        <div className="flex flex-col gap-4">
          <a
            href="tel:+91XXXXXXXXXX" // TODO
            className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition"
          >
            <span className="text-2xl">📞</span>
            <div>
              <p className="text-white font-semibold text-sm">Call</p>
              <p className="text-white/50 text-xs">+91 XXXXXXXXXX</p> {/* TODO */}
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl px-5 py-4 hover:bg-green-500/20 transition"
          >
            <span className="text-2xl">💬</span>
            <div>
              <p className="text-green-400 font-semibold text-sm">WhatsApp</p>
              <p className="text-white/50 text-xs">Message us anytime</p>
            </div>
          </a>
        </div>

        {/* Form */}
        {sent ? (
          <div className="text-green-400 text-center py-8">
            ✅ Message sent! We will get back to you soon.
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 text-sm"
            />
            <input
              name="phone"
              placeholder="Phone / Email"
              value={form.phone}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 text-sm"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 text-sm resize-none"
            />
            <button
              onClick={handleSubmit}
              className="bg-white text-black font-semibold py-3 rounded-xl hover:bg-white/90 transition text-sm"
            >
              Send →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}