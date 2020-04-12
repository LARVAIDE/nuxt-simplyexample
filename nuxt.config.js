export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        ws: true,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api": ""
        }
      },
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#409eff'
  },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/mock'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/, 'vue-echarts', 'resize-detector'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
