DoToo.controller('DoToo.Components.NewToDo.NewToDoController', [
	'$scope',
	'DoToo.Models.ToDo',
	function ($scope, ToDo) {
		'use strict';

		var createToDo = function () {
			$scope.todo = new ToDo();
			$scope.todo.id = '';
		};

		createToDo();

		$scope.add = function () {
			if ($scope.newtodoForm.$valid) {
				$scope.ToDoService.add($scope.todo);
				createToDo();
			}
		};
	}
]);
