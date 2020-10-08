module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //ant-design-vue按需引入
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: 'css' }
    ]
  ]
}

