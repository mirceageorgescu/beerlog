'use strict';

angular.module('beerlogApp')
  .controller('MyBeers', function ($scope, User, Auth, $routeParams, $location) {
    $scope.user = Auth.currentUser();
    $scope.myLocation = {};
    $scope.beerId = $routeParams.beerId;
    $scope.beer = {};

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        $scope.$apply(function () {
          $scope.myLocation.lat = position.coords.latitude;
          $scope.myLocation.lng = position.coords.longitude;
        });
      });
    }

    $scope.user.$promise.then(function () {
      $scope.beer = window._.find($scope.user.beers, function(beer) {
        return beer._id === $scope.beerId;
      });
    });

    $scope.addBeer = function(form) {
      $scope.submitted = true;
  
      if(form.$valid) {
        Auth.updateUser({
          'beers' : {
            'name': $scope.user.beers.add.name,
            'location': {
              'lat': $scope.myLocation.lat,
              'lng': $scope.myLocation.lng,
            },
            'image': $scope.image.resized
          }
        })
        .then( function() {
          // Beer added, redirect to beer list
          $location.path('/beers/mybeers');
        });
      }
    };
  });
