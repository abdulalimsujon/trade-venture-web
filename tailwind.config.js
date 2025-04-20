/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    extend: {
      colors: {
        main: "#1C1C1C",
        primary: "#17C550",
        secondary: "#032D2C",
        text: "#494949",
        white: "#ffffff",
        subText: "#777",
        border: "#eaeaea",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
