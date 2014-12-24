DoToo.directive('dotooTodo', function () {
	'use strict';

	return {
		restrict: 'E',
		transclude: true,
		scope: {
			todo: '=todo'
		},
		templateUrl: 'modules/DoToo/components/todo/ToDo.html'
	};
});
