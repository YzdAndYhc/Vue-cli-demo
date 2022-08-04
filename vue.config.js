module.exports = {
  pages: {
    index: {
      // 修改默认配置入口
      entry: 'src/main.js',
    },
  },
  lintOnSave: false,  //关闭语法检查
  // 开启代理模式1
  // devServer: {
  //   proxy:'http://localhost:5000'
  // }
  //开启代理模式2
  devServer: {
    proxy: {
      '/hello':{
        target: 'http://localhost:5000',
        pathRewrite: {'^/hello':''},
        // ws: true,
        // changeOrign: true
      }
    }
  }
}
