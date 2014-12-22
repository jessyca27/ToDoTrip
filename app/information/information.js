'use strict';

var todotripApp = angular.module('todoTrip.information', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/information/:idRegion', {
            templateUrl: 'information/information.html',
            controller: 'InformationCtrl'
        });
    }])

    .controller('InformationCtrl', function($scope, filterFilter, $http, $routeParams){
        $(".jqvmap-label").remove(); // Supprime le tooltip qui restait lorsque l'on change de page

        $scope.idRegion = $routeParams.idRegion;

        $scope.clothesList = [];
        $scope.toiletriesList = [];
        $scope.placeholder = "Nouvel élément";

        $http.get('data/clothes.json').success(function(data){
            $scope.clothesList = data;
        });

        $http.get('data/vanityCase.json').success(function (data) {
            $scope.toiletriesList = data;
        });

	$http.get('data/season.json').success(function (data) {
            $scope.seasonsList = data;
        });

	$http.get('data/sexe.json').success(function (data) {
            $scope.sexesList = data;
        });

        $scope.$watch('clothesList', function(){
            $scope.remainingClothes = filterFilter($scope.clothesList, {completed:false}).length;
        }, true);

        $scope.$watch('toiletriesList', function(){
            $scope.remainingToiletries = filterFilter($scope.toiletriesList, {completed:false}).length;
        }, true);

	$scope.$watch('seasonsList', function(){
            $scope.remainingSasons = filterFilter($scope.seasonsList, {completed:false}).length;
        }, true);

	$scope.$watch('sexesList', function(){
            $scope.remainingSexes = filterFilter($scope.sexesList, {completed:false}).length;
        }, true);

        $scope.removeClothe = function(index){
            $scope.clothesList.splice(index,1);
        };

        $scope.removeToiletrie = function(index){
            $scope.toiletriesList.splice(index,1);
        };

        $scope.addClothe = function(){
            $scope.clothesList.push({
                name : $scope.newClothe,
                completed : false
            });
            $scope.newClothe = null;
            return false;
        };

        $scope.addToiletrie = function(){
            $scope.toiletriesList.push({
                name : $scope.newToiletrie,
                completed : false
            });
            $scope.newToiletrie = null;
            return false;
        };

        $scope.editClothe = function(clothe){
            clothe.editing = false;
        };

        $scope.editToiletrie = function(toiletrie){
            toiletrie.editing = false;
        };
    });
