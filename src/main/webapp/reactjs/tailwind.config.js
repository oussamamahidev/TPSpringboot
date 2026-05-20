/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Space Grotesk", "system-ui", "sans-serif"],
        display: ["Bebas Neue", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 20px 60px -40px rgba(15, 23, 42, 0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "fade-up": "fadeUp 500ms ease-out both",
        "fade-up-delayed": "fadeUp 650ms 120ms ease-out both",
        shimmer: "shimmer 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
