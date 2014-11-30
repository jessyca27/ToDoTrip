'use strict';

/* Controllers */

var todotripController = angular.module('todotripController', []);

todotripController.controller('mapController', ['$scope', '$http',
    function($scope, $http) {
        /*$http.get('maps/maps.json').success(function(data) {
            $scope.maps = data;
        });*/

        //$scope.orderProp = 'age';
    }]);

/*todotripController.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.phoneId = $routeParams.phoneId;
    }]);*/