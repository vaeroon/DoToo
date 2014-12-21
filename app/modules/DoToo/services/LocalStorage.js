DoToo.factory('DoToo.LocaStorage', [
	function () {
		'use strict';

		return {
			get: function () {
				return [
					{id: 'todo-1', text: 'Task 1 - some markup structure'},
					{id: 'todo-2', text: 'Task 2 - some css'}
				];
			},
			save: function () {
				return true;
			}
		};
	}
]);
