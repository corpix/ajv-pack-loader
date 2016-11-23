'use strict';
const Ajv = require('ajv');
const pack = require('ajv-pack');
const qs = require('querystring');
const requireFromString = require('require-from-string');

module.exports = function(source, sourceMap) {
    this.cacheable();

    let query = JSON.parse(this.query.substr(1));
    query.sourceCode = true;

    const callback = this.async();
    const ajv = new Ajv(query);
    let schema = ajv.compile(requireFromString(source));

    callback(
        null,
        pack(
            ajv,
            schema
        ),
        sourceMap
    );
};
