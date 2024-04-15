import react from "@vitejs/plugin-react";

import { visualizer } from "rollup-plugin-visualizer";
import viteCompress from "vite-plugin-compression";
// import viteImagemin from "vite-plugin-imagemin";

import type { PluginOption } from "vite";

// 文件压缩
function compressMode(viteEnv: ViteEnvType): PluginOption[] {
  const plugins: PluginOption[] = [];
  const { VITE_COMPRESSION } = viteEnv;
  if (VITE_COMPRESSION.includes("gzip")) {
    plugins.push(
      viteCompress({
        algorithm: "gzip",
        ext: ".gz",
        deleteOriginFile: true
      })
    );
  }
  if (VITE_COMPRESSION.includes("brotli")) {
    plugins.push(
      viteCompress({
        algorithm: "brotliCompress",
        ext: ".br",
        deleteOriginFile: true
      })
    );
  }
  return plugins;
}

/* 关闭图片压缩，有些图片会失真 */
// 图片压缩
// function imageMode(): PluginOption[] {
//   return viteImagemin({
//     gifsicle: {
//       optimizationLevel: 7,
//       interlaced: false
//     },
//     // 无损压缩配置
//     optipng: {
//       optimizationLevel: 7
//     },
//     mozjpeg: {
//       quality: 20
//     },
//     // 有损压缩配置
//     pngquant: {
//       quality: [0.8, 0.9],
//       speed: 4
//     },
//     // svg 优化
//     svgo: {
//       plugins: [
//         {
//           name: "removeViewBox"
//         },
//         {
//           name: "removeEmptyAttrs",
//           active: false
//         }
//       ]
//     }
//   });
// }

function getPlugins(viteEnv: ViteEnvType): PluginOption[] {
  const { VITE_REPORT } = viteEnv;
  return [
    react(),
    compressMode(viteEnv),
    VITE_REPORT && visualizer({ filename: "report.html", gzipSize: true, brotliSize: true, open: true })
  ];
}

export { getPlugins };
