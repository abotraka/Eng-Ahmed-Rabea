import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // 1. استيراد path

// تعريف دالة حل المسارات
const resolve = (p) => path.resolve(__dirname, p); 

export default defineConfig({
  plugins: [react()],
  
  // 2. تصحيح المسار الأساسي (مهم جداً للنشر على GitHub Pages)
  base: "/Eng-Ahmed-Rabea/", 
  
  // 3. حل مشكلة المسار المختصر @/ التي أدت إلى فشل الـ Build
  resolve: {
    alias: {
      "@": resolve("./src"), // @/ = مجلد src
    },
  },
})