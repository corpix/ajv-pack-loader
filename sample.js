'use strict';
const test = require('ava');
const validate = require('./sample.schema.json');

test('complete', function(t) {
    let result = validate({firstName: 'John', lastName: 'Doe'});
    t.is(result, true);
    t.is(result.errors, undefined);
});
