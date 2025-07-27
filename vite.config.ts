import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// ✅ Vite config optimized for Vercel deployment
export default defineConfig({
  root: "client", // Vite project root (your frontend lives in /client)
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  build: {
    outDir: "dist", // Output directory relative to root (i.e., client/dist)
    emptyOutDir: true, // Clean old dist files before build
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
