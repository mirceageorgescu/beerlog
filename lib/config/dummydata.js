'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove(function() {
  Thing.create({
    name : 'Keep a beer log',
    info : 'Have all the beers you tried listed with rating, picture and location.',
    awesomeness: 10
  }, {
    name : 'Beer Map',
    info : 'See your beers on a map.',
    awesomeness: 10
  }, {
    name : 'Barcode scanner',
    info : 'Too lazy to type the beer name? Try our new barcode scanner.',
    awesomeness: 10
  }, {
    name : 'Another great feature',
    info : 'Our app is the best because of lorem ipsum.',
    awesomeness: 10
  }, function() {
      console.log('finished populating things');
    }
  );
});

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, function() {
      console.log('finished populating users');
    }
  );
});
