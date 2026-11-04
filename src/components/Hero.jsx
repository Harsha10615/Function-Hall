import React, { useState, useEffect } from 'react';
import { hallConfig } from '../config/hallConfig';
import { Sparkles, ArrowRight, Eye, ChevronLeft, ChevronRight, Users, Car, ShieldCheck, Award } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hallConfig.heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % hallConfig.heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + hallConfig.heroImages.length) % hallConfig.heroImages.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      
      {/* Background Image Carousel with Crossfade */}
      <div className="absolute inset-0 z-0">
        {hallConfig.heroImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ transitionProperty: 'opacity, transform', transitionDuration: '1200ms' }}
          >
            <img
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover object-center transform"
            />
          </div>
        ))}

        {/* Regal Multi-Layer Gradient Overlays for High Contrast & Luxury Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/50" />
        <div className="absolute inset-0 bg-radial-vignette opacity-60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-14">
        
        {/* Royal Crest / Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900/90 border border-gold-500/40 backdrop-blur-md shadow-gold-glow mb-6 animate-pulse-glow">
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-gold-300">
            South India's Premier Wedding Destination
          </span>
          <Sparkles className="w-4 h-4 text-gold-400" />
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-5xl mx-auto drop-shadow-md">
          {hallConfig.hallName}
        </h1>

        <p className="mt-3 text-gold-300 font-serif text-lg sm:text-2xl font-light italic tracking-wider">
          "{hallConfig.tagline}"
        </p>

        {/* Short Description */}
        <p className="mt-6 text-stone-200 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
          Experience unrivaled opulence across our 32-ft column-free air-conditioned palace hall, seating up to{' '}
          <span className="text-gold-300 font-semibold">1,500 guests</span> with grand banquet dining, luxury bridal suites,
          and dedicated valet parking for unforgettable weddings and galas.
        </p>

        {/* Call to Actions (Book Now & Explore Hall) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#enquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold-gradient text-forest-950 font-bold text-sm sm:text-base uppercase tracking-wider shadow-gold-glow-lg hover:shadow-gold-glow hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <span>Book Now (Enquire)</span>
            <ArrowRight className="w-5 h-5 text-forest-950 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#facilities"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-forest-900/80 hover:bg-forest-800 text-gold-200 hover:text-white border border-gold-500/50 backdrop-blur-md font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-105"
          >
            <Eye className="w-5 h-5 text-gold-400" />
            <span>Explore Hall & Facilities</span>
          </a>
        </div>

        {/* Carousel Control Dots & Arrows */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="p-2 rounded-full bg-forest-900/60 hover:bg-forest-800 text-gold-400 border border-gold-500/20 backdrop-blur-sm transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex gap-2">
            {hallConfig.heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide ? 'w-8 bg-gold-400' : 'w-2 bg-stone-500/60 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="p-2 rounded-full bg-forest-900/60 hover:bg-forest-800 text-gold-400 border border-gold-500/20 backdrop-blur-sm transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Highlights Banner */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
          <div className="p-3 sm:p-4 rounded-2xl glass-card-dark text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="p-2 rounded-xl bg-gold-500/10 text-gold-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm sm:text-base">2,500+ Guests</p>
              <p className="text-stone-300 text-xs">Floating Capacity</p>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl glass-card-dark text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="p-2 rounded-xl bg-gold-500/10 text-gold-400">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm sm:text-base">400+ Cars</p>
              <p className="text-stone-300 text-xs">Paved Valet Parking</p>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl glass-card-dark text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="p-2 rounded-xl bg-gold-500/10 text-gold-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm sm:text-base">100% Power</p>
              <p className="text-stone-300 text-xs">Dual 500 KVA Gen-set</p>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl glass-card-dark text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="p-2 rounded-xl bg-gold-500/10 text-gold-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm sm:text-base">4.9 / 5.0 Star</p>
              <p className="text-stone-300 text-xs">1,400+ Grand Events</p>
            </div>
          </div>
        </div>

      </div>

      {/* Decorative Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-cream-50 to-transparent pointer-events-none" />
    </section>
  );
}

