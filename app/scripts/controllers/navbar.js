'use strict';

angular.module('beerlogApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Name search',
      'link': '/beer/name-search',
      'authenticate': false
    }, {
      'title': 'Barcode search',
      'link': '/beer/barcode-search',
      'authenticate': false
    }];
    
    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login');
      });
    };
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
