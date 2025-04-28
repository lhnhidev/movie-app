/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        pt: '16px',
        pp: '12px',
        tt: '20px',
        tp: '14px',
        lt: '24px',
        lp: '16px' 
      },
      screens: {
        phone: '320px',
        tablet: '480px',
        laptop: '768px',
        pc: '1280px'
      }
    },
  },
  plugins: [],
}