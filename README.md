# webot-chat [![Build Status](https://secure.travis-ci.org/rogerz/webot-chat.png?branch=master)](http://travis-ci.org/rogerz/webot-chat)

An example of creating [webot](https://github.com/rogerz/webot) instance for [wechat-webot](https://github.com/rogerz/wechat-webot)

## Getting Started
Install the module with: `npm install webot-chat`

```javascript
var bot = require('webot-chat')();
```

## Examples

```javascript
var express = require('express');
var bot = require('webot-chat')();
var app = express();

app.use(express.query());
app.use('/wechat', require('wechat-webot')('token', bot));
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

### 0.0.0

* initial release

## License
Copyright (c) 2014 Rogerz Zhang. Licensed under the MIT license.
