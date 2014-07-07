# syn sync

Get svn info object synchronously.

[![Build Status](https://travis-ci.org/afc163/svn-sync.png)](https://travis-ci.org/afc163/svn-sync)
[![NPM version](https://badge.fury.io/js/svn-sync.png)](http://badge.fury.io/js/svn-sync)

---

## Install

```bash
$ npm install svn-sync --save
```

## Usage

```js
var svnSync = require('svn-sync');

var info = svnSync('/hom/admin/project/svn-example/');
console.log(info);  // get an object like below
```

```json
{
  path: '.',
  workingCopyRootPath: '/Users/afc163/Projects/example',
  url: 'http://svn.example.net/svn/example/branches/xxxxx_CP_xxxxx_example',
  repositoryRoot: 'http://svn.example.net/svn/example',
  repositoryUuid: '689e103a-317b-4a97-82ac-9953e9851bb9',
  revision: '50',
  nodeKind: 'directory',
  schedule: 'normal',
  lastChangedAuthor: 'afc163',
  lastChangedRev: '50',
  lastChangedDate: '2014-07-03 14:39:06 +0800 (Thu, 03 Jul 2014)'
}
```

## License

The MIT License (MIT)
