'use strict';
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

let nodeModules = {};
fs
    .readdirSync('node_modules')
    .filter(
        function(x) {
            return ['.bin'].indexOf(x) === -1;
        }
    )
    .forEach(
        function(mod) {
            nodeModules[mod] = 'commonjs ' + mod;
        }
    );

module.exports = {
    context: __dirname,
    devtool: false,
    entry: './sample.js',
    target: 'node',
    resolve: {extensions: ['.js', '.json']},
    externals: nodeModules,
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
