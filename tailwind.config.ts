import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dwpdigital: {
          "primary": "#28A197",
          "secondary": "#303333",
          "accent": "#f3cc30",
          "neutral": "#221551",
          "base-100": "#FAFFFD",
          "info": "#53c0f3",
          "success": "#B0DB43",
          "warning": "#f3cc30",
          "error": "#e24056",
        },
      },
    ],
  },
}
export default config
