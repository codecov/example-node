# [Codecov](https://codecov.io) NodeJS / JavaScript Example
[![codecov](https://codecov.io/github/codecov/example-node/branch/main/graph/badge.svg)](https://app.codecov.io/github/codecov/example-node)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fcodecov%2Fexample-node.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fcodecov%2Fexample-node?ref=badge_shield)

This example repository shows how Codecov can be integrated with a simple Node.js project. It uses **GitHub Actions** as the CI/CD provider and the built-in [Node.js test runner](https://nodejs.org/api/test.html) with [`c8`](https://github.com/bcoe/c8) as the coverage provider.

## Running locally

```sh
npm install
npm test
```

This runs the test suite and writes an `lcov` coverage report to `coverage/` along with a JUnit report at `junit.xml`.

## Links
- [Quick Start](https://docs.codecov.com/docs/quick-start)
- [GitHub Tutorial](https://docs.codecov.com/docs/github-tutorial)
- [Community Boards](https://community.codecov.io)
- [Support](https://codecov.io/support)
- [Documentation](https://docs.codecov.io)

## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fcodecov%2Fexample-node.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fcodecov%2Fexample-node?ref=badge_large)
