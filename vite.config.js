import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/*": "./src/*",
    },
  },
  plugins: [react()],
  define: {
    'process.env': import.meta.env,
  },
});
