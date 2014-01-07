/*
 * webot-chat
 * https://github.com/rogerz/webot-chat
 *
 * Copyright (c) 2014 Rogerz Zhang
 * Licensed under the MIT license.
 */

'use strict';

var Webot = require('webot').Webot;

module.exports = function createBot() {
  var webot = new Webot();
  webot.set('hi', 'Hi, I am chat webot');
  return webot;
};
