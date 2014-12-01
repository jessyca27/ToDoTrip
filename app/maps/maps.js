'use strict';

angular.module('todoTrip.maps', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/maps', {
    templateUrl: 'maps/maps.html',
    controller: 'MapsCtrl'
  });
}])

.controller('MapsCtrl', [function() {

}]);