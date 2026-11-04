import React, { useState } from 'react';
import { hallConfig } from '../config/hallConfig';
import { MessageSquare, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = `Hello, I visited your website and would like to inquire about booking dates and packages for ${hallConfig.hallName}.`;
  const whatsappUrl = `https://wa.me/${hallConfig.ownerWhatsAppNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      
      {/* Floating Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-forest-950 text-white text-xs px-3.5 py-2 rounded-2xl border border-gold-400/50 shadow-2xl backdrop-blur-md animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Chat directly on <strong>WhatsApp</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-white ml-1"
            aria-label="Dismiss Tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/40 group relative"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 group-hover:opacity-40" />
        <MessageSquare className="w-7 h-7 fill-white relative z-10" />
      </a>

    </div>
  );
}

