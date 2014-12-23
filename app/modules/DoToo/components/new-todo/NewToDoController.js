DoToo.controller('DoToo.Components.NewToDo.NewToDoController', [
	'$scope',
	'DoToo.Models.ToDo',
	'DoToo.Services.ToDoService',
	function ($scope, ToDo, ToDoService) {
		'use strict';

		$scope.todo = new ToDo();

		$scope.add = function () {
			ToDoService.add($scope.todo);
			$scope.todo = new ToDo();
		};
	}
]);
