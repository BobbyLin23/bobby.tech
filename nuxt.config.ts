import { presetUno } from 'unocss'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
  ],
  css: [
    '~/assets/css/main.css',
    '~/assets/css/prose.css',
    '@unocss/reset/tailwind.css',
  ],
  unocss: {
    presets: [
      presetUno(),
    ],
  },
})
