/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#05140E',
          900: '#092117',
          800: '#0E3325',
          700: '#154A36',
          600: '#1D6348',
          500: '#2A8260',
          100: '#E2ECE7',
          50: '#F0F6F3',
        },
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FBF8EE',
          100: '#F6EFD4',
          200: '#ECDDAA',
          300: '#E2CB7F',
          400: '#DBBD5E',
          500: '#D4AF37',
          600: '#B89223',
          700: '#8E6F18',
          800: '#644D12',
          900: '#3D2F0B',
        },
        cream: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F3ECE0',
          300: '#EADECB',
          400: '#DFCEB3',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'royal': '0 20px 40px -15px rgba(9, 33, 23, 0.25)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 40px rgba(212, 175, 55, 0.5)',
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #D4AF37 0%, #F5DE88 50%, #B89223 100%)',
        'forest-gradient': 'linear-gradient(180deg, #092117 0%, #0E3325 100%)',
      }
    },
  },
  plugins: [],
}

