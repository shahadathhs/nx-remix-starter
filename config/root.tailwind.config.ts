import type { Config } from 'tailwindcss'

const rootTailwindConfig = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
} satisfies Config

export default rootTailwindConfig
