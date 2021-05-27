# wrike-ist

A GitHub action to make using wrike as a task management tool easier. It does some of the convenient things GitHub does for Issues:

* link pull request to issue when the pull request mentions the issue
* merging a pull request closes the linked issue automatically

## Setup

Here's a sample workflow:

```yaml
name: 'Update wrike'

on:
  pull_request:
    types:
      - closed # for closing tasks on merge
      - edited # link in description might be updated
      - opened # yay new pr
      - reopened # someone must've whoops'ed a pr
      # - synchronize # new commit to pr

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: valerauko/wrike-ist@v1
        env:
          WRIKE_TOKEN: ${{ secrets.WRIKE_TOKEN }}
```

### wrike token

Currently this action needs a permanent token as it does not support the wrike OAuth workflow. You can issue one [from the Apps & Integrations menu](https://help.wrike.com/hc/en-us/community/posts/211849065-Get-Started-with-Wrike-s-API).

Once you have a token, add it to your repository at Settings > Secrets.
