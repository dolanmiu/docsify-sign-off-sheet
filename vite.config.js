import { defineConfig } from "vite";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: [resolve(__dirname, "src/main.ts")],
      name: "docsifySignOffSheet",
      fileName: "docsify-sign-off-sheet",
      formats: ["iife"],
    },
    outDir: resolve(__dirname, "dist"),
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
