'use strict';

angular.module('beerlogApp')
  .controller('BeerCtrl', function ($scope, Beer, BeerBarcode, $location, $routeParams) {
    $scope.beer = Beer.get({id: $routeParams.id});
    $scope.barcode = $routeParams.barcode;

    $scope.searchBeerName = function(form) {
      if(form.$valid && $scope.searchStr) {
        $location.path('/beer/' + $scope.searchStr.originalObject._id);
      }
    };

    $scope.searchBeerBarcode = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        $scope.beer = BeerBarcode.get({barcode: $scope.barcode}).$promise.then(function(beer){
          if (beer.length) {
            $location.path('/beer/' + beer[0]._id);
          } else {
            $location.path('/beer/name-search-fallback/' + $scope.barcode);
          }
        });
      }
    };

    $scope.drinkBeer = function() {
      $location.path('/checkin/' + $scope.beer._id);
    };
  });