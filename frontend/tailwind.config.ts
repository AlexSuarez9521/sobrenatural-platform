import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e8f0f8',
          100: '#c5d9f0',
          200: '#9fbfe6',
          300: '#79a5dc',
          400: '#5c91d4',
          500: '#3D85C6',
          600: '#145BAD',
          700: '#0F437F',
          800: '#0E3E76',
          900: '#0a2d56',
        },
        accent: {
          DEFAULT: '#8FCE00',
          50: '#f4fce3',
          100: '#e3f7b8',
          200: '#d0f28a',
          300: '#bded5c',
          400: '#8FCE00',
          500: '#7ab300',
          600: '#659900',
          700: '#507a00',
        },
        dark: '#212529',
        light: '#F7F7F7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
    },
  },
  plugins: [],
}
export default config
