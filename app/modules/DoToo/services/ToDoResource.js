DoToo.factory('DoToo.Services.ToDoResource', [
	'DoToo.Services.LocalStorage',
	function (LocalStorage) {
		'use strict';

		return {
			get: function () {
				return LocalStorage.get();
			},
			save: function (obj) {
				LocalStorage.save(obj)
			}
		};
	}
]);
