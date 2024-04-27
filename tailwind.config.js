/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        'custom-regular': 400,
        'custom-semibold': 500,
        'custom-bold': 600,
        'custom-extrabold': 700,
      },
      
      colors: {
        'primary': '#4770FF',
        'black': '#1A1F2C',
        'light-black': '#576076',
        'white': '#ffffff',
        'dark-theme-bg': '#000',
        'dark-theme-black': '#0E1018',
        'dark-theme-white': '#f0f2f5',
        'dark-theme-light-white': 'rgba(240, 242, 245, 0.7)',
        'paragraph': '#616670',
        'background': '#F0F2F5',
        'border': '#DBDFE5',
      },
      fontSize: {
        'custom': '16px',
      },
      lineHeight: {
        'custom': '1.6em',
      },
      transitionProperty: {
        'custom': 'all 0.1s ease-out 0s',
      },
    },
  },
  plugins: [],
};
