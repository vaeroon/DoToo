DoToo.controller('DoToo.Components.ActionListener.ActionListenerController', [
	'DooToo.ActionNames',
	'DoToo.KeyActions',
	'DoToo.Utils',
	function (ActionNames, KeyActions, Utils) {
		'use strict';

		var registeredHandlers = {};
		this.register = function(keyEventName, callback) {
			registeredHandlers[keyEventName] = callback;
		};

		this.handleEvent = function (evt) {
			var keyEventName = Utils.getKeyEventName(evt.altKey, evt.ctrlKey, evt.which),
				actionName = KeyActions[keyEventName];
			var callback = registeredHandlers[actionName];
			if (actionName && callback) {
				callback(evt);
				evt.stopImmediatePropagation();
				evt.preventDefault();
			}
		};

	}
]);
