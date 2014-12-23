DoToo.directive('dotooNewTodo', function () {
	'use strict';

	return {
		restrict: 'E',
		transclude: true,
		scope: {
			todo: '=?todo'
		},
		templateUrl: 'modules/DoToo/components/new-todo/NewToDo.html',
		controller: 'DoToo.Components.NewToDo.NewToDoController'
	};
});
