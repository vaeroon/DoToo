DoToo.controller('DoToo.Components.NewToDo.NewToDoController', [
	'$scope',
	'DoToo.Models.ToDo',
	function ($scope, ToDo) {
		'use strict';

		$scope.todo = new ToDo();
		$scope.todo.id = '';

		$scope.add = function () {
			$scope.ToDoService.add($scope.todo);
			$scope.todo = new ToDo();
		};
	}
]);
