/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        poppins: ["Poppins"],
        inter: ["Inter Tight"],
        dmsans: ["DM Sans"],
        cursive: ["Parisienne"],
      },
      boxShadow: {
        'custom-light': '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
        'custom-dark': '8px 8px 12px 1px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};
