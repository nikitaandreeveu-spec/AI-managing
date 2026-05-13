/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        randstad: {
          blue: '#003087',
          lightblue: '#0057B8',
          navy: '#001A4E',
          grey: '#F4F5F7',
          darkgrey: '#6B7280',
          charcoal: '#1F2937',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
