DoToo.provider('DoToo.Models.ToDo', [
	function () {
		'use strict';

		return function ToDo (text, isDone) {
			this.text = text;
			this.isDone = isDone;
		};
	}
]);
