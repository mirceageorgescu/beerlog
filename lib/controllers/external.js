'use strict';
var ba = require('beer-advocate-api');

exports.search = function (req, res, next) {
  var beerName = req.params.beerName;

  if (beerName) {
    ba.beerSearch(beerName, function(beers) {
      res.send(beers);
    });
  } else {
    res.json(400, 'Y U NO GIVE BEERNAME?');
  }

};