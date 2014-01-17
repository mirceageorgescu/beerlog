'use strict';

angular.module('beerlogApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
