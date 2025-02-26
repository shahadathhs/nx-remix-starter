import merge from 'deepmerge'
import type { Config } from 'tailwindcss'

import { createGlobPatternsForDependencies } from '@nx/react/tailwind'

import rootTailwindConfig from '../../config/root.tailwind.config'

export default merge(rootTailwindConfig, {
  content: ['./app/**/*.{js,jsx,ts,tsx}', ...createGlobPatternsForDependencies(__dirname)],
}) satisfies Config
