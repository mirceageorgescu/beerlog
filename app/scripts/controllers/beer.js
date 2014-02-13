'use strict';

angular.module('beerlogApp')
  .controller('Beer', function ($scope, Beer, $location, $routeParams) {

    $scope.beer = Beer.get({id: $routeParams.id});

    console.log($scope.beer);

    $scope.searchBeer = function(form) {
      if(form.$valid && $scope.searchStr) {
        $location.path('/beer/' + $scope.searchStr.originalObject._id);
      }
    };

    $scope.drinkBeer = function() {
      window.alert('TODO');
    };
  });
