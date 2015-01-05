DoToo.directive('dotooTodosList', function () {
	'use strict';

	return {
		restrict: 'E',
		transclude: true,
		scope: {
			ToDoService: '=service'
		},
		templateUrl: 'modules/DoToo/components/todos-list/ToDosList.html',
		controller: 'DoToo.Components.ToDosList.ToDosListController'
	};
});
