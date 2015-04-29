Example Node with Codecov
=========================

Learn more at [cainus/codecov.io](https://github.com/cainus/codecov.io)

### Add to `devDependencies`
```json
{
  ...
  "devDependencies": {
    "codecov.io": "",
    ...
  },
  ...
}
```

### Run codecov after test
```json
{
  ...
  "scripts": {
    "test": "istanbul cover node_modules/mocha/bin/_mocha && cat ./coverage/coverage.json | node_modules/codecov.io/bin/codecov.io.js"
  },
  ...
}
```
