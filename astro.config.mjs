import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  site: 'https://parroquia.com',
  vite: {
    resolve: {
      alias: { '@': path.resolve(__dirname, 'src') },
    },
  },
});
