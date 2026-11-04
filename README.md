# 🏛️ The Grand Imperial Palace - Function Hall Booking Enquiry Website

A modern, responsive, and luxury-themed Function Hall Booking Enquiry web application built with **React.js**, **Vite**, and **Tailwind CSS**.

---

## 📁 Project Architecture & Clean Folder Structure

```text
function-hall/
├── src/
│   ├── assets/              # Static assets (images, icons, fonts)
│   │   ├── icons/           # Custom SVG icons (crown, crest, etc.)
│   │   └── images/          # Image assets and placeholders
│   │
│   ├── components/          # Reusable UI Components
│   │   ├── Navbar.jsx       # Sticky luxury navigation bar with mobile drawer
│   │   ├── Hero.jsx         # Hero carousel, royal badge & headline
│   │   ├── About.jsx        # Venue story, capacity stats & specifications
│   │   ├── Facilities.jsx   # AC Hall, Dining, Parking, Decor, Catering, Rooms
│   │   ├── Gallery.jsx      # Filterable gallery & fullscreen Lightbox modal
│   │   ├── BookingForm.jsx  # Booking Enquiry Form & WhatsApp integration
│   │   ├── Location.jsx     # Google Maps embed & live direction links
│   │   ├── Contact.jsx      # Owner phone dialer, WhatsApp, timings & FAQ
│   │   ├── Footer.jsx       # Royal footer, quick links, disclaimers
│   │   └── FloatingWhatsApp.jsx # Fixed floating quick WhatsApp chat button
│   │
│   ├── config/              # Central Business & Venue Configuration
│   │   └── hallConfig.js    # WhatsApp number, hall name, address, specs, images
│   │
│   ├── pages/               # Page Views
│   │   └── Home.jsx         # Home page assembling all sections
│   │
│   ├── styles/              # Component & Global Styles
│   │   ├── index.css        # Tailwind directives, animations & root styles
│   │   └── components/      # Dedicated CSS file per component
│   │       ├── Navbar.css
│   │       ├── Hero.css
│   │       ├── About.css
│   │       ├── Facilities.css
│   │       ├── Gallery.css
│   │       ├── BookingForm.css
│   │       ├── Location.css
│   │       ├── Contact.css
│   │       └── Footer.css
│   │
│   ├── utils/               # Integration & Helper Utilities
│   │   ├── whatsapp.js      # WhatsApp message builder & wa.me click-to-chat
│   │   ├── validation.js    # Booking form validation logic
│   │   └── formatters.js    # Date and currency formatters
│   │
│   ├── App.jsx              # Main App wrapper rendering Home page
│   └── main.jsx             # React entry point
│
├── public/                  # Public static assets
├── dist/                    # Production build output
├── run-website.bat          # 1-click Windows launcher
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Royal theme color palette and typography
└── vite.config.js           # Vite dev server and build configuration
```

---

## 📲 WhatsApp Click-to-Chat Integration

- **Owner WhatsApp Number**: `919381494579` (Configured in `src/config/hallConfig.js`).
- **Endpoint**: Official `https://wa.me/919381494579?text=<URL_ENCODED_MESSAGE>`
- **Workflow**:
  1. Customer fills the form: Name, Phone, Event Type, Date, Session, Expected Guests, and Facilities.
  2. Clicking **"Submit via WhatsApp"** validates all fields.
  3. Composes an emoji-styled, structured text message.
  4. Automatically opens WhatsApp in a new tab with the target number and pre-filled draft.
  5. The customer manually taps **Send (✈️)** in WhatsApp to start chatting directly with venue management.
  6. An on-screen confirmation popup also provides a **"Re-open WhatsApp Chat"** button and **"Copy Text"** option.

---

## ⚙️ How to Configure Business Details

Edit [`src/config/hallConfig.js`](file:///c:/Users/harsh/Downloads/function%20hall/src/config/hallConfig.js):
```javascript
export const hallConfig = {
  hallName: "The Grand Imperial Palace",
  ownerWhatsAppNumber: "919381494579", // Country code + 10 digits
  contactPhone: "+91 93814 94579",
  address: "Palace Avenue, Near Botanical Garden Road, Financial District, Hyderabad",
  // ...
};
```

---

## 🚀 How to Run the Website

### Option 1: Double-Click Launcher (Windows)
Double-click `run-website.bat` in this folder. It launches the development server and opens the browser.

### Option 2: Terminal Commands
```bash
# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```
Server runs at `http://localhost:3000`.
