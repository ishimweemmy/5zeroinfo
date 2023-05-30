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
        success: "#15ca20",
        darkblue: "#002d5b",
        darkblue2: "#493773",
        primred: "#e31f36",
        secondred: "#e62335",
        primviolet: "#735dba",
        custblack: "#1f1f1f",
      },
      fontFamily: {
        muli: ["Mulish", "sans-serif"],
      },
      backgroundImage: () => ({
        img1: "url('./src/assets/section_bg01.png')",
        "footer-bg": "url('./src/assets/footer_bg.png')",
        banner: "url('./src/assets/banner.svg')",
      }),
      gridTemplateColumns: {
        powerCard: "80% 20%",
      },
    },
  },
  plugins: [],
};
