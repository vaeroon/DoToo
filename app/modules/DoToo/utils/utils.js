DoToo.factory('DoToo.Utils', [
	function () {
		'use strict';

		return {
			getKeyEventName: function (AltKey, CtrlKey, charCode) {
				var name = [];
				if (AltKey) {
					name.push('Alt');
				}
				if (CtrlKey) {
					name.push('Ctrl');
				}
				name.push(charCode);
				return name.join('+');
			}
		};
	}
]);
