module.exports = {
  publicPath:'/pc/static',
  devServer: {
    open: true,
    proxy: {
      '/pc/api': {
        target: 'http://localhost:8000/',
        changeOrigin: true,
        // pathRewrite: {
        //   '/api': '/',
        // },
      },
      '/pc/ajax': {
        target: 'http://localhost:8000/',
        changeOrigin: true,
        // pathRewrite: {
        //   '/api': '/',
        // },
      },
    },
  },
}
