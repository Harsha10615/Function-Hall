import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Facilities from '../components/Facilities';
import Gallery from '../components/Gallery';
import BookingForm from '../components/BookingForm';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-stone-800 font-sans selection:bg-gold-500 selection:text-forest-950">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Us & Capacity Overview */}
        <About />

        {/* 4. Palace Facilities */}
        <Facilities />

        {/* 5. Photo Gallery & Lightbox */}
        <Gallery />

        {/* 6. Booking Enquiry Form & WhatsApp Integration */}
        <BookingForm />

        {/* 7. Hall Location & Google Maps */}
        <Location />

        {/* 8. Contact & Site Visiting Hours */}
        <Contact />
      </main>

      {/* 9. Professional Footer */}
      <Footer />

      {/* 10. Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

