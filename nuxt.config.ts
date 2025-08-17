export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2025-05-15",
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Nuxt question please",
    },
  },
});
