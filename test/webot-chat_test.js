'use strict';

var bot = require('../lib/webot-chat.js')();
require('should');

describe('webot-chat', function () {
  it('should create instance of Webot', function () {
    bot.should.be.instanceof(require('webot').Webot);
  });
});
