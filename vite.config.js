import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [],
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tools: resolve(__dirname, 'tools/index.html'),
        'tool-word-counter': resolve(__dirname, 'tools/word-counter/index.html'),
        'tool-character-counter': resolve(__dirname, 'tools/character-counter/index.html'),
        'tool-case-converter': resolve(__dirname, 'tools/case-converter/index.html'),
        'tool-slug-generator': resolve(__dirname, 'tools/slug-generator/index.html'),
        'tool-json-formatter': resolve(__dirname, 'tools/json-formatter/index.html'),
        'tool-base64-encoder-decoder': resolve(__dirname, 'tools/base64-encoder-decoder/index.html'),
        'tool-qr-code-generator': resolve(__dirname, 'tools/qr-code-generator/index.html'),
        'tool-password-generator': resolve(__dirname, 'tools/password-generator/index.html'),
        'tool-image-compressor': resolve(__dirname, 'tools/image-compressor/index.html'),
        'tool-image-resizer': resolve(__dirname, 'tools/image-resizer/index.html'),
        'tool-image-converter': resolve(__dirname, 'tools/image-converter/index.html'),
        'tool-meta-description-generator': resolve(__dirname, 'tools/meta-description-generator/index.html'),
        services: resolve(__dirname, 'services/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
        terms: resolve(__dirname, 'terms/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      },
    },
  },
});
