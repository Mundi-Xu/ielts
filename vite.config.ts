/// <reference types="vitest" />

import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  base: '/ielts/',
  server: {
    host: '0.0.0.0',
    port: 3333,
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    VueMacros({
      defineOptions: false,
      defineModels: false,
      plugins: {
        vue: Vue({
          script: {
            propsDestructure: true,
            defineModel: true,
          },
        }),
      },
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      // Enable page caching for better performance
      syncIndex: true,
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
      // Add caching for better performance
      cache: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
      // Add caching for better performance
      cache: true,
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),
  ],
  build: {
    // Improve build performance
    rollupOptions: {
      // Externalize large dependencies if needed
      external: [],
      output: {
        // Split vendor and app code
        manualChunks: {
          // Split large libraries into separate chunks
          vendor: ['vue', 'vue-router'],
          utils: ['@vueuse/core'],
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Use default minifier
    minify: 'esbuild',
    // Enable esbuild minification options
    esbuildOptions: {
      drop: ['console', 'debugger'],
    },
  },

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
