import React from 'react';
import { hallConfig } from '../config/hallConfig';
import { Crown, Heart, Phone, Mail, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-white border-t border-gold-500/30 pt-16 pb-12 relative overflow-hidden">
      
      {/* Decorative Top Gold Line Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-forest-800">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-gradient p-0.5 shadow-gold-glow flex items-center justify-center">
                <div className="w-full h-full bg-forest-950 rounded-full flex items-center justify-center">
                  <Crown className="w-5 h-5 text-gold-400" />
                </div>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wide text-white block">
                  {hallConfig.hallName}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-gold-300 block font-medium">
                  {hallConfig.subTitle}
                </span>
              </div>
            </div>

            <p className="text-stone-300 text-sm leading-relaxed font-light">
              "{hallConfig.tagline}"
            </p>

            <p className="text-stone-400 text-xs leading-relaxed">
              Experience sheer opulence across our 32-ft column-free luxury hall, hosting up to 2,500 guests with world-class catering, stage decor, and bridal accommodations.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${hallConfig.ownerWhatsAppNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-700/40 text-emerald-300 border border-emerald-500/40 text-xs font-semibold hover:bg-emerald-600 hover:text-white transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp Active</span>
              </a>

              <span className="text-xs text-stone-400">&bull; Established {hallConfig.establishedYear}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-lg font-bold text-gold-400">Quick Links</h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <a href="#home" className="hover:text-gold-300 transition-colors">Home Page</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-300 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-gold-300 transition-colors">Our Facilities</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-300 transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#location" className="hover:text-gold-300 transition-colors">Hall Location</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-300 transition-colors">Contact Details</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Palace Facilities */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-bold text-gold-400">Palace Facilities</h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>&bull; Grand AC Main Hall (1500+ Seating)</li>
              <li>&bull; Luxury AC Dining Banquet (800+ Seating)</li>
              <li>&bull; Paved Valet Parking (400+ Cars)</li>
              <li>&bull; Royal Stage & Floral Decoration</li>
              <li>&bull; Heavy-Duty Commercial Kitchens</li>
              <li>&bull; 12 Deluxe AC Guest Suites</li>
              <li>&bull; 100% Dual 500 KVA Generator Backup</li>
            </ul>
          </div>

          {/* Column 4: Contact & Site Tours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-bold text-gold-400">Palace Office</h4>
            
            <div className="space-y-2 text-xs text-stone-300 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{hallConfig.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{hallConfig.contactPhone}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="truncate">{hallConfig.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#enquiry"
                className="block text-center py-2.5 px-4 rounded-xl bg-gold-gradient text-forest-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-102 transition-all"
              >
                Send Booking Enquiry
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer Note (Enquiry System, Not Automatic Reservation) */}
        <div className="my-6 p-4 rounded-2xl bg-forest-900/60 border border-forest-800 text-stone-300 text-xs flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0" />
          <p>
            <strong className="text-gold-300">Important Notice:</strong> This website is an official enquiry and consultation portal. We do not process automated online transactions or automated bookings without personal date verification. All reservations are finalized directly with the palace management team via WhatsApp or in person.
          </p>
        </div>

        {/* Bottom Copyright & Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            &copy; {currentYear} {hallConfig.hallName}. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1">
            Crafted for Royal Celebrations & Timeless Moments
          </p>
        </div>

      </div>
    </footer>
  );
}

