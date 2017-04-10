ajv-pack-loader
---------------

[![Build Status](https://travis-ci.org/corpix/ajv-pack-loader.svg?branch=master)](https://travis-ci.org/corpix/ajv-pack-loader)

This is a webpack loader for [ajv-pack](https://github.com/epoberezkin/ajv-pack) that converts a JSON schema into JavaScript validation function.

# Usage example

Add a loader into your webpack config:

``` javascript
{
    loaders: [
        {
            test: /\.?schema.json$/,
            loader: 'ajv-pack-loader'
        }
    ]
}
```

Import your schema in the project code:

``` javascript
import validate from 'app/external/microformats/schema.json';
```

> Signature of a validate function is `validate(data, dataPath, parentData, parentDataProperty, rootData)`

Validate your data:

``` javascript
validate(
    {
        user: {
            name: 'John',
            surname: 'Doe'
        }
    }
); // true || false
```

Access validation errors:

> This is a bit strange, but `.errors` attribute will become available after `validate(...)` invocation.

``` javascript
console.log(validate.errors);
```

# License

[MIT](/LICENSE)
