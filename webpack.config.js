'use strict';
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: false,
    entry: './sample.js',
    resolve: {extensions: ['.js', '.json']},
    module: {
        loaders: [
            {
                test: /\.?schema.json$/,
                loader: './index.js'
            }
        ]
    },
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    plugins: []
};
