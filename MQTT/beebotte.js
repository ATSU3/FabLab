require('dotenv').config();

console.log(process.env.KEY1);

var bbt = require('beebotte');

var API_KEY = process.env.API_KEY;
var SECRET_KEY = process.env.SECRET_KEY;
var CHANNEL = process.env.CHANNEL;
var RESOURCE = process.env.RESOURCE;

var bclient = new bbt.Connector({apiKey: API_KEY, secretKey: SECRET_KEY});

bclient.publish(
  {channel: CHANNEL, resource: RESOURCE, data: {
    'resource': 'light', 'command': 'on', 'option': '30'
  }},
  function(err, res) {
});
