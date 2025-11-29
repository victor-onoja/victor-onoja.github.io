import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { readdirSync, statSync, cpSync, existsSync, mkdirSync } from "node:fs";
import tailwindcss from "@tailwindcss/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Helper function to find all HTML files
function getHtmlEntries(dir) {
  const entries = {};
  const files = readdirSync(dir);

  files.forEach((file) => {
    const fullPath = join(dir, file);
    if (statSync(fullPath).isFile() && file.endsWith(".html")) {
      const name = file.replace(".html", "");
      entries[name] = resolve(fullPath);
    }
  });

  return entries;
}

// Plugin to copy static assets (like PDFs) to dist folder
function copyStaticAssets() {
  return {
    name: 'copy-static-assets',
    writeBundle() {
      const assetsSource = resolve(__dirname, 'assets');
      const assetsDest = resolve(__dirname, 'dist/assets');
      
      // Ensure destination directory exists
      if (!existsSync(assetsDest)) {
        mkdirSync(assetsDest, { recursive: true });
      }
      
      // Copy PDF and other non-bundled assets
      const staticFiles = ['Odoh_Victor_FullStack_Resume_2025.pdf'];
      staticFiles.forEach(file => {
        const src = join(assetsSource, file);
        const dest = join(assetsDest, file);
        if (existsSync(src)) {
          cpSync(src, dest);
          console.log(`✓ Copied ${file} to dist/assets/`);
        }
      });
    }
  };
}

export default defineConfig({
  base: "/",
  root: ".",
  build: {
    outDir: "./dist",
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "assets/[name][extname]",
      },
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  plugins: [tailwindcss(), copyStaticAssets()],
  server: {
    allowedHosts: ["bb29a53d6e40.ngrok-free.app"],
  },
});
