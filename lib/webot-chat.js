/*
 * webot-chat
 * https://github.com/rogerz/webot-chat
 *
 * Copyright (c) 2014 Rogerz Zhang
 * Licensed under the MIT license.
 */

'use strict';

var Webot = require('webot').Webot;
var util = require('util');

module.exports = function createBot(event) {
  var webot = new Webot();

  webot.set('exit', {
    pattern: /^exit$/i,
    handler: function exitHandler(info) {
      info.delegate();
    }
  });

  webot.set('*', {
    pattern: /.*/,
    handler: function defaultHandler() {
      return util.format('[%s] copy', event.name || 'chat');
    }
  });

  return webot;
};
