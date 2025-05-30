// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"],
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    "@/assets/styles/variables.css",
    "~/assets/css/main.css",
    "vue-json-pretty/lib/styles.css",
  ],
  plugins: ["@/plugins/vue-json-pretty"],
  modules: [
    "@nuxtjs/tailwindcss",
    "unplugin-icons/nuxt",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    optimizeDeps: {
      include: ["encoding-japanese"],
    },
  },
});
