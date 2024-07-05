import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $lib: '/src/lib',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
					@import 'src/styles/variables.scss';
				`,
      },
    },
  },
});
