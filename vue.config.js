const sass = require('sass')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: sass,
      },
    },
  },
  chainWebpack(config){
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  }
}
