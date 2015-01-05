DoToo.controller('DoToo.components.ToDo.ToDoController', [
	'$scope',
	function ($scope) {
		'use strict';

		$scope.remove = function (todo) {
			$scope.$emit('DoToo.todo.remove', {todo: todo});
		};
	}
]);
