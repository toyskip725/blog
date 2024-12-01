// @ts-check
import { defineConfig } from 'astro/config';
import { baseConfig } from './astro.config.mjs';

import solidJs from '@astrojs/solid-js';


// https://astro.build/config
export default defineConfig({
  ...baseConfig,
  site: "http://localhost:4321",
  base: "",
});