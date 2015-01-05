'use strict';

angular.module('todoTrip.maps', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/maps', {
            templateUrl: 'maps/maps.html',
            controller: 'MapsCtrl'
        });
    }])

    .directive('vmaps', function($window){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                $(element).vectorMap({
                    map: 'france_fr',
                    hoverOpacity: 0.5,
                    hoverColor: '#EC0000',
                    backgroundColor: '#dcf6ff',
                    color: '#6aa1fb',
                    borderColor: '#000000',
                    selectedColor: '#EC0000',
                    enableZoom: true,
                    onRegionClick: function(element, code, region)
                    {
                        $window.location.href = '#/information/'+code+'/'+region;
                    }
                });
            }
        }
    })

    .controller('MapsCtrl', ['$window', function($window) {}]);
