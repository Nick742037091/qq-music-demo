import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 开发环境提示eslint错误
import eslintPlugin from 'vite-plugin-eslint'
// yarn add @types/node -D 以消除报错

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        // 添加全局mixin
        additionalData: `@import '@/styles/mixin.less';`
      }
    }
  },
  plugins: [vue(), eslintPlugin()],
  server: {
    // proxy: {
    //   '/dev': {
    //     target: 'http://localhost:3333/',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/dev/, ''),
    //   },
    // },
  }
})
