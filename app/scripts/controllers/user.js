'use strict';

angular.module('beerlogApp')
  .controller('UserCtrl', function ($scope, User, Auth, $routeParams) {
    $scope.errors = {};
    

    $scope.user = User.get({id: $routeParams.id});

    $scope.changePassword = function(form) {
      $scope.user = Auth.currentUser();
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
  });
