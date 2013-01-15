'use strict';


// Declare app level module which depends on filters, and services
angular.module('main', ['main.filters', 'main.services', 'main.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/landing', {templateUrl: 'partials/landing.html', controller: LandingController});
    $routeProvider.otherwise({redirectTo: '/landing'});
  }]);
