import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    paths: {
      base: '/feature/mts-shop-smarthome'
    },
    adapter: adapter({
      fallback: 'index.html',
    }),
  }
};

export default config;
