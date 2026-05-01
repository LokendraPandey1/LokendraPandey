/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        siteBlack: '#0c0c0c',
        siteDark: '#111111',
        siteCard: '#191919',
        siteCyan: '#00b4c8',
        siteCyanDim: '#007a8a',
        offWhite: '#f8f9fa',
        // Keep old names as aliases so nothing breaks
        darkCharcoal: '#0c0c0c',
        electricIndigo: '#00b4c8',
      },
      fontFamily: {
        heading: ['Barlow Condensed', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-desk': "url('https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&q=80&w=1920')",
      }
    },
  },
  plugins: [],
}
