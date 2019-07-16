module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/outrdevents-demo/'
      : '/'    
  }

  module.exports = { 
    configureWebpack: { 
        optimization: {
          splitChunks: {
            chunks: 'all'
          }
        } 
    } 
  }

module.exports ={
chainWebpack: (config) => {
  config.plugins.delete(prefetch)
}
}