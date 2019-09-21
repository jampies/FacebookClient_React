const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    target: 'web',
    entry: {
        app: ['./src/index']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/'
    },
    devtool: 'cheap-module-source-map',
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        poll: process.env.HOST_PLATFORM === 'win32'
    },
    devServer: {
        contentBase: './src',
        port: 8080,
        host: 'localhost',
        disableHostCheck: true,
        proxy: {
            '/api': 'http://api:8081'
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[local]___[hash:base64:5]',
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader?outputStyle=expanded',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /src\/index\.html$/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader?prefix=font/&limit=5000'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html"
        })
    ]
};
