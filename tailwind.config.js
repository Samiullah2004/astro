const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
 export default {
    content: [
        "./src/**/*.{astro,html,js,ts,jsx,tsx}",
        "./src/components/**/*.{astro,html,js,ts,jsx,tsx}",
        "./src/pages/**/*.{astro,html,js,ts,jsx,tsx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    darkMode: "class",
    plugins: [heroui()]
  }