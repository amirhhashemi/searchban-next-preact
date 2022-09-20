/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--color-background)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
        },
        gray: {
          DEFAULT: "var(--color-gray)",
          dark: "var(--color-gray-dark)",
        },
      },
      screens: {
        tablet: "640px",
        desktop: "880px",
      },
    },
  },
  plugins: [],
};
