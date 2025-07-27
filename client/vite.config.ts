// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: "client", // Vercel builds from this folder
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  build: {
    outDir: "dist", // 🟢 Build output stays inside `client/dist`
    emptyOutDir: true,
  },
  server: {
    host: true,
    port: 5173,
    open: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
