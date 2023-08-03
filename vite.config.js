import { fileURLToPath, URL } from 'node:url'
import Inspect from 'vite-plugin-inspect'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy';
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

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
    }),
    Components({
      dirs: ['src/components',"src/layout/components","src/views"],
      include: [/\.vue$/, /\.vue\?vue/],
    }),
    AutoImport({
      imports: ['vue']
    }),
    Inspect(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.vue', '.json'],
  }
})
