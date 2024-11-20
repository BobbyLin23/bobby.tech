// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/image'],
  devtools: { enabled: true },
  devServer: {
    port: 3012,
  },
  css: ['~/assets/css/tailwind.css'],
  compatibilityDate: '2024-04-03',
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  colorMode: {
    preference: 'system',
    classSuffix: '',
  },
})
