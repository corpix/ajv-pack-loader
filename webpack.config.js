'use strict';
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const getModules = function() {
    let modules = {};
    fs
        .readdirSync('node_modules')
        .filter(
            function(x) {
                return ['.bin'].indexOf(x) === -1;
            }
        )
        .forEach(
            function(mod) {
                modules[mod] = 'commonjs ' + mod;
            }
        );
    return modules;
};

module.exports = {
    context: __dirname,
    devtool: false,
    entry: './sample.js',
    target: 'node',
    resolve: {extensions: ['.js', '.json']},
    externals: getModules,
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
