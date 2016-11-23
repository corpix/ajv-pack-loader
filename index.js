'use strict';
const Ajv = require('ajv');
const pack = require('ajv-pack');
const requireFromString = require('require-from-string');

module.exports = function(source, sourceMap) {
    this.cacheable();

    const callback = this.async();
    const ajv = new Ajv({ sourceCode: true });
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
