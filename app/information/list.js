var todotripApp = angular.module('todoTrip.information', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/information/:idRegion', {
    templateUrl: 'information/information.html',
    controller: 'InformationCtrl'
  });
}])

.controller('InformationCtrl', ['$scope', '$http', '$location', 'filterFilter', function($scope, $http, $location, filterFilter) {

	$scope.todos = [];

	$http.get('vanityCase.json').success(function(data){
		$scope.elements = data;
		$scope.placeholder = "Nouvel élément";
	});

	$scope.$watch('todos', function(){
		$scope.remaining = filterFilter($scope.todos, {completed:false}).length;
		$scope.allchecked = !$scope.remaining;
	}, true)

	if($location.path() == ''){ $location.path('/')}
	$scope.location = $location;
	$scope.$watch('location.path()', function(path){
		$scope.statusFilter =
			(path == '/active') ? {completed : false} :
			(path == '/done') ? {completed : true} :
			null;
	});


	$scope.removeTodo = function(index){
		$scope.todos.splice(index,1);
	}

	$scope.addTodo = function(){
		$scope.todos.push({
			name : $scope.newtodo,
			completed : false
		});
		$scope.newtodo = '';
		return false;
	}

	$scope.editTodo = function(todo){
		todo.editing = false;
	}

	$scope.checkAllTodo = function(allchecked){
		$scope.todos.forEach(function(todo){
			todo.completed = allchecked;
		})
	}

}]);
