DoToo.directive('dotoo', function () {
	'use strict';

	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'modules/DoToo/DoToo.html',
		controller: 'DoToo.DoTooController'
	};
});
