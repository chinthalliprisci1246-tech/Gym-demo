export default function MapSection() {
  return (
    <section id="map" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        Find Us
      </h2>
      <div className="w-full h-80 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
        {/*
          TODO: Replace the src below with your Google Maps embed URL.
          Steps:
          1. Go to maps.google.com
          2. Search your gym address
          3. Click Share → Embed a map → Copy HTML
          4. Paste the iframe src value here
        */}
        <iframe
          src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL_HERE"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}