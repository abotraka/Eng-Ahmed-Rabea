import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; 

const resolve = (p) => path.resolve(__dirname, p); 

export default defineConfig({
  plugins: [react()],

  base: "/Eng-Ahmed-Rabea/", 

  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
});