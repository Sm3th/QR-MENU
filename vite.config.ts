import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// FitTrack web önyüzü 5173/4173 kullanıyor; çakışmayı önlemek için ayrı portlar.
export default defineConfig({
  plugins: [react()],
  server: { port: 5280, strictPort: true, open: true },
  preview: { port: 4280, strictPort: true },
});
