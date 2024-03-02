import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class", "selector"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/icons/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: "#a7a7a7",
        dark: "#666666"
      }
    },
  },
  plugins: [],
}
export default config
