# isismorph
[![Build Status](https://travis-ci.org/fun-stack/isismorph.svg?branch=master)](https://travis-ci.org/fun-stack/isismorph)

Tiny module for checking enviroment

### API
```javascript
var isismorph = require('isismorph');

// Node enviroment
isismorph.isNode() // => true
isismorph.isBrowser() // => false
isismorph.isWebWorker() // => false

// Browser enviroment
isismorph.isNode() // => false
isismorph.isBrowser() // => true
isismorph.isWebWorker() // => false

// WebWorker enviroment
isismorph.isNode() // => false
isismorph.isBrowser() // => false
isismorph.isWebWorker() // => true
```
