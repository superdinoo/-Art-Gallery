import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "https://superdinoo.github.io/-Art-Gallery/",
  plugins: [react(), svgr()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
});
