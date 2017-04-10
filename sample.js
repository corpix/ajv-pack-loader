'use strict';
const validate = require('./sample.schema.json');

console.log(
    validate(
        {firstName: 'John', lastName: 'Doe'}
    )
);
