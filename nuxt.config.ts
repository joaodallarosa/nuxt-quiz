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
  colorMode: {
    preference: "dark",
  },
  runtimeConfig: {
    supabasePublishableKey: process.env.NUXT_SUPABASE_PUBLISHABLE_KEY,
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
    },
  },
});
