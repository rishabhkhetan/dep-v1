import React from "react";
import whatsappLogo from "../assets/whatsapp.png";

const FloatingWhatsApp = () => {
  const phoneNumber = "9258020736";
  const defaultMessage = "Hi, Im interested in buying a property in Kolkata.";
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <aside aria-label="WhatsApp Chat Support">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      >
        {/* Glow Ring Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping -z-10 group-hover:opacity-100" />

        {/* WhatsApp Icon Image */}
        <img
          src={whatsappLogo}
          alt="WhatsApp"
          className="w-full h-full object-contain drop-shadow-md rounded-full"
        />

        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3 whitespace-nowrap bg-gray-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
          Chat with us on WhatsApp
        </span>
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;

