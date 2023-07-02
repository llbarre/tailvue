import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    
     // https://github.com/hannoeru/vite-plugin-pages
     Pages(),

     // https://github.com/antfu/unplugin-auto-import
     AutoImport({
       imports: [
         'vue',
         'vue-router',
         '@vueuse/core',
       ],
       dts: false,
       dirs: [
         './src/composables',
       ],
     }),

     // https://github.com/antfu/vite-plugin-components
    Components({
      dts: false,
    }),
 
  ],
});
