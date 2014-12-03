'use strict';

var todotripApp = angular.module('todoTrip.information', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/information/:idRegion', {
    templateUrl: 'information/information.html',
    controller: 'InformationCtrl'
  });
}])

.controller('InformationCtrl', ['$scope', function($scope) {
	$("#ok").click(function(){	//Permet d'afficher les listes quand la saison a été choisie
	   $("#listes").show();
	});

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
}]);


todotripApp.controller('ToiletriesListCtrl', function($scope) {
  $scope.elements = [
    {'name': 'Serviette de bain', 'value':false},
    {'name': 'Gel douche', 'value':false},
    {'name': 'Shampoing', 'value':false},
    {'name': 'Dentifrice', 'value':false},
    {'name': 'Brosse à dent', 'value':false},
    {'name': 'Brosse à cheveux', 'value':false},
    {'name': 'Maquillage', 'value':false},
    {'name': 'Sèche cheveux', 'value':false},
    {'name': 'Rasoir', 'value':false},
    {'name': 'Mousse à raser', 'value':false},
    {'name': 'Déodorant', 'value':false},
    {'name': 'Coupe ongle', 'value':false},
    {'name': 'Pince à épiler', 'value':false},
    {'name': 'Gants de toilette', 'value':false},
    {'name': 'Démaquillant', 'value':false},
    {'name': 'Disque démaquillant', 'value':false},
    {'name': 'Crème solaire', 'value':false},
  ];
$scope.orderProp = 'name';
});
=======

        $("#test").click(function(){
           $("#test_div").show();
        });
}]);
>>>>>>> 23d9388fd122accbf63f45638ad9a1dde5d2b1ef
