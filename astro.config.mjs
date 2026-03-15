// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  base: '/Scaleculus',
  site: 'https://n0cturneler.github.io/Scaleculus/',
  output: 'static',
    integrations: [starlight({
      title: 'Scaleculus',
            customCss: [
        // Relative path to your custom CSS file
        './src/styles/global.css',
      ],
    })],
});