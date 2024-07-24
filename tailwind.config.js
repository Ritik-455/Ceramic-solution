/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Plus': "'Plus Jakarta Sans',sans-serif",
        'Manrope': "'Manrope', sans-serif"
      },
  
      fontSize: {
        xxl: "64px",
        "2xxl": "56px"
      },
      width: {
        "2xl": "62px",
      },
      height: {
        "2xl": "62px"
      },
      padding: {
        xxl: "140px"
      },
      maxWidth: {
        "2xxl": "229px",
        '4xl': "509px"
      },
      colors: {
        red: "#FF0000",
        pink: "#FFEBEB",
        darkpink: "#B400011A"
      },
      backgroundImage: {
        'hero': "url('./assets/images/webp/bg-hero.webp')",
      },
      screens: {
        'sm': '576px',

        'md': '768px',

        'lg': '992px',

        'xl': '1200px',

        '2xl': '1400px',
      },
      boxShadow: {
        '3xl': '0px 0px 12px 3px #B6B6B640',
        '4xl': '0px 2px 44px 3px #5757571A'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "12px"
        },
      },
    }
  },
  plugins: [],
}

