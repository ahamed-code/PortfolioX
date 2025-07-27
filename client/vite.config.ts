import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "client", // ⬅️ This is where index.html is
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  build: {
    outDir: "../dist", // ⬅️ Pushes final build to root/dist
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
