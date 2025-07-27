import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    // OutDir will default to '<root>/dist', i.e., client/dist
    emptyOutDir: true,
  },
  server: {
    host: true,         // Makes dev server accessible via LAN
    port: 5173,         // Or another port if you like
    open: true,         // Opens in browser by default
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
