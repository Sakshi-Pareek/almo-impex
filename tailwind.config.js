/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0F172A',
          light: '#1e293b',
        },
        gold: {
          light: '#F0E68C',
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        },
        cream: '#F8F4E3',
      },
      height: {
        'screen-80': '80vh',
        'screen-90': '90vh',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/5980739/pexels-photo-5980739.jpeg')",
        'about-pattern': "url('https://images.pexels.com/photos/4621921/pexels-photo-4621921.jpeg')",
        'factory-pattern': "url('https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/dtWdHj5Gx3.jpeg')",
      },
    },
  },
  plugins: [],
};