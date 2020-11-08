const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { TRUE } = require('node-sass');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.(sass|css)$/,
                use: [
                    miniCss.loader,
                    'css-loader?url=false',
                    'resolve-url-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }
        ]
    },
    plugins: [
        new miniCss({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            inject: false,
            pretty: true
        })
    ]
};