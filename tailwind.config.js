/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFB43A',
          dimmed: '#FFB43A80',
        },
        secondary: '#363740',
        dark: {
          DEFAULT: '#1C1C27',
          light: '#363740',
        },
        white: {
          DEFAULT: '#FFFFFF',
          heavy: '#494952',
          dimmed: '#77777d',
        },
        error: '#EF4444',
        success: '#22C55E',
      },
    },
  },
  plugins: [],
};
