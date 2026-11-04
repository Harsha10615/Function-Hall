import React from 'react';
import { hallConfig } from '../config/hallConfig';
import { CheckCircle2, Warehouse, Sparkles } from 'lucide-react';

export default function About() {
  const { about, stats } = hallConfig;

  return (
    <section id="about" className="py-20 sm:py-28 bg-cream-50 relative overflow-hidden">
      
      {/* Decorative background embellishments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/10 border border-gold-600/30 text-forest-900 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>{about.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-950 tracking-tight leading-tight">
            {about.title}
          </h2>

          <div className="mt-4 w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="mt-14 lg:mt-18 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80"
                alt="Main Royal Hall"
                className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">Royal Architecture</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold">Centralized Air-Conditioned Grand Hall</h3>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-forest-900 text-white p-5 rounded-2xl shadow-xl border-2 border-gold-400 max-w-xs z-20 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-400">
                  <Warehouse className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gold-300 font-serif text-2xl font-bold leading-tight">32 Feet</p>
                  <p className="text-stone-300 text-xs uppercase tracking-wider">Column-Free High Ceiling</p>
                </div>
              </div>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-gold-500/60 rounded-tl-3xl pointer-events-none" />
          </div>

          {/* Right Column: Detailed Narrative & Features */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-light">
              {about.description}
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {about.secondaryDescription}
            </p>

            {/* Feature Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {about.featuresList.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                  <span className="text-stone-800 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Direct Enquiry CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-900 hover:bg-forest-800 text-gold-300 font-semibold text-sm shadow-md transition-all duration-200"
              >
                <span>Request Custom Date Quote</span>
                <span className="text-gold-400 font-bold">&rarr;</span>
              </a>

              <a
                href={`https://wa.me/${hallConfig.ownerWhatsAppNumber}?text=${encodeURIComponent('Hello, I would like to schedule a personal site visit to ' + hallConfig.hallName + '.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-cream-100 text-forest-950 border border-gold-500/40 font-semibold text-sm transition-all duration-200"
              >
                <span>Schedule a Palace Tour</span>
              </a>
            </div>

          </div>

        </div>

        {/* Capacity & Key Metrics Grid */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
              Hall Capacity & Grand Specifications
            </h3>
            <p className="text-stone-600 text-sm mt-1">
              Purpose-built to host massive gatherings with supreme luxury and comfort
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-cream-200 hover:border-gold-400 shadow-sm hover:shadow-royal transition-all duration-300 text-center flex flex-col justify-between group"
              >
                <div className="text-gold-600 font-serif text-2xl sm:text-3xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {item.value}
                </div>
                <div className="mt-2">
                  <h4 className="text-forest-950 font-semibold text-xs sm:text-sm">{item.label}</h4>
                  <p className="text-stone-500 text-[11px] mt-0.5 leading-snug">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

