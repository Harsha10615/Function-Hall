import React, { useState } from 'react';
import { hallConfig } from '../config/hallConfig';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  MapPin, 
  Sparkles, 
  ChevronDown, 
  HelpCircle,
  CalendarCheck
} from 'lucide-react';

export default function Contact() {
  const { contactPhone, alternatePhone, ownerWhatsAppNumber, email, address, openingHours, faqs } = hallConfig;
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="contact" className="py-20 sm:py-28 bg-forest-950 text-white relative pattern-royal overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-gold-500/30 text-gold-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Connect with Management</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Contact & Site Visit
          </h2>

          <p className="mt-4 text-stone-300 text-sm sm:text-base font-light">
            Our experienced reservation managers are ready to assist you with dates, customized packages, and in-person tours.
          </p>

          <div className="mt-5 w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
        </div>

        {/* Contact Cards Row */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Direct Phone Call */}
          <div className="p-6 rounded-3xl bg-forest-900/80 border border-gold-500/30 hover:border-gold-400 transition-all flex flex-col justify-between group shadow-royal">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 text-gold-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">Owner Contact</span>
              <h3 className="font-serif text-lg font-bold text-white mt-1">Direct Phone</h3>
              <p className="text-stone-300 text-xs mt-1">Speak directly with our senior venue director.</p>
              
              <div className="mt-4 space-y-1">
                <p className="text-white font-semibold text-sm">{contactPhone}</p>
                <p className="text-stone-400 text-xs">{alternatePhone}</p>
              </div>
            </div>

            <a
              href={`tel:${contactPhone}`}
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-gold-300 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> Call Now
            </a>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="p-6 rounded-3xl bg-forest-900/80 border border-gold-500/30 hover:border-emerald-500 transition-all flex flex-col justify-between group shadow-royal">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">Instant Chat</span>
              <h3 className="font-serif text-lg font-bold text-white mt-1">WhatsApp Chat</h3>
              <p className="text-stone-300 text-xs mt-1">Send your query or ask questions 24/7 on WhatsApp.</p>
              
              <div className="mt-4">
                <p className="text-white font-semibold text-sm">+{ownerWhatsAppNumber}</p>
                <p className="text-stone-400 text-xs">Fast response within minutes</p>
              </div>
            </div>

            <a
              href={`https://wa.me/${ownerWhatsAppNumber}?text=${encodeURIComponent('Hello! I would like to inquire about availability and pricing for ' + hallConfig.hallName + '.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" /> Chat on WhatsApp
            </a>
          </div>

          {/* Card 3: Address & Office */}
          <div className="p-6 rounded-3xl bg-forest-900/80 border border-gold-500/30 hover:border-gold-400 transition-all flex flex-col justify-between group shadow-royal">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 text-gold-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">Palace Location</span>
              <h3 className="font-serif text-lg font-bold text-white mt-1">Visit Venue</h3>
              <p className="text-stone-300 text-xs mt-1 leading-relaxed line-clamp-3">
                {address}
              </p>
            </div>

            <a
              href="#location"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-gold-300 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" /> View Map & Route
            </a>
          </div>

          {/* Card 4: Timings & Email */}
          <div className="p-6 rounded-3xl bg-forest-900/80 border border-gold-500/30 hover:border-gold-400 transition-all flex flex-col justify-between group shadow-royal">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 text-gold-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">Visiting Hours</span>
              <h3 className="font-serif text-lg font-bold text-white mt-1">Office Timings</h3>
              <p className="text-stone-300 text-xs mt-1">{openingHours}</p>
              
              <div className="mt-4 flex items-center gap-2 text-xs text-stone-300 truncate">
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="truncate">{email}</span>
              </div>
            </div>

            <a
              href="#enquiry"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gold-gradient text-forest-950 font-extrabold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-102 transition-all"
            >
              <CalendarCheck className="w-3.5 h-3.5" /> Book Enquiry
            </a>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" /> Got Questions?
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-forest-900/90 border border-forest-800 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif text-base sm:text-lg font-semibold text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-stone-300 text-sm leading-relaxed border-t border-forest-800/80 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

