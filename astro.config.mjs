// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';

export const baseConfig = {
  integrations: [solidJs()],
};

// https://astro.build/config
export default defineConfig({
  ...baseConfig,
  site: "https://toyskip725.github.io",
  base: "/blog",
});