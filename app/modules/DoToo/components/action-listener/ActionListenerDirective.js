DoToo.directive('dotooActionListener', function () {
	'use strict';

	return {
		restrict: 'A',
		controller: 'DoToo.Components.ActionListener.ActionListenerController',
		link: function(scope, element) {
			var actionController = element.controller('dotooActionListener');
			element.on('keydown', actionController.handleEvent.bind(actionController));
		}
	};
});
