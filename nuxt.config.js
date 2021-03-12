export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'testapp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.splice(0)
      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname, '@/pages/index/index.vue'),
          meta: {
            title: '首页'
          }
        },
        {
          path: '/login',
          component: resolve(__dirname, '@/pages/login/index.vue'),
          meta: {
            title: '登录'
          }
        }
      ])
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  /**
   * 安装less，less-loader
   */
  css: [
    '@/assets/styles/reset.less'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/request.js',
    '~/plugins/router.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  axios: {
    proxy: true
  },

  proxy: {
    '/api': {
      target: 'http://www.google.com',
      pathRewrite: {
        changeOrigin: true
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
