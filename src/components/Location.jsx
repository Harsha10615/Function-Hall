import React from 'react';
import { hallConfig } from '../config/hallConfig';
import { MapPin, Navigation, Compass, Car, Train, Plane, Clock, Sparkles } from 'lucide-react';

export default function Location() {
  const { address, landmark, mapsEmbedUrl, googleMapsDirectionsUrl, openingHours } = hallConfig;

  return (
    <section id="location" className="py-20 sm:py-28 bg-cream-50 relative overflow-hidden">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-forest-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/10 border border-gold-600/30 text-forest-900 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Prime City Landmark</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-950 tracking-tight leading-tight">
            Hall Location & Directions
          </h2>

          <p className="mt-4 text-stone-600 text-sm sm:text-base font-light">
            Conveniently positioned on prime main avenue with effortless connectivity from major highways, airport, and metro lines.
          </p>

          <div className="mt-5 w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address Card & Transit Proximity */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-royal">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-forest-900 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600">
                    Official Palace Address
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 mt-0.5">
                    {hallConfig.hallName}
                  </h3>
                  <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                    {address}
                  </p>
                  
                  <div className="mt-3 pt-3 border-t border-cream-200 text-xs text-stone-500 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-forest-700 shrink-0" />
                    <span><strong>Landmark:</strong> {landmark}</span>
                  </div>

                  <div className="mt-2 text-xs text-stone-500 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-forest-700 shrink-0" />
                    <span><strong>Visiting Hours:</strong> {openingHours}</span>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="mt-6 pt-5 border-t border-cream-200">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-forest-950 hover:bg-forest-900 text-gold-300 hover:text-white font-bold text-sm tracking-wide shadow-md transition-all duration-300 group"
                >
                  <Navigation className="w-4 h-4 text-gold-400 group-hover:rotate-45 transition-transform" />
                  <span>Get Live Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Travel Time & Connectivity Badge */}
            <div className="bg-forest-950 text-white p-6 rounded-3xl border border-gold-500/30 shadow-royal">
              <h4 className="font-serif text-lg font-bold text-gold-300 mb-4 flex items-center gap-2">
                <span>Fast & Easy Guest Arrival</span>
              </h4>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-2xl bg-forest-900/80 border border-forest-800">
                  <Plane className="w-5 h-5 text-gold-400 mx-auto mb-1" />
                  <p className="text-white font-bold text-sm">25 Mins</p>
                  <p className="text-[11px] text-stone-300">Intl Airport</p>
                </div>

                <div className="p-3 rounded-2xl bg-forest-900/80 border border-forest-800">
                  <Train className="w-5 h-5 text-gold-400 mx-auto mb-1" />
                  <p className="text-white font-bold text-sm">5 Mins</p>
                  <p className="text-[11px] text-stone-300">Metro Station</p>
                </div>

                <div className="p-3 rounded-2xl bg-forest-900/80 border border-forest-800">
                  <Car className="w-5 h-5 text-gold-400 mx-auto mb-1" />
                  <p className="text-white font-bold text-sm">2 Mins</p>
                  <p className="text-[11px] text-stone-300">Outer Ring Rd</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full min-h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative bg-stone-200">
              <iframe
                title="Function Hall Google Maps Location"
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '440px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Map Overlay Badge */}
              <div className="absolute top-4 left-4 bg-forest-950/90 text-white px-4 py-2 rounded-xl backdrop-blur-md border border-gold-500/40 shadow-lg hidden sm:flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span className="text-xs font-semibold">{hallConfig.hallName}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

