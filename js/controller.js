'use strict';

/* Controllers */

var todotripController = angular.module('todotripController', []);

todotripController.controller('mapController', ['$scope', '$http',
        function($scope, $http) {
            /*$http.get('maps/maps.json').success(function(data) {
             $scope.maps = data;
             });*/

            //$scope.orderProp = 'age';
        }
    ]
);

todotripController.controller('informationController', ['$scope', '$routeParams',
        function($scope, $routeParams) {
            var $saison = [
                {name : "Printemps", value : "printemps"},
                {name : "Été", value : "ete"},
                {name : "Automne", value : "automne"},
                {name : "Hiver", value : "hiver"}
            ];
            var $type_hebergement = [
                {name : "Tente", value : "tente"},
                {name : "Camping-Car", value : "campingCar"},
                {name : "Mobile-Home", value : "mobileHome"},
                {name : "Appartement", value : "appartement"}
            ];
            $scope.saison = $saison;
            $scope.type_hebergement = $type_hebergement;
        }
    ]
);