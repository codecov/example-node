For testing


# [Codecov][0] NodeJS / Javascript Example

## Guide
### Travis Setup

Add the following to your `.travis.yml`:
```yml
language:
  node_js
install:
  - npm install -g codecov
script:
  - istanbul cover ./node_modules/mocha/bin/_mocha --reporter lcovonly -- -R spec
  - codecov
```
The first script line will change depending on your coverage collecting tool, see below.
### Produce Coverage Reports
### [Mocha](http://mochajs.org/) + [Blanket.js](https://github.com/alex-seville/blanket)
- Install [blanket.js](http://blanketjs.org/)
- Configure blanket according to [docs](https://github.com/alex-seville/blanket/blob/master/docs/getting_started_node.md).
- Run your tests with a command like this:

```sh
NODE_ENV=test YOURPACKAGE_COVERAGE=1 ./node_modules/.bin/mocha \
  --require blanket \
  --reporter mocha-lcov-reporter
codecov
```
### [Mocha](http://mochajs.org/) + [JSCoverage](https://github.com/fishbar/jscoverage)

Instrumenting your app for coverage is probably harder than it needs to be (read [here](http://www.seejohncode.com/2012/03/13/setting-up-mocha-jscoverage/)), but that's also a necessary step.

In mocha, if you've got your code instrumented for coverage, the command for a travis build would look something like this:
```sh
YOURPACKAGE_COVERAGE=1 ./node_modules/.bin/mocha test -R mocha-lcov-reporter
```

### [Istanbul](https://github.com/gotwarlost/istanbul)

**With Mocha:**

```sh
istanbul cover ./node_modules/mocha/bin/_mocha --report lcovonly -- -R spec && codecov
```

**With Jasmine:**

```sh
istanbul cover ./node_modules/jasmine/bin/jasmine.js
```

***With Karma:***

The `lcov.info` can be used as in other configurations. Some projects experienced better results using `json` output but it is no longer enabled by default. In `karma.config.js` both can be enabled:

```javascript
module.exports = function karmaConfig (config) {
    config.set({
        ...
        reporters: [
            ...
            // Reference: https://github.com/karma-runner/karma-coverage
            // Output code coverage files
            'coverage'
        ],
        // Configure code coverage reporter
        coverageReporter: {
            reporters: [
                // generates ./coverage/lcov.info
                {type:'lcovonly', subdir: '.'},
                // generates ./coverage/coverage-final.json
                {type:'json', subdir: '.'},
            ]
        },
        ...
    });
};
```

In `package.json` supply either `lcov.info` or `coverage-final.json` to `codecov`:

```javascript
{
  "scripts": {
    "report-coverage": "codecov",
    ...
  }
  ...
}
```

### [Nodeunit](https://github.com/caolan/nodeunit) + [JSCoverage](https://github.com/fishbar/jscoverage)

Depend on nodeunit and jscoverage:

```sh
npm install nodeunit jscoverage codecov --save-dev
```

Add a codecov script to "scripts" in your `package.json`:

```javascript
"scripts": {
  "test": "nodeunit test",
  "codecov": "jscoverage lib && YOURPACKAGE_COVERAGE=1 nodeunit --reporter=lcov test && codecov"
}
```

Ensure your app requires instrumented code when `process.env.YOURPACKAGE_COVERAGE` variable is defined.

Run your tests with a command like this:

```sh
npm run codecov
```

### [Poncho](https://github.com/deepsweet/poncho)
Client-side JS code coverage using [PhantomJS](https://github.com/ariya/phantomjs), [Mocha](http://mochajs.org/) and [Blanket](https://github.com/alex-seville/blanket):
- [Configure](http://mochajs.org/#running-mocha-in-the-browser) Mocha for browser
- [Mark](https://github.com/deepsweet/poncho#usage) target script(s) with `data-cover` html-attribute
- Run your tests with a command like this:

```sh
./node_modules/.bin/poncho -R lcov test/test.html && codecov
```

### [Lab](https://github.com/hapijs/lab)
```sh
istanbul cover ./node_modules/lab/bin/lab --report lcovonly  -- -l  && codecov
```

### [nyc](https://github.com/bcoe/nyc)
```javascript
{
  "scripts": {
    "report-coverage": "nyc report --reporter=text-lcov > coverage.lcov && codecov",
    ...
  }
  ...
}
```

### [Jest](https://facebook.github.io/jest/)
Add it in your package.json:
```javascript
"jest": {
  "coverageDirectory": "./coverage/",
  "collectCoverage": true
}
```

Jest will now generate coverage files into `coverage/`

Run your tests with a command like this:
```sh
jest && codecov
```

### JSX
There have been reports of [gotwarlost/istanbul](https://github.com/gotwarlost/istanbul) not working properly with JSX files, which provide inaccurate coverage results. Please try using [ambitioninc/babel-istanbul](https://github.com/ambitioninc/babel-istanbul).

### [Tape](https://github.com/substack/tape)

```
istanbul cover node_modules/.bin/tape ./test/*.js
```

Or simply run:

```
istanbul cover ./test/*.js
```

Or add in package.json:

```
"test": "istanbul cover test/*.js",
```

After test:

```
codecov --token=:token
```

## Caveats
#### Private Repo
Repository tokens are required for (a) all private repos, (b) public repos not using Travis-CI, CircleCI or AppVeyor. Find your repository token at Codecov and provide via `codecov --token=:token` or `export CODECOV_TOKEN=":token"`

## Common Pitfalls

### [`mock-fs`](https://github.com/tschaub/mock-fs)
When using `mock-fs` make sure to run `mock.restore()` when your tests are done running, or else the reports wont get generated on the CI.

## Support

### FAQ
- Q: Is there a TypeScript example?<br/>A: Yes [codecov/example-typescript](https://github.com/codecov/example-typescript).

1. More documentation at https://docs.codecov.io
2. Configure codecov through the `codecov.yml`  https://docs.codecov.io/docs/codecov-yaml

[0]: https://codecov.io/

We are happy to help if you have any questions. Please contact email our Support at [support@codecov.io](mailto:support@codecov.io)
