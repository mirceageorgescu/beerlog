'use strict';

angular.module('beerlogApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'imageupload',
  'angucomplete'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      })
      .when('/settings', {
        templateUrl: 'partials/settings',
        controller: 'UserCtrl',
        authenticate: true
      })
      .when('/beer/name-search', {
        templateUrl: 'partials/beer/nameSearch',
        controller: 'BeerCtrl',
        authenticate: false
      })
      .when('/beer/name-search-fallback/:barcode', {
        templateUrl: 'partials/beer/nameSearchFallback',
        controller: 'BeerCtrl',
        authenticate: false
      })
      .when('/beer/barcode-search', {
        templateUrl: 'partials/beer/barcodeSearch',
        controller: 'BeerCtrl',
        authenticate: false
      })
      .when('/beer/:id', {
        templateUrl: 'partials/beer/beerDetail',
        controller: 'BeerCtrl',
        authenticate: false
      })
      .when('/user/:id', {
        templateUrl: 'partials/user/userDetail',
        controller: 'ProfileCtrl',
        authenticate: false
      })
      .when('/user/:id/beermap', {
        templateUrl: 'partials/user/beermap',
        controller: 'ProfileCtrl',
        authenticate: true
      })
      .when('/checkin/:id', {
        templateUrl: 'partials/checkin/addCheckin',
        controller: 'CheckinCtrl',
        authenticate: true
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
      
    // Intercept 401s and 403s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401 || response.status === 403) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  })
  .run(function ($rootScope, $location, Auth) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      
      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }
    });
  });