DoToo.controller('DoToo', [
	'$scope',
	'$rootScope',
	'DoToo.Services.ToDoService',
	function ($scope, $rootScope, ToDoService) {
		'use strict';

		$scope.todos = ToDoService.get();
		$scope.$watch('todoForm.$dirty', function (newVal, oldVal) {
			if (newVal && !oldVal) {
				ToDoService.save($scope.todos.all);
				$scope.todoForm.$setPristine();
			}
		});
		$rootScope.$on('DoToo.update', function (evt, data) {
			debugger;
			$scope.todos = ToDoService.set(JSON.parse(data.todos));
		}, false);
	}
]);
