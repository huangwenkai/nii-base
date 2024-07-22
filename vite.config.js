import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 组件自动导入
import Components from "unplugin-vue-components/vite";
// UI库自动导入（如果需要其他，请自行安装）
import { ArcoResolver } from "unplugin-vue-components/resolvers";
// API自动导入
import AutoImport from "unplugin-auto-import/vite";

// 打包分析
import { visualizer } from "rollup-plugin-visualizer";

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
        target: "http://127.0.0.1:3000",
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
      dirs: ["src/api", "src/hooks", "src/utils/**", "src/stores/**"],
    }),
    Components({
      // 指定组件所在文件夹的位置
      dirs: ["src/components"],
      // UI库解析器
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
      // 文件扩展
      extensions: ["vue"],
    }),
    // 打包之后打开分析页面
    visualizer({
      open: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 公共scss参数
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
