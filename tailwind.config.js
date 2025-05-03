/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundImage: {
      'main-background-1': "url('@/images/Home/main-backgrounds/01.jpeg')",
      'main-background-2': "url('@/images/Home/main-backgrounds/02.jpg')",
      'logo-bg': "url('@/images/travel-logo.png')",
    },
  },
  plugins: [],
};
