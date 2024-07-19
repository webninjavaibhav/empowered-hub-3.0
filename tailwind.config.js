/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      // Primary colors
      sapphire: "#001239",
      fluorite: "#12d3cf",
      topaz: "#0f93bc",

      // Grayscale colors
      white: "#ffffff",
      ash: "#f0f2f2",
      carbon: "#53585f",
      cool: "#333333",
      black: "#000000",

      // Accent colors
      peridot: "#ced642",
      citrine: "#f6921e",
      ruby: "#ed3340",
    },
    extend: {
      fontSize: {
        // Font sizes
        h1: "48px",
        h2: "40px",
        h3: "30px",
        h4: "25px",
        h5: "20px",
        h6: "18px",
        "body-text": "16px",
        "button-text": "16px",
        "filter-text": "14px",
      },
      fontWeight: {
        // Font weights
        h1: 800,
        h2: 600,
        h3: 600,
        h4: 600,
        h5: 700,
        h6: 500,
        body: 400,
        button: 700,
        filter: 400,
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
