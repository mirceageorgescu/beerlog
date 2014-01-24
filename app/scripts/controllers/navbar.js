'use strict';

angular.module('beerlogApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'My beers',
      'link': '/beers/mybeers',
      'authenticate': true
    },{
      'title': 'Add beer',
      'link': '/beers/add',
      'authenticate': true
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
