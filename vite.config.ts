import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { conversionEnv } from "./build/getEnv";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  const converseEnv = conversionEnv(env);
  return {
    base: converseEnv.VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    server: {
      host: "0.0.0.0",
      port: converseEnv.VITE_PORT,
      open: converseEnv.VITE_OPEN,
      cors: true,
      proxy: {
        "/api": {
          target: "https://simply.usemock.com",
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, "")
        }
      }
    },
    plugins: [react()],
    esbuild: {
      pure: converseEnv.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
    },

    build: {
      outDir: "dist",
      minify: "esbuild",
      sourcemap: false,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
        }
      }
    }
  };
});
