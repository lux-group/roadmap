/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Suisse Works"', 'Georgia', 'serif'],
        body: ['"Suisse Intl"', 'system-ui', 'sans-serif'],
      },
      colors: {
        beige: '#f3f1ea',
        dark: '#363a45',
        border: 'rgba(0,0,0,0.1)',
      },
      boxShadow: {
        card: '0px 0.7px 1.4px rgba(0,0,0,0.07), 0px 1.9px 4px rgba(0,0,0,0.05), 0px 4.5px 10px rgba(0,0,0,0.05)',
      },
      borderRadius: {
        card: '8px',
      },
      fontSize: {
        hero: ['64px', { lineHeight: '1.0', letterSpacing: '-0.64px' }],
        section: ['42px', { lineHeight: '1.1', letterSpacing: '-0.42px' }],
      },
      width: {
        sidebar: '250px',
      },
    },
  },
  plugins: [],
}
