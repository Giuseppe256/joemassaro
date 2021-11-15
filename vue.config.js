module.exports = {
  pluginOptions: {
    sitemap: {
      urls: [
        'https://joemassaro.studio/',
        'https://joemassaro.studio/projects',
        'https://joemassaro.studio/contact'
      ]
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
    }
  }