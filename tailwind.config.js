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
        mont: ["var(--font-mont)"],
        typo: ["var(--font-typo)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        greenVeryDark: "#0a2b26",
        greenDark: "#06423a",
        green: "#09695e",
        greenLight: "#b6debc",
      },
      // that is animation class
      animation: {
        fade: "fadeOut 0.4s ease-in-out",
      },

      // that is actual animation
      keyframes: () => ({
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      }),
      height: {
        "screen-64": "calc(100vh - 64px)",
      },
      backgroundImage: {
        bg: "url('/maze.jpeg')",
      },
    },
  },
  plugins: [],
};
