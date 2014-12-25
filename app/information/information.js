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
	$scope.activitiesList = [];
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

	$http.get('data/activites.json').success(function (data) {
            $scope.activitiesList = data;
        });

	$http.get('data/villes.json').success(function (data) {
       	    $scope.villesList = data;
        });

	$http.get('data/typesActivites.json').success(function (data) {
       	    $scope.typesList = data;
        });

        $scope.$watch('clothesList', function(){
            $scope.remainingClothes = filterFilter($scope.clothesList, {completed:false}).length;
        }, true);

        $scope.$watch('toiletriesList', function(){
            $scope.remainingToiletries = filterFilter($scope.toiletriesList, {completed:false}).length;
        }, true);

	$scope.$watch('activitiesList', function(){
            $scope.remainingActivities = filterFilter($scope.activitiesList, {completed:false}).length;
        }, true);

        $scope.removeClothe = function(index){
            $scope.clothesList.splice(index,1);
        };

        $scope.removeToiletrie = function(index){
            $scope.toiletriesList.splice(index,1);
        };

        $scope.removeActivity = function(index){
            $scope.activitiesList.splice(index,1);
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

        $scope.addActivity = function(){
            $scope.activitiesList.push({
                name : $scope.newActivity,
                completed : false
            });
            $scope.newActivity = null;
            return false;
        };

        $scope.editClothe = function(clothe){
            clothe.editing = false;
        };

        $scope.editToiletrie = function(toiletrie){
            toiletrie.editing = false;
        };

	$scope.editActivity = function(activity){
            activity.editing = false;
        };
    });
