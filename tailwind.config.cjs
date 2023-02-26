/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "blue-20" : "#FEFBE9",
        // "blue-50" : "#EFE6E6",
        // "blue-100" : "#FEFBE9",
        "blue-500" : "#39395F",
        "primary-100" : "#FEFBE9",
        // "primary-300" : "#FFA6A3",
        // "primary-500" : "#FF6B66",
        "secondary-100" : "#E1EEDD",
        "seconday-400": "#DEEBDA",
        // "seconday-500": "#FFC132",
        "third-100" : "#61876E",
        "header-50" : "#F1E7E6",
        "header-100" : "#5D0000"
      },
      backgroundImage : (theme)=>({
        "gradient-yellowred" : "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily:{ 
        dmsans: ["DM Sans", "sans-serif"],
        montserrat : ["Montserrat", "sans-serif"]
    },
    content : {
      evlovetext : "url('./assets/EvolveText.png')",
      connecttext: "url('./assets/Connect.png)",
      abstractwaves : "url('./assets/AbstractWaves.png')",
      sparkles : "url('./assets/Sparkles.png')",
      circles : "url('./assets/Circles.png')",
    }
    },
    screens : {
      xs : "480px",
      sm : "768px",
      md: "1060px"
    }
  },
  plugins: [],
}