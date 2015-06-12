Example Node with Codecov
=========================

| [https://codecov.io][1] | [@codecov][2] | [hello@codecov.io][3] |
| ----------------------- | ------------- | --------------------- |

[1]: https://codecov.io/
[2]: https://twitter.com/codecov
[3]: mailto:hello@codecov.io
[4]: https://github.com/codecov/codecov-bash

- Repo tokens are required for:
  - all private repos
  - public repos not using Travis-CI, CircleCI or AppVeyor

# Option 1
> Using [Codecov Global Uploader][4]

**Step 1)** Send reports to Codecov

```yml
script:
  - istanbul cover node_modules/mocha/bin/_mocha
after_success:
  - bash <(curl -s https://codecov.io/bash)
```

> **Private Repos** `bash <(curl -s https://codecov.io/bash) -t :uuid-repo-token`

----

# Option 2
> Using [cainus/codecov.io](https://github.com/cainus/codecov.io)

**Step 1)** Add Codecov to dependancies

```json
"devDependencies": {
  "codecov.io": "git://github.com/cainus/codecov.io.git"
}
```

**Step 2)** Send reports to Codecov

```yml
env:
  global:
    - CODECOV_TOKEN: :uuid-repo-token
script:
  - istanbul cover node_modules/mocha/bin/_mocha
  - cat ./coverage/coverage.json | node_modules/codecov.io/bin/codecov.io.js
```
