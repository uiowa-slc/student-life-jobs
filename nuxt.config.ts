// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  app: {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  googleFonts: {
    families: {
      Roboto: {
        wght: [100, 300, 400, 500, 700],
        ital: [100, 300, 400, 500, 700],
      },
      "Roboto+Condensed": {
        wght: [100, 300, 400, 500, 700],
        ital: [100, 300, 400, 500, 700],
      },
      "Zilla+Slab": {
        wght: [100, 300, 400, 500, 600, 700],
        ital: [100, 300, 400, 500, 600, 700],
      },
      "Antonio": {
        wght: [100, 300, 400, 500, 600, 700],
        ital: [100, 300, 400, 500, 600, 700],
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBase: "https://apps.studentlife.uiowa.edu/seo/",
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  plugins: ["~/plugins/fontawesome.js"],

  modules: ["nuxt-jsonld", "@nuxtjs/google-fonts"],
  image: { domains: ["content.uiowa.edu"] },
  build: {
    // have to transpile font awesome for some reason:
    // https://github.com/nuxt/framework/discussions/3823
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
    ],
  },
});
