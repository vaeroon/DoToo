DoToo.controller('DoToo.Components.ToDosList.ToDosListController', [
	'$scope',
	function ($scope) {
		'use strict';

		$scope.todos = $scope.ToDoService.get();
		$scope.$watch('todoForm.$dirty', function (newVal, oldVal) {
			if (newVal && !oldVal && $scope.todoForm.$valid) {
				$scope.ToDoService.save();
				$scope.todoForm.$setPristine();
			}
		});
		$scope.$watch('ToDoService.lastUpdated', function (newVal, oldVal) {
			if (newVal > oldVal) {
				$scope.todos = $scope.ToDoService.get();
			}
		});
		$scope.$on('DoToo.todo.remove', function (evt, data) {
			$scope.ToDoService.remove(data.todo);
			$scope.$apply();
		});
	}
]);
