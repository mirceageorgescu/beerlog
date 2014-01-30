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
      .when('/beers/add', {
        templateUrl: 'partials/beers/add',
        controller: 'MyBeers',
        authenticate: true
      })
      .when('/beers/mybeers', {
        templateUrl: 'partials/beers/mybeers',
        controller: 'MyBeers',
        authenticate: true
      })
      .when('/beers/mybeers/:beerId', {
        templateUrl: 'partials/beers/mybeer',
        controller: 'MyBeers',
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