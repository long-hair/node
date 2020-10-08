module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000/',
        changeOrigin: true,
        // pathRewrite: {
        //   '/api': '/',
        // },
      },
      '/ajax': {
        target: 'http://localhost:8000/',
        changeOrigin: true,
        // pathRewrite: {
        //   '/api': '/',
        // },
      },
    },
  },
}
