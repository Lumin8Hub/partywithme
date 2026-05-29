import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Custom domains (via public/CNAME) run at the root, so base defaults to "/".
// If you ever publish to a project page like https://<user>.github.io/<repo>/,
// set BASE_PATH=/<repo>/ in the deploy workflow.
const basePath = process.env.BASE_PATH || "/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: basePath,
  server: {
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: true,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
