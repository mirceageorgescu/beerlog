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
  });
