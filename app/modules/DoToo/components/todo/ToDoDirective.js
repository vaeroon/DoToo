DoToo.directive('dotooTodo', function () {
	'use strict';

	return {
		restrict: 'E',
		transclude: true,
		scope: {
			todo: '=todo'
		},
		templateUrl: 'modules/DoToo/components/todo/ToDo.html',
		controller: 'DoToo.components.ToDo.ToDoController',
		link: function (scope, element) {
			scope.onDelete = function () {
				element.find('.todo-item').on('transitionend', function (evt) {
					if(evt.originalEvent && evt.originalEvent.propertyName === 'height') {
						scope.remove(scope.todo);
					}
				}).addClass('collapse');
			};
		}
	};
});
