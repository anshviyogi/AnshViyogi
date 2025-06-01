/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#1a1a1a',
        accent: '#F97316', // orange-500
        textPrimary: '#FFFFFF',
        textSecondary: '#71717A', // zinc-500
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-geometric': 'linear-gradient(to bottom right, #000000, #18181B)',
      },
    },
  },
  plugins: [],
}
