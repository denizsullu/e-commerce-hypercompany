/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      spacing: {
        '0.1': "1px"
      },
      colors: {
        "brand-color": "#4c3398",
        "primary-brand-color": "#5d3ebc",
        "secondary-brand-color": "#7849f7",
        'custom-lavender': '#F3F0FE'
      },
    },
  },
  plugins: [],
};
