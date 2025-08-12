/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1E2B",
          navy2: "#123147",
          steel: "#102332",
          gray: "#8EA3B0",
          light: "#0F2433"
        }
      },
      borderRadius: { '2xl': '1.25rem' }
    },
  },
  plugins: [],
};
