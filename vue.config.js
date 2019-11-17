const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // configureWebpack: config => {
  //   // webpack配置，值位对象时会合并配置，为方法时会改写配置
  //   Object.assign(config, {
  //     // 开发生产共同配置
  //     resolve: {
  //       alias: {
  //         '@': path.resolve(__dirname, './examples'),
  //         '~': path.resolve(__dirname, './packages')
  //       }
  //     }
  //   })
  // },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('examples'))
      .set('~', resolve('packages'))
    config.module
      .rule('tslint')
      .exclude.add(resolve('lib'))
      .end()
      .exclude.add(resolve('examples/docs'))
      .end()
    config.module
      .rule('ts')
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }
}
