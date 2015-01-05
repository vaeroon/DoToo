DoToo.factory('DoToo.KeyActions', [
	'DooToo.ActionNames',
	'DoToo.Utils',
	function (ActionNames, Utils) {

		'use strict';
		var getKeyEventName = Utils.getKeyEventName;

		var keyActions = {};
		keyActions[ getKeyEventName(true, false, 78) ] = ActionNames.NEW; //Alt n
		keyActions[ getKeyEventName(true, false, 187) ] = ActionNames.NEW; //Alt +
		keyActions[ getKeyEventName(true, false, 189) ] = ActionNames.DONE; //Alt -
		keyActions[ getKeyEventName(true, false, 88) ] = ActionNames.REMOVE; //Alt x

		return keyActions;
	}
]);
