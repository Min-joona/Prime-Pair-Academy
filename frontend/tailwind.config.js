/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Baloo 2"', 'system-ui', 'sans-serif'],
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Ghefi (turtle) greens + glowing plastron yellow
        ghefi: { DEFAULT: '#2fa36b', dark: '#1e7a4d', shell: '#276749', belly: '#ffd54a' },
        // Lethe (snake) sage + neon tail
        lethe: { DEFAULT: '#7c9a6a', sage: '#9caf88', cream: '#f3ecd8', neon: '#39ff88' },
        ink: '#1f2430',
        paper: '#fbfaf5',
      },
      boxShadow: {
        pop: '0 6px 0 0 rgba(0,0,0,0.12)',
        soft: '0 10px 30px -12px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
};
