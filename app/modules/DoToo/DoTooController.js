DoToo.controller('DoToo.DoTooController', [
	'$scope',
	'$rootScope',
	'DoToo.Services.ToDoService',
	function ($scope, $rootScope, ToDoService) {
		'use strict';

		$scope.ToDoService = ToDoService;
		$scope.$watch('todoForm.$dirty', function (newVal, oldVal) {
			if (newVal && !oldVal) {
				ToDoService.save();
				$scope.todoForm.$setPristine();
			}
		});
		$rootScope.$on('DoToo.update', function () {
			$scope.ToDoService.lastUpdated = + new Date();
		}, false);
	}
]);
