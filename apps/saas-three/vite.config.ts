import { defineConfig } from 'vite'

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { vitePlugin as remix } from '@remix-run/dev'

import { configuration } from './config/config'

declare module '@remix-run/node' {
  interface Future {
    v3_singleFetch: true
  }
}

export default defineConfig({
  root: __dirname,
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    nxViteTsPaths(),
  ],
  server: {
    port: configuration.port,
  },
})
