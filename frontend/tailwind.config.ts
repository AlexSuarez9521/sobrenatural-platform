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
        primary: {
          DEFAULT: '#003366',
          50: '#e6f0f9',
          100: '#cce0f3',
          500: '#003366',
          600: '#002a52',
          700: '#001a33',
        },
        accent: {
          DEFAULT: '#ff6600',
          50: '#fff0e6',
          500: '#ff6600',
          600: '#e55a00',
        },
      },
    },
  },
  plugins: [],
}
export default config
