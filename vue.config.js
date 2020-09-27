// const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/styles/_variables.scss";'
      }
    }
  },
}
