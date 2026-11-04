/**
 * ====================================================================
 * THE GRAND IMPERIAL PALACE - CONFIGURATION FILE
 * ====================================================================
 * Update this file to change the Hall Name, Owner WhatsApp number,
 * Phone Numbers, Address, Images, and other business information.
 * All changes here instantly reflect across the entire website!
 */

export const hallConfig = {
  // Brand & Business Details
  hallName: "The Grand Imperial Palace",
  subTitle: "Luxury Function Hall & Convention Centre",
  shortName: "Grand Imperial",
  tagline: "Where Royal Dreams Become Timeless Celebrations",
  establishedYear: "2010",

  // WhatsApp Integration (Crucial)
  // Format for WhatsApp API: Country Code + Mobile Number without '+' or spaces or dashes
  // Target owner WhatsApp: 919381494579
  ownerWhatsAppNumber: "919381494579",

  // Contact Information
  contactPhone: "+91 93814 94579",
  alternatePhone: "+91 98450 12345",
  email: "reservations@grandimperialpalace.com",

  // Physical Location & Directions
  address: "Palace Avenue, Near Botanical Garden Road, Financial District, Gachibowli, Hyderabad, Telangana 500032",
  landmark: "Opposite Grand Orchid Vista, 500m from ORR Exit 19",
  openingHours: "Mon - Sun: 9:00 AM – 9:00 PM (Office & Site Tours)",

  // Google Maps Integration
  // Embed URL for iframe:
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3387829983945!2d78.34891157597147!3d17.44350120118552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a268a735c9%3A0x6b80d0d8296eb8e4!2sBotanical%20Garden%20Rd%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  // Direct Navigation Link (Opens Google Maps app or site)
  googleMapsDirectionsUrl: "https://maps.google.com/?q=Botanical+Garden+Road+Gachibowli+Hyderabad",

  // Key Highlights & Capacity Stats
  stats: [
    { label: "Main Hall Seating", value: "1,500+", subtitle: "Push-back cushioned seating" },
    { label: "Floating Guest Capacity", value: "2,500+", subtitle: "Expansive column-free hall" },
    { label: "Dining Seating", value: "800+", subtitle: "Simultaneous buffet seating" },
    { label: "Car Parking Spaces", value: "400+", subtitle: "Paved parking + Valet team" },
    { label: "Luxury AC Rooms", value: "12 Suite Rooms", subtitle: "Including Royal Bridal Suite" },
    { label: "Events Celebrated", value: "1,400+", subtitle: "14+ Years of royal excellence" }
  ],

  // Hero Section Sliders / Visuals
  heroImages: [
    {
      url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=80",
      title: "Royal Grandeur & Opulent Spaces",
      subtitle: "Column-free architectural marvel with crystal chandeliers and royal stage setups."
    },
    {
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=80",
      title: "Fairytale Stage & Thematic Decor",
      subtitle: "Bespoke floral, crystal, and traditional backdrop setups designed by master artisans."
    },
    {
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1920&q=80",
      title: "Banquet & Grand Feast Dinners",
      subtitle: "Air-conditioned dining hall with live kitchen counters and VIP hospitality."
    }
  ],

  // About Section Highlights
  about: {
    badge: "Welcome to Royalty",
    title: "A Magnificent Destination for Life's Most Precious Milestones",
    description: "Welcome to The Grand Imperial Palace — South India's premier convention destination designed for lavish weddings, grand receptions, joyous engagements, and high-profile corporate celebrations. Built with imperial architecture, sparkling crystal chandeliers, and state-of-the-art climate control, we offer an enchanting canvas where unforgettable memories are created.",
    secondaryDescription: "From the majestic bridal suites to our seamless valet parking, every facet of our palace is engineered to pamper your distinguished guests with royal Indian hospitality.",
    featuresList: [
      "100% Fully Air-Conditioned Hall & Dining",
      "Massive 32ft High Column-Free Royal Ceiling",
      "Complete 500 KVA Generator Power Backup (Zero Blackout Guarantee)",
      "Dedicated Private Bridal Suites with Royal Dressing Lounges",
      "Specialized Pure Veg & Non-Veg Kitchen Prep Zones",
      "State-of-the-Art JBL Acoustic Sound & Theatrical Stage Lighting"
    ]
  },

  // 6 Required Facilities
  facilities: [
    {
      id: "ac-hall",
      name: "Grand AC Main Hall",
      tag: "Centralized Climate Control",
      capacity: "1,500 Seating | 2,500 Floating",
      description: "Our majestic central auditorium features a 32-foot towering column-free ceiling, imported crystal chandeliers, grand stage, and German acoustic paneling for pristine audio clarity.",
      features: [
        "Column-free view from every corner",
        "High-tonnage precision air conditioning",
        "Built-in hydraulic & floral stage setup",
        "HD LED Video Wall & stage lighting support"
      ],
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80",
      icon: "Crown"
    },
    {
      id: "dining-area",
      name: "Luxury Dining Banquet",
      tag: "800+ Simultaneous Dining",
      capacity: "800 Seating at once",
      description: "A sprawling, hygienic, fully air-conditioned dining banquet with dedicated buffet lines, live counters, VIP seated family zones, and handwash stations.",
      features: [
        "Spacious lanes for smooth crowd flow",
        "Live tandoor and chaat counter areas",
        "Ultra-hygienic stainless steel service counters",
        "Dedicated VIP family dining lounge"
      ],
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80",
      icon: "UtensilsCrossed"
    },
    {
      id: "parking",
      name: "Paved Parking & Valet",
      tag: "400+ Cars & 600+ Two-Wheelers",
      capacity: "Safe, Well-Lit & Secured",
      description: "Zero parking hassles for your respected guests. We provide smooth multi-lane entry and exit gates with complete asphalt paving, CCTV monitoring, and valet parking team.",
      features: [
        "Uniformed valet parking attendants",
        "Round-the-clock security and CCTV coverage",
        "Direct ramp access for elderly & differently-abled",
        "Wide driveway for bridal cavalcade entry"
      ],
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1000&q=80",
      icon: "Car"
    },
    {
      id: "decoration",
      name: "Stage & Thematic Decor",
      tag: "In-House Master Decorators",
      capacity: "Custom Floral & Royal Themes",
      description: "Transform your celebration with bespoke stage decor. From regal traditional golden mandaps and exotic fresh floral arches to contemporary minimalist LED structures.",
      features: [
        "Exclusive wedding mandap themes",
        "Exotic fresh flower sourcing",
        "Red carpet pathways & floral photo booths",
        "Custom mood lighting & fog effects"
      ],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
      icon: "Sparkles"
    },
    {
      id: "catering",
      name: "Kitchen & Catering Support",
      tag: "Pure Veg & Multi-Cuisine Ready",
      capacity: "Heavy-Duty Commercial Kitchens",
      description: "Equipped with state-of-the-art commercial cooking facilities. We support both in-house authentic catering packages as well as hosting your trusted external caterers.",
      features: [
        "Strictly separated Pure-Veg cooking zone",
        "Walk-in refrigeration & deep freezer units",
        "Continuous 24-hr RO purified drinking water",
        "High-pressure gas pipeline & exhaust hoods"
      ],
      image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1000&q=80",
      icon: "ChefHat"
    },
    {
      id: "rooms",
      name: "Air-Conditioned Guest Rooms",
      tag: "12 Deluxe Rooms + 2 Royal Suites",
      capacity: "Complimentary with Hall Booking",
      description: "Pamper the bride, groom, and key family members. Elegant 5-star style suites with dressing areas, high-definition full-length mirrors, personal safe, and attached luxury baths.",
      features: [
        "Grand Bridal Suite with professional makeup station",
        "Groom's Lounge with private dressing area",
        "24/7 hot water and luxury linen",
        "Comfortable guest stay for out-of-town relatives"
      ],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
      icon: "BedDouble"
    }
  ],

  // Photo Gallery with Categorization
  gallery: [
    {
      id: 1,
      title: "Royal Grand Hall & Crystal Chandeliers",
      category: "hall",
      categoryLabel: "Grand Hall",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
      desc: "Expansive 32ft high ceiling with panoramic view for 2,500+ guests"
    },
    {
      id: 2,
      title: "Traditional Gold & Floral Mandap",
      category: "decor",
      categoryLabel: "Decoration",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      desc: "Handcrafted traditional floral setup for royal wedding ceremonies"
    },
    {
      id: 3,
      title: "Palace Banquet Dining Hall",
      category: "dining",
      categoryLabel: "Dining",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
      desc: "Fully air-conditioned dining banquet seating 800+ guests simultaneously"
    },
    {
      id: 4,
      title: "Bridal Suite & Dressing Lounge",
      category: "rooms",
      categoryLabel: "Rooms",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      desc: "Luxury air-conditioned bridal dressing suite with vanity mirror"
    },
    {
      id: 5,
      title: "Evening Palace Illumination & Exterior",
      category: "exterior",
      categoryLabel: "Exterior",
      image: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80",
      desc: "Majestic night lighting and grand driveway for royal entry"
    },
    {
      id: 6,
      title: "Modern Reception Stage Theme",
      category: "decor",
      categoryLabel: "Decoration",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
      desc: "Contemporary fairy-light backdrop and floral installations"
    },
    {
      id: 7,
      title: "VIP Buffet & Live Food Station",
      category: "dining",
      categoryLabel: "Dining",
      image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      desc: "Gourmet buffet presentation setup with live cooking counter"
    },
    {
      id: 8,
      title: "Spacious Paved Parking Area",
      category: "exterior",
      categoryLabel: "Exterior",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80",
      desc: "Safe 400+ car parking lot with dedicated valet service"
    },
    {
      id: 9,
      title: "Intimate Engagement & Sangeet Setup",
      category: "hall",
      categoryLabel: "Grand Hall",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
      desc: "Festive mood lighting and dance floor setup for sangeet nights"
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: "How do I check date availability and book the hall?",
      a: "Fill out our quick Booking Enquiry Form on this page and submit via WhatsApp. Our booking manager will instantly check calendar dates, send a customized quote, and schedule your personal palace walk-through."
    },
    {
      q: "Are outside catering and decorators allowed?",
      a: "Yes! While we offer award-winning in-house catering and bespoke decorator packages, you are also free to bring your preferred catering chefs and decor teams. We provide full commercial kitchen access and setup assistance."
    },
    {
      q: "What is your guest capacity for dining and hall?",
      a: "The main hall accommodates 1,500 guests in theater seating and over 2,500 floating guests. The separate AC dining hall can seat 800+ guests at a single time for uninterrupted feasts."
    },
    {
      q: "What happens if there is a power outage?",
      a: "We have two heavy-duty 500 KVA silent diesel generators with automatic transition switches that power 100% of the air-conditioning, stage lighting, and sound systems without even a fraction of a second interruption."
    },
    {
      q: "Are guest rooms provided with the booking?",
      a: "Yes! Every standard full-day hall booking includes 2 Luxury AC Suites (Bridal Suite & Groom Suite) plus 10 guest rooms for your family's utmost comfort."
    }
  ],

  // Social Links
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com"
  }
};

