const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
    target: 'node',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, '../' , 'dist')
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        extensions: ['', ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};