// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  env: {
    schema: {
      GOOGLE_MAPS_API_KEY: envField.string({ context: "server", access: "secret" })
    }
  }
});