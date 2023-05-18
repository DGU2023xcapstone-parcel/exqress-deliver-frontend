import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@src", replacement: resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
    ],
  },
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        sw: "./sw.js",
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target:
          "http://k8s-default-backdeli-ecf39846be-65120739.ap-northeast-2.elb.amazonaws.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
      },
    },
  },
  plugins: [react(), tsconfigPaths()],
});
