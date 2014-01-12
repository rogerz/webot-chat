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

/* @param event, waterline model
   @param messages, waterline collection
*/
module.exports = function createBot(event, messages) {
  var webot = new Webot();

  webot.set('exit', {
    pattern: /^exit$/i,
    handler: function exitHandler(info) {
      info.delegate();
      return 'bye';
    }
  });

  webot.set('*', {
    pattern: /.*/,
    handler: function defaultHandler(info, next) {
      info.eventId = event.id;
      messages.parseInfo(info, next);
    }
  });

  return webot;
};
