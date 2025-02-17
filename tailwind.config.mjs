/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",  // ✅ Correct path for Next.js 13+ (app router)
    "./pages/**/*.{js,ts,jsx,tsx}",   // ✅ If using pages router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
