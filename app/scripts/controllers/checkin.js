'use strict';

angular.module('beerlogApp')
  .controller('CheckinCtrl', function ($scope, Beer, Auth, $routeParams, $location) {
    $scope.errors = {};
    $scope.myLocation = {};
    $scope.beer = Beer.get({id: $routeParams.id});

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        $scope.$apply(function () {
          $scope.myLocation.lat = position.coords.latitude;
          $scope.myLocation.lng = position.coords.longitude;
        });
      });
    }

    $scope.addCheckin = function(form) {
      $scope.submitted = true;
      var image = $scope.image || {resized: {}};
  
      if(form.$valid) {

        Auth.updateUser({
          'beers' : {
            '_id': $scope.beer._id,
            'name': $scope.beer.name,
            'location': {
              'lat': $scope.myLocation.lat,
              'lng': $scope.myLocation.lng,
            },
            'rating': $scope.rating,
            'image': image.resized
          }
        })
        .then( function() {
          // Beer added, redirect to user profile
          $location.path('/user/' + $scope.currentUser._id);
        });
      }
    };
  });