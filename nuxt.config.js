export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#59c5c2' },
  /*
   ** Global CSS
   */
  css: ['~/assets/styles/index.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-particles', ssr: false, mode: 'client' },
    { src: '~/plugins/global-components', ssr: false, mode: 'client' },
    { src: '~/plugins/vue-scrolls', ssr: false, mode: 'client' },
    // { src: '~/plugins/aos', ssr: false, mode: 'client' },
    { src: '~/plugins/vee-validate', ssr: false, mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/apollo',
    ['cookie-universal-nuxt', { alias: 'cookies' }]
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api-portfolio3.herokuapp.com/graphql',
        getAuth: () => 'Bearer token'
      }
      // tokenName: 'token'
    }
    // authenticationType: ''
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    defaultAssets: { icons: 'fa' },
    customVariables: ['~/assets/variables.scss']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
