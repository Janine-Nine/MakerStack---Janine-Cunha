import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C4FF57',
        secondary: '#597048',
        background: '#F5F7F0',
        accent: '#FF9E6E',
        muted: '#8D9999',
        dark: '#4A5452',
        kraft: '#D6B48B',
        blueSoft: '#7BB3B0',
      },
    },
  },
  plugins: [],
}
export default config
