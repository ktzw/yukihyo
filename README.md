yukihyo
===========================================

Synopsis
---------------

This is an awesome project to make everyone happy!

Motivation
---------------

Write a short description of the motivation behind the creation and maintenance of the project.
This should explain why the project exists.

Code Example
---------------

### Use from JSX

```js
import "yukihyo.jsx";

class _Main {
    static function main(argv : string[]) : void
    {
        // Write simple usage here!
    }
}
```

### Use from node.js

```js
var yukihyo = require('yukihyo.common.js').yukihyo;

// Write simple usage here!
```

### Use from require.js

```js
// use yukihyo.amd.js
define(['yukihyo'], function (yukihyo) {

    // Write simple usage here!
});
```

### Use via standard JSX function

```html
<script src="yukihyo.js" type="text/javascript"></script>
<script type="text/javascript">
window.onload = function () {
    var classObj = JSX.require("src/yukihyo.js").yukihyo;
    var obj = new classObj();
});
</script>
```

### Use via global variables

```html
<script src="yukihyo.global.js" type="text/javascript"></script>
<script type="text/javascript">
window.onload = function () {
    var obj = new yukihyo();
});
</script>
```

Installation
---------------

```sh
$ npm install yukihyo
```

API Reference
------------------

Write reference here!

Development
-------------

## JSX

Don't be afraid [JSX](http://jsx.github.io)! If you have an experience of JavaScript, you can learn JSX
quickly.

* Static type system and unified class syntax.
* All variables and methods belong to class.
* JSX includes optimizer. You don't have to write tricky unreadalbe code for speed.
* You can use almost all JavaScript API as you know. Some functions become static class functions. See [reference](http://jsx.github.io/doc/stdlibref.html).

## Setup

To create development environment, call following command:

```sh
$ npm install
```

## Repository

* Repository: git:/github.com/ktzw/yukihyo.git
* Issues: 

## Run Test

```sh
$ grunt test
```

## Build

```sh
$ grunt build
```

## Generate API reference

```sh
$ grunt doc
```

Author
---------

* ktzw / kitazawa.yoshiro@gmail.com

License
------------

Public-Domain

Complete license is written in `LICENSE.md`.
