'use strict';

angular.module('beerlogApp')
  .controller('UserCtrl', function ($scope, User, Auth, $location) {
    $scope.errors = {};
    $scope.user = Auth.currentUser();
    $scope.myLocation = {};

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        $scope.$apply(function () {
          $scope.myLocation.lat = position.coords.latitude;
          $scope.myLocation.lng = position.coords.longitude;
        });
      });
    }

    $scope.changePassword = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
        });
      }
		};

    $scope.addBeer = function(form) {
      $scope.submitted = true;
  
      if(form.$valid) {
        Auth.updateUser({
          'beers' : {
            'name': $scope.user.beers.add.name,
            'location': {
              'lat': $scope.myLocation.lat,
              'lng': $scope.myLocation.lng,
            }
          }
        })
        .then( function() {
          // Beer added, redirect to beer list
          $location.path('/beers/mybeers');
        });
      }
    };
  });
