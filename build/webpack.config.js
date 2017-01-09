const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, '..', 'src', 'browser.tsx')
    ],
    output: {
        filename: "bundle.js",
        publicPath: '/',
        path: path.resolve(__dirname, '../' , 'dist')
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        extensions: ['', ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [{
              test: /\.tsx?$/,
              // loader: 'awesome-typescript-loader',
              loader: 'react-hot-loader/webpack!awesome-typescript-loader'
            }, {
              test: /\.styl/,
              loader: 'style-loader!css-loader!stylus-loader'
            }],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors.[hash].js'),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'le-theme',
            inject: 'body',
            template: 'src/template.html'
        }),
    ],
};