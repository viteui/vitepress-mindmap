import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mindmap/',
  plugins: [vue()],
  // 输出目录
  build: {
    outDir: '../docs/.vitepress/dist/mindmap'
  }
})
