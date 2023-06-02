/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      colors: {
        primaryColor: "#8200ff",
        textColor: "#405161",
        formbgColor: "#f8f8f8",
      },
      minHeight: {
        sectionHeight: "600px",
      },
    },
  },
  plugins: [],
};
