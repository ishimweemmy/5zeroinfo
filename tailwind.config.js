/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        major: "white",
        coloring: "linear-gradient(to left, #ff4c31, #d60939, #ff4c31)",
        cblack: "#072366",
        colord: "#ff4c31",
        success: "#15ca20"
      },
      gridTemplateColumns: {
        powerCard: "80% 20%",
      }
    },
  },
  plugins: [],
};
