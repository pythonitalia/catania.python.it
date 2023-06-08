/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["proxima-soft", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0070bc",
        secondary: "#3e0706",
      },
    },
  },
  plugins: [],
};
