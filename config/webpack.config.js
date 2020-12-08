const path = require('path'); //加载path模块
module.exports = {
    mode: 'production',//pro生成模式 development开发模式
    entry: { //多个入口
        index: './src/index.js',
        product: './src/product.js'
    }, //入口
    output: { //打包的出口
        path: path.resolve(__dirname, '../dist/'), //打包文件输出路径 绝对
        // filename: 'bundle.js'
        filename: '[name].[hash].js'
    }
}