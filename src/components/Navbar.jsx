import React, { useState, useEffect } from 'react';
import { hallConfig } from '../config/hallConfig';
import { Phone, MessageCircle, Menu, X, Crown, CalendarCheck } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-forest-950/95 backdrop-blur-md shadow-royal border-b border-gold-500/20 py-3'
          : 'bg-gradient-to-b from-forest-950/90 via-forest-950/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gold-gradient p-0.5 shadow-gold-glow flex items-center justify-center">
              <div className="w-full h-full bg-forest-950 rounded-full flex items-center justify-center">
                <Crown className="w-5 h-5 text-gold-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white block leading-tight">
                {hallConfig.shortName}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-gold-300 block font-medium">
                Convention & Luxury Hall
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-200 hover:text-gold-400 font-medium text-sm transition-colors duration-200 tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${hallConfig.contactPhone}`}
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gold-300 hover:text-white bg-forest-900/80 hover:bg-forest-800 border border-gold-500/30 rounded-full transition-all duration-200"
              title="Call Manager Directly"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{hallConfig.contactPhone}</span>
            </a>

            <a
              href="#enquiry"
              className="flex items-center gap-2 px-4 py-2.5 bg-gold-gradient text-forest-950 hover:shadow-gold-glow font-semibold text-xs tracking-wider uppercase rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Enquiry</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#enquiry"
              className="sm:hidden px-3 py-1.5 bg-gold-gradient text-forest-950 font-bold text-xs uppercase rounded-full"
            >
              Enquire
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-200 hover:text-gold-400 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-forest-950/98 border-b border-gold-500/30 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-stone-200 hover:bg-forest-900 hover:text-gold-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-forest-800/80 flex flex-col gap-3">
            <a
              href={`tel:${hallConfig.contactPhone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-gold-500/40 text-gold-300 font-semibold text-sm bg-forest-900"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call: {hallConfig.contactPhone}</span>
            </a>

            <a
              href="#enquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-gold-gradient text-forest-950 font-bold text-sm tracking-wider uppercase rounded-lg shadow-gold-glow"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Submit Enquiry via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

