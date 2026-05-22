export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/7995789405" // TODO: your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-400 transition text-2xl"
      aria-label="Chat on WhatsApp"
    >
      💬
    </a>
  );
}