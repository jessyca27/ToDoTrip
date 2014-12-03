'use strict';

angular.module('todoTrip.information', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/information/:idRegion', {
    templateUrl: 'information/information.html',
    controller: 'InformationCtrl'
  });
}])

.controller('InformationCtrl', ['$scope', function($scope) {
        $(".jqvmap-label").remove(); // Supprime le tooltip qui restait lorsque l'on change de page
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

        $("#test").click(function(){
           $("#test_div").show();
        });
}]);