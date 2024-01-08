/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // ...
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: 'class',
  theme: {  
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: " repeat(auto-fill, minmax(300px, 1fr))",
        18: " repeat(auto-fill, minmax(250px, 1fr))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
      colors: {
        "main-Color": "#f0f9ff",
        "gray-dark": "#273444",
        "gray-light": "#d3dce6",
        "btn-color":"#73C0FC"
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("flowbite/plugin"),
  ],
};
