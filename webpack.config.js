const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'sample-1': path.resolve('./src/sample-1/client.js'),
        'sample-2': path.resolve('./src/sample-2/client.js')
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            }, {
                test: /\.less$/,
                loader: 'style-loader!postcss-loader!less-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./src/sample-1/index.ejs'),
            filename: 'sample-1.html',
            inject: false,
            bundle: "sample-1.js"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('./src/sample-2/index.ejs'),
            filename: 'sample-2.html',
            inject: false,
            svgs: fs.readFileSync(path.resolve('./src/sample-2/icons/symbol-defs.svg'), 'utf-8'),
            bundle: "sample-2.js"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.html'),
            filename: 'index.html',
            inject: false
        })
    ]
}