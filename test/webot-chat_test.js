'use strict';

var webotChat = require('../lib/webot-chat.js');
require('should');

describe('webot-chat', function () {
  it('should export object', function () {
    webotChat.should.be.type('object');
  });
});
