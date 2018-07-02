const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const FileManagerPlugin = require('filemanager-webpack-plugin');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const WebpackShellPlugin = require('webpack-shell-plugin');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',

    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },

    devServer: {
        contentBase: "./_site",
        index: "index.html",
        compress: false,
        port: 8080,
        open: true,
        //hot: true,
        watchOptions: {
            poll: true
        },
        watchContentBase: true
    },

    plugins: [
        new CopyWebpackPlugin([
            { from:'./src/templates', to:'./templates' },
        ]),
        new FileManagerPlugin({
            onEnd: {
                copy: [
                    { source: './dist/img', destination: './_site/img' },
                    { source: './dist/fonts', destination: './_site/fonts' },
                    { source: './dist/media', destination: './_site/media' },
                    { source: './dist/templates', destination: './_site/templates' },
                    { source: './dist/**/*.js', destination: './_site/js' },
                    { source: './dist/opensearch.xml', destination: './_site/opensearch.xml' }
                ],
            }
        }),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 2001,
            server: { baseDir: ['./_site'] }
        }),
        new WebpackShellPlugin({
            // plugin that runs a shell command before webpack's build starts.
            // In this case, runs the makedocs command.
            onBuildStart:['yarn generate-site'],
        })
    ],

    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    }
});
