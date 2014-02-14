'use strict';

angular.module('beerlogApp')
  .factory('Beer', function ($resource) {
    return $resource('/api/beers/:id', {
      id: '@id'
    }, { //parameters default
      get: {
        method: 'GET'
      }
	  });
  })
  .factory('BeerBarcode', function ($resource) {
    return $resource('/api/beers/search/barcode/:barcode', {
      id: '@barcode'
    }, { //parameters default
      get: {
        method: 'GET',
        isArray: true
      }
    });
  });
