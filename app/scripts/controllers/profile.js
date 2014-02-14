'use strict';

angular.module('beerlogApp')
  .controller('ProfileCtrl', function ($scope, User, Auth, $routeParams) {
    $scope.errors = {};
    $scope.user = User.get({id: $routeParams.id});
  });