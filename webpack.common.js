const path = require('path');
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

module.exports = {
    entry: {
        vendors: './src/vendors.js',
        app: './src/main.js'
    },
    output: {
        filename: '[name].bundle.min.js',
        path: path.resolve(__dirname, "./dist"),
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([
            { from:'./src/img', to:'./img' },
            { from:'./src/media', to:'./media' },
            { from:'./src/fonts', to:'./fonts' },
            { from:'./src/opensearch.xml', to:'./opensearch.xml' },
        ]),
        new ModernizrWebpackPlugin({
            filename: "modernizr-bundle.js",
            minify: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.(gif|png|jp(e*)g|svg)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            //disable: true, // webpack@2.x and newer
                        },
                    }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "fonts/[name].[ext]",
                    },
                }]
            }
        ]
    },
    resolve: {
        alias: {
            //modernizr$: path.resolve(__dirname, "/.modernizrrc")
        },
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },
    // amd: {
    //     // Enable webpack-friendly use of require in Cesium
    //     toUrlUndefined: true
    // },
    node: {
        fs: 'empty'
    }
};
