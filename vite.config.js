import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
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
