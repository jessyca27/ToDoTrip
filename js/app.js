'use strict';

/* App Module */

var todoTrip = angular.module('todoTrip', [
    'ngRoute',
    'todotripController'
]);

todoTrip.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/maps', {
                templateUrl: 'template/maps.html',
                controller: 'mapController'
            }).
            otherwise({
                redirectTo: '/maps'
            });
    }]);