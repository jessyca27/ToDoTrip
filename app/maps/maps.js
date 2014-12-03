'use strict';

angular.module('todoTrip.maps', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/maps', {
    templateUrl: 'maps/maps.html',
    controller: 'MapsCtrl'
  });
}])

.controller('MapsCtrl', ['$window', function($window) {
        $('#francemap').vectorMap({
            map: 'france_fr',
            hoverOpacity: 0.5,
            hoverColor: "#EC0000",
            backgroundColor: "#dcf6ff",
            color: "#6aa1fb",
            borderColor: "#000000",
            selectedColor: "#EC0000",
            enableZoom: true,
            //showTooltip: true,
            onRegionClick: function(element, code, region)
            {
                var message = 'Région : "'
                    + region
                    + '" || Id : "'
                    + code
                    + '"';
                $window.location.href = '#/information/'+code;
            }
        });
}]);
