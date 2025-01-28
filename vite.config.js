import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import baseUrl from "./src/baseUrl";

export default defineConfig({
  base: baseUrl,
  plugins: [react(), svgr()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
});
