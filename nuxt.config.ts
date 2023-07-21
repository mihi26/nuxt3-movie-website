// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:[
    "~/assets/style/global.scss",
  ],
  runtimeConfig: {
    apiBaseUrl: process.env.NUXT_API_BASE_URL,
    apiAccessToken: process.env.NUXT_API_ACCESS_TOKEN,
    public: {
      imgBaseUrl: process.env.NUXT_PUBLIC_IMG_BASE_URL
    }
  }
})
