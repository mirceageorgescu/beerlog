'use strict';

var mongoose = require('mongoose'),
    Beer = mongoose.model('Beer');

exports.create = function(req, res) {
  var newBeer = new Beer(req.body);

  newBeer.save(function(err) {
    if (err) {
      return res.json(400, err);
    }

    res.send({ status: 'ok' });
  });
};

/**
 *  Get beer by id
 */
exports.idSearch = function (req, res, next) {
  var beerId = req.params.id;

  Beer.findById(beerId, function (err, beer) {
    if (err) return next(new Error('Failed to load Beer'));
  
    if (beer) {
      res.send(beer);
    } else {
      res.send(404, 'BEER_NOT_FOUND');
    }
  });
};


exports.nameSearch = function (req, res, next) {
  var name = req.params.name,
    re = new RegExp('^' + name, 'i');

  if (name.length < 3) {
    return next(new Error('Beer search needs at least 3 characters.'));
  }

  Beer.find({name: { $regex: re}}, function (err, beer) {

    if (err) return next(new Error('Failed to load Beer'));
  
    if (beer) {
      res.send(beer);
    } else {
      res.send(404, 'BEER_NOT_FOUND');
    }
  });
};

exports.barcodeSearch = function (req, res, next) {
  var barcode = req.params.barcode;

  Beer.find({barcodes: barcode}, function (err, beer) {

    if (err) return next(new Error('Failed to load Beer'));
  
    if (beer) {
      res.send(beer);
    } else {
      res.send(404, 'BEER_NOT_FOUND');
    }
  });
};