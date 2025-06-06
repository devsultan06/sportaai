/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      grey: "#BFBFBF",
      black06: "#0F0F0F",
      black10: "#1A1A1A",
      red45: "#E50000",
      grey60: "#999999",
      black15: "#262626",
      bermuda: "#78dcca",
    },
    backgroundImage: {
      "navbar-head-image": "url('/images/StreamVibe-Home-Background.png')",
      "movie-show-bg": "url('/images/movieshowbg.png')",
    },

    fontSize: {
      xl: "2rem",
      xxl: "2.5rem",
    },

    fontFamily: {
      metropolis: ["Metropolis", "sans-serif"],
      metropolisBold: ["MetropolisBold", "sans-serif"],
      Nabla: ["Nabla", "system-ui"],
      poppins: ["Poppins", "sans-serif"],
      sora : ["Sora", "sans-serif"],
      inter : ["Inter", "sans-serif"],
    },
    extend: {
      screens: {
        tablet: "-800px",
        laptop: "1024px",
        desktop: "1280px",
        "max-590": { max: "590px" },
        "max-600": { max: "600px" },
        "max-800": { max: "800px" },
        "max-860": { max: "860px" },
        "max-920": { max: "920px" },
        "max-990": { max: "990px" },

        "max-1075": { max: "1075px" },
      },
    },
  },
  plugins: [],
};
