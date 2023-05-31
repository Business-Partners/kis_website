import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sassDts from "vite-plugin-sass-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sassDts()],
  server: {
    host: true,
    port: 8000,
    watch: {
      usePolling: true,
    },
  },
});
