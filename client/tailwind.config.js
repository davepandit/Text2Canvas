/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        customBlue: "#040B35",
        customButton: "#654FF0",
        customButton2: "#1977F2",
        customBG: "#F0F3F8",
        customFooter: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
