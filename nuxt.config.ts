// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  css: ['/assets/css/main.css'],
  compatibilityDate: '2025-04-07',
  app: {
    head: { 
      title: 'Test project',
      meta: [
        {name: 'charset', content: 'utf-8'},
      ]
      // link: [
      //   { rel: 'stylesheet', href: 'css' }
      // ]
    }
  }
})