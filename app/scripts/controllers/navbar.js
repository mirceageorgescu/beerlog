'use strict';

angular.module('beerlogApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'My beers',
      'link': '/me/beers'
    },{
      'title': 'Add beer',
      'link': '/me/beers/add'
    }, {
      'title': 'Settings',
      'link': '/me/settings'
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
