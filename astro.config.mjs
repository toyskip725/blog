import { defineConfig } from 'astro/config';

import lit from "@astrojs/lit";

export const baseConfig = {
  integrations: [lit()],
};

// https://astro.build/config
export default defineConfig({
  ...baseConfig,
  site: "https://toyskip725.github.io",
  base: "/blog",
});