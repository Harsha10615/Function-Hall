import React, { useState, useEffect } from 'react';
import { hallConfig } from '../config/hallConfig';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function Gallery() {
  const { gallery } = hallConfig;
  const [activeCategory, setActiveCategory] = useState('all');
  const [previewImage, setPreviewImage] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'hall', label: 'Grand Hall' },
    { id: 'decor', label: 'Stage Decoration' },
    { id: 'dining', label: 'Dining Area' },
    { id: 'rooms', label: 'Guest & Bridal Rooms' },
    { id: 'exterior', label: 'Exterior & Parking' },
  ];

  const filteredImages = activeCategory === 'all'
    ? gallery
    : gallery.filter((item) => item.category === activeCategory);

  const openLightbox = (item) => {
    const idx = filteredImages.findIndex((img) => img.id === item.id);
    setPreviewIndex(idx >= 0 ? idx : 0);
    setPreviewImage(item);
  };

  const closeLightbox = () => {
    setPreviewImage(null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIdx = (previewIndex + 1) % filteredImages.length;
    setPreviewIndex(nextIdx);
    setPreviewImage(filteredImages[nextIdx]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIdx = (previewIndex - 1 + filteredImages.length) % filteredImages.length;
    setPreviewIndex(prevIdx);
    setPreviewImage(filteredImages[prevIdx]);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!previewImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') {
        const nextIdx = (previewIndex + 1) % filteredImages.length;
        setPreviewIndex(nextIdx);
        setPreviewImage(filteredImages[nextIdx]);
      }
      if (e.key === 'ArrowLeft') {
        const prevIdx = (previewIndex - 1 + filteredImages.length) % filteredImages.length;
        setPreviewIndex(prevIdx);
        setPreviewImage(filteredImages[prevIdx]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewImage, previewIndex, filteredImages]);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-cream-100 relative pattern-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/10 border border-gold-600/30 text-forest-900 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Visual Tour</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-950 tracking-tight leading-tight">
            Photo Gallery
          </h2>

          <p className="mt-4 text-stone-600 text-sm sm:text-base font-light">
            Take a glimpse into the majestic architecture, lavish stage decor, and banquet setups at our palace.
          </p>

          <div className="mt-5 w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
        </div>

        {/* Filter Category Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-forest-950 text-gold-300 shadow-royal scale-105 border border-gold-400'
                  : 'bg-white text-stone-700 hover:bg-cream-200 border border-cream-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer bg-forest-950 aspect-[4/3] border border-cream-300 hover:border-gold-400 transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                
                {/* Top Badge & Zoom Icon */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-forest-900/90 text-gold-300 border border-gold-500/40 text-xs font-semibold">
                    {item.categoryLabel}
                  </span>
                  
                  <div className="w-10 h-10 rounded-full bg-gold-gradient text-forest-950 flex items-center justify-center shadow-gold-glow">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-stone-300 font-light line-clamp-2">
                    {item.desc}
                  </p>
                  <p className="mt-2 text-[11px] font-semibold text-gold-400 tracking-wider uppercase flex items-center gap-1">
                    <Eye className="w-3 h-3" /> Click to view full image
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer Action */}
        <div className="mt-14 text-center">
          <p className="text-stone-600 text-sm">
            Want to see the hall in person before making your decision?
          </p>
          <a
            href="#contact"
            className="mt-3 inline-flex items-center gap-2 text-forest-900 hover:text-gold-700 font-bold text-sm tracking-wide border-b-2 border-gold-500 pb-0.5"
          >
            Schedule a Guided Hall Walkthrough &rarr;
          </a>
        </div>

      </div>

      {/* Lightbox / Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-forest-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-gold-300 transition-colors"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev Button */}
          {filteredImages.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-white/10 hover:bg-gold-500 text-white hover:text-forest-950 transition-colors"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Navigation Next Button */}
          {filteredImages.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-white/10 hover:bg-gold-500 text-white hover:text-forest-950 transition-colors"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Lightbox Card */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center bg-forest-900 rounded-2xl overflow-hidden border border-gold-500/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative w-full max-h-[72vh] flex items-center justify-center bg-black/40 overflow-hidden">
              <img
                src={previewImage.image}
                alt={previewImage.title}
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Caption bar */}
            <div className="w-full p-4 sm:p-6 bg-forest-950 border-t border-forest-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-gold-400 uppercase tracking-widest">
                  {previewImage.categoryLabel} &bull; Image {previewIndex + 1} of {filteredImages.length}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  {previewImage.title}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-0.5">
                  {previewImage.desc}
                </p>
              </div>

              <a
                href="#enquiry"
                onClick={closeLightbox}
                className="px-5 py-2.5 bg-gold-gradient text-forest-950 font-bold text-xs uppercase tracking-wider rounded-full shadow-gold-glow hover:scale-105 active:scale-95 transition-all shrink-0"
              >
                Enquire for Date
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

