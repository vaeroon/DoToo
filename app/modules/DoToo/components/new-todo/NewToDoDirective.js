DoToo.directive('dotooNewTodo', [
	'DooToo.ActionNames',
	function (ActionNames) {
		'use strict';

		return {
			restrict: 'E',
			transclude: true,
			scope: {
				ToDoService: '=service'
			},
			require: '^dotooActionListener',
			templateUrl: 'modules/DoToo/components/new-todo/NewToDo.html',
			controller: 'DoToo.Components.NewToDo.NewToDoController',
			link: function(scope, element, attrs, actionController) {

				var handleAction = function () {
					element.find('.todo-text').focus();
				};


				actionController.register(ActionNames.NEW, handleAction);
			}
		};
	}
]);
