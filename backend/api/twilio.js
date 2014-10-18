// Libs
var request = require('request');

// Config
var config = require('../config.js');

exports.sendtext = function(number, message) {
  var url = config.TWILIO_API_URL + '/accounts/';
  target += config.TWILIO_API_ACCOUNTSID + '/message';
  request.post(url, {
    form: {
      From: "1234567890",
      To: number,
      Body: message
    }
  }
}
