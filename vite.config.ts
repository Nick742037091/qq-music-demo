import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')
// yarn add @types/node -D 以消除报错

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // 添加全局mixin
        additionalData: `@import '@/styles/mixin.less';`,
      },
    },
  },
  plugins: [vue()],
})
