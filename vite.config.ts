import { defineConfig }  from 'vite';

export default defineConfig({
  // ... other options ...
  esbuild: {
    target: 'es6',
  },
});