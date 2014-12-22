DoToo.directive('dotooTodosList', function () {
	'use strict';

	return {
		restrict: 'E',
		transclude: true,
		scope: {
			todos: '=todos'
		},
		templateUrl: 'modules/DoToo/components/todos-list/ToDosList.html'
	};
});
