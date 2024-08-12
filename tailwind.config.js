/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '20px',
      maxWidth: {
        lg: '1180px',
      },
    },
    extend: {
      fontSize: {
        "custom-2xl": "28px",
        "custom-3xl": "32px",
        "custom-4xl": "45px",
        "custom-5xl": "66px",
      },
      colors: {
        "white-gray": "#ccc",
        "blue": "#5893FF",
        "off-black": "#111111",
        "off-white": "#070B1B",
        "light-white": '#897C79',
      },
      fontFamily: {
        'saira': ['Saira', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      lineHeight: {
        118: '118%',
        120: '120%',
        130: '130%',
        150: '150%',
        156: '156%',
      },
      boxShadow: {
        "common-btn": "0px 1px 15.5px 0px #4D4D4D",
        "nav": "0px 7px 10.9px 0px #0000002E",
      },
      backgroundImage: {
        'hero': 'url(../src/assets/images/webp/hero-bg.webp)',
        'explore': 'url("../src/assets/images/webp/explore-bg.webp")',
        'black-gradient': 'linear-gradient(180deg, rgba(7, 11, 27, 0) 7.35%, #111111 75.74%)',
      },
    },
  },
  plugins: [],
}
