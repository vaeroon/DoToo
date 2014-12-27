DoToo.directive('dotooNewTodo', function () {
	'use strict';

	return {
		restrict: 'E',
		transclude: true,
		scope: {
			ToDoService: '=service'
		},
		templateUrl: 'modules/DoToo/components/new-todo/NewToDo.html',
		controller: 'DoToo.Components.NewToDo.NewToDoController'
	};
});
