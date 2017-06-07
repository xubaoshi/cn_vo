const path = require('path');
const resolve = path.resolve;
const webpack = require('webpack');


const config = {
    entry: [
        'webpack-dev-server/client?http://localhost:8081',
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".scss"],
        modules: ['node_modules']
    },
    devServer: {
        hot: true,
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: []
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};

module.exports = config;