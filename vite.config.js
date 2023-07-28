import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  transpileDependencies: true,
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/style/index.scss";`,
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    legacy({
      targets: [
        "defaults"
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.vue', '.json'],
  }
})
