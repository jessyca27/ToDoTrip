'use strict';

// Declare app level module which depends on views, and components
angular.module('todoTrip', [
  'ngRoute',
  'ngFx',
  'todoTrip.maps',
  'todoTrip.information'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/maps'});
}]);
