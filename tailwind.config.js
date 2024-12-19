/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        tailwind: "#38BDF8",
        react: "#58c4dc",
        js: "#fbbc04",
        ts: "#3178c6",
        node: "#417e38",
        redux: "#764abc",
        mongo: "#00ed64",
        mongoose: "#800",
        postgreSQL: "#699eca",
        git: "#f14e32",
      },
    },
  },
  plugins: [],
};
