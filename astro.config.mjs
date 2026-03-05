// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/Scaleculus',
  site: 'https://n0cturneler.github.io/Scaleculus/',
  output: 'static',
});