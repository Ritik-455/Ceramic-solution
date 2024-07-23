/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Plus': "'Plus Jakarta Sans',sans-serif",
      },
      fontSize: {
        xxl: "64px",
        "2xxl":"56px"
      },
      colors: {
        red: "#FF0000",
        pink: "#FFEBEB",
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
      maxWidth: {
        '4xl': "509px"
      },
      boxShadow: {
        '3xl': '0px 0px 12px 3px #B6B6B640',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
        },
      },
    }
  },
  plugins: [],
}

