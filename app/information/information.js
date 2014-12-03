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


    $scope.elements = [
        {name : 'Serviette de bain', value : false},
        {name : 'Gel douche', value : false},
        {name : 'Shampoing', value : false},
        {name : 'Dentifrice', value : false},
        {name : 'Brosse à dent', value : false},
        {name : 'Brosse à cheveux', value : false},
        {name : 'Maquillage', value : false},
        {name : 'Sèche cheveux', value : false},
        {name : 'Rasoir', value : false},
        {name : 'Mousse à raser', value : false},
        {name : 'Déodorant', value : false},
        {name : 'Coupe ongle', value : false},
        {name : 'Pince à épiler', value : false},
        {name : 'Gants de toilette', value : false},
        {name : 'Démaquillant', value : false},
        {name : 'Disque démaquillant', value : false},
        {name : 'Crème solaire', value : false},
    ];
    $scope.orderProp = 'name';


    // Ajouter des élément à la liste définit par array
    $scope.addItem = function (array) {
        array.push({
            name: $scope.itemName
        });
        // Clear input fields after push
        $scope.itemName = "";
    };

    // Supprimer un élément de la liste définit par array
    $scope.supr = function (array, index) {
        array.splice(index, 1);
    };

    /*$scope.remove = function(subtask) {
        var idx = $scope.element.indexOf(subtask);
        var st = $scope.elements.element[idx];
        // remove from DB
        SubTask.remove({'subtaskId': element.id});
        // remove from local array
        $scope.elements.splice(idx,1)
    };*/

}]);
