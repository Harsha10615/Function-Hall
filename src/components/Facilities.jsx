import React, { useState } from 'react';
import { hallConfig } from '../config/hallConfig';
import { 
  Crown, 
  UtensilsCrossed, 
  Car, 
  Sparkles, 
  ChefHat, 
  BedDouble, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';

const iconMap = {
  Crown: Crown,
  UtensilsCrossed: UtensilsCrossed,
  Car: Car,
  Sparkles: Sparkles,
  ChefHat: ChefHat,
  BedDouble: BedDouble,
};

export default function Facilities() {
  const { facilities } = hallConfig;
  const [selectedFacility, setSelectedFacility] = useState(facilities[0].id);

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-forest-950 text-white relative overflow-hidden pattern-royal">
      
      {/* Decorative ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-gold-500/30 text-gold-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>World-Class Amenities</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Our Royal Facilities
          </h2>

          <p className="mt-4 text-stone-300 text-sm sm:text-base font-light">
            Every convenience thoughtfully tailored to deliver a seamless and unforgettable wedding celebration.
          </p>

          <div className="mt-5 w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
        </div>

        {/* Facilities Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => {
            const IconComponent = iconMap[facility.icon] || Crown;
            const isSelected = selectedFacility === facility.id;

            return (
              <div
                key={facility.id}
                onMouseEnter={() => setSelectedFacility(facility.id)}
                className={`group relative rounded-3xl overflow-hidden bg-forest-900/80 border transition-all duration-300 flex flex-col justify-between ${
                  isSelected 
                    ? 'border-gold-400/80 shadow-gold-glow-lg -translate-y-1' 
                    : 'border-forest-800/80 hover:border-gold-500/50 hover:shadow-royal'
                }`}
              >
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 p-3 rounded-2xl bg-forest-950/90 border border-gold-500/50 text-gold-400 backdrop-blur-md shadow-md">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Badge */}
                  <div className="absolute bottom-3 right-4 px-3 py-1 rounded-full bg-forest-950/90 text-gold-300 text-xs font-semibold border border-gold-500/30 backdrop-blur-md">
                    {facility.tag}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold-300 transition-colors">
                      {facility.name}
                    </h3>

                    <p className="mt-1 text-gold-400/90 text-xs font-semibold tracking-wide">
                      Capacity: {facility.capacity}
                    </p>

                    <p className="mt-3 text-stone-300 text-sm leading-relaxed font-light">
                      {facility.description}
                    </p>

                    {/* Features list */}
                    <ul className="mt-5 space-y-2 border-t border-forest-800/80 pt-4">
                      {facility.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-stone-300">
                          <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-6 pt-4 border-t border-forest-800/60">
                    <a
                      href="#enquiry"
                      className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-white transition-colors"
                    >
                      <span>Enquire for {facility.name}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-forest-900 border border-gold-500/30 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Need a Custom Package for Your Celebration?
            </h4>
            <p className="text-stone-300 text-sm mt-1">
              We offer bespoke bundles including AC Hall, Catering, Decor, and Bridal Suites at competitive rates.
            </p>
          </div>

          <a
            href="#enquiry"
            className="px-6 py-3.5 bg-gold-gradient text-forest-950 font-bold text-xs uppercase tracking-wider rounded-full shadow-gold-glow hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
          >
            Request All-Inclusive Quote
          </a>
        </div>

      </div>
    </section>
  );
}

