import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 组件自动导入
import Components from "unplugin-vue-components/vite";
// import { ArcoResolver } from "unplugin-vue-components/resolvers";
// API自动导入
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  base: "/",
  server: {
    host: "0.0.0.0",
    port: "8181",
    strictPort: false,
    open: true,
    // 在此处编写代理规则
    proxy: {
      "/api": {
        target: "http://www.baidu.com",
        changeOrigin: true,
        rewrite: path => {
          return path.replace(/\/api/, "");
        },
      },
    },
  },
  build: {
    outDir: "dist", // 设置输出文件夹的名称为 "dist"
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dirs: ["src/api", "src/utils/**", "src/stores/**"],
    }),
    Components({
      // 指定组件所在文件夹的位置
      dirs: ["src/components"],
      // UI库解析器
      // resolvers: [ArcoResolver()],
      // 文件扩展
      extensions: ["vue"],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 公共scss
        additionalData: `@import "src/assets/styles/global.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
