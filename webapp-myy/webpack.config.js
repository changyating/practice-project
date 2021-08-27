/*
 * @Descripttion: 
 * @Author: Chang YaTing [2210993284@qq.com]
 * @Date: 2021-08-13 16:51:24
 * @LastEditors: Chang YingYing [2210993284@qq.com]
 * @LastEditTime: 2021-08-21 15:41:53
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// 获取绝对路径
const resolve = dir => path.resolve(__dirname,dir);

module.exports = {
    mode: 'development',
    // Webpack入口文件
    entry: {
        index:'./src/pages/index',
        destination:'./src/pages/destination',
        details:'./src/pages/details',
        personal:'./src/pages/personal'
    },
    // webpack输出路径
    output: {
        // 输出的目录
        path: resolve('dist'),
        // 输出的文件名
        filename:'js/[name].js'
    },
    // source-map,调试出错的时候，直接定位到原始代码，而不是转换后的代码
    devtool:'cheap-module-eval-source-map',
    resolve: {
        // 自动补全
        extensions: ['.js'],
        // 路径别名
        alias: {
            api: resolve('src/api'),
            icons: resolve('src/assets/icons'),
            styles: resolve('src/assets/style'),
            components: resolve('src/components'),
            pages: resolve('src/pages'),
            utils: resolve('src/utils')
        }
    },
    // 不同类型模块的处理规则
    module: {
        rules: [
            // css
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            // 模板文件
            {
                test:/\.art$/,
                loader:'art-template-loader'
            },
            // 图片
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[ext]',
                    esModule: false
                }                
            },
            // 字体文字
            {
                test:/\.(woff2?|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        // 自动将依赖注入html模板，并输出最终的html文件到目标文件夹
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/pages/index/index.art',
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            filename:'destination.html',
            template:'./src/pages/destination/destination.art',
            chunks:['destination']
        }),
        new HtmlWebpackPlugin({
            filename:'personal.html',
            template:'./src/pages/personal/personal.art',
            chunks:['personal']
        }),
        new HtmlWebpackPlugin({
            filename:'details.html',
            template:'./src/pages/details/details.art',
            chunks:['details']
        }),
    ]
}