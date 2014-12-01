'use strict';

angular.module('todoTrip.information', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/information', {
    templateUrl: 'information/information.html',
    controller: 'InformationCtrl'
  });
}])

.controller('InformationCtrl', ['$scope', function($scope) {
        //Ajout des différentes saisons
        $scope.saisons = [
            {name : 'Printemps', value : 'printemps'},
            {name : 'Été', value : 'ete'},
            {name : 'Automne', value : 'automne'},
            {name : 'Hiver', value : 'hiver'}
        ];
        //Définit la saison par défaut
        $scope.mySaison = $scope.saisons[0];
        //Ajout des différents type d'hébergements
        $scope.typeHebergements = [
            {name : "Tente", value : "tente"},
            {name : "Camping-Car", value : "campingCar"},
            {name : "Mobile-Home", value : "mobileHome"},
            {name : "Appartement", value : "appartement"}
        ];
        //Définit un hébergement par défaut
        $scope.myTypeHebergements = $scope.typeHebergements[0];
}]);