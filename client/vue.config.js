module.exports = {
    configureWebpack: {
        module: {
            rules: [
             {
               resourceQuery: /raw/,
               type: 'asset/source',
             }
            ]
          },
    }
  }