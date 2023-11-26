import { defineConfig } from "vite";
import { URL, fileURLToPath } from "node:url";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import VueRouter from "unplugin-vue-router/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      //options
    }),

    vue(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core"],
      dts: false,
      dirs: ["./src/composables"],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: false,
    }),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
