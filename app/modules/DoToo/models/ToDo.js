DoToo.factory('DoToo.Models.ToDo', [
	function () {
		'use strict';

		return function ToDo (obj) {
			obj = obj || {};
			this.text = obj.text || '';
			this.isDone = obj.isDone || false;
			this.id = obj.id || 'todo-' + Math.round(new Date() / Math.random());
		};
	}
]);
